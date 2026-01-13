import { prisma } from "../../lib/prisma";

// ✅ Step 2: Visitor saves Owner's contact (NO permission needed)
export const saveContact = async (
    userId: string, // Visitor's user ID
    cardId: string, // Owner's card ID
    data: {
        firstName?: string;
        lastName?: string;
        phone?: string;
        email?: string;
        company?: string;
        jobTitle?: string;
        image?: string;
        logo?: string;
        banner?: string;
        note?: string;
        profile_img?: string;
        latitude?: number;
        longitude?: number;
        city?: string;
        country?: string;
    }
) => {
    if (!userId) throw new Error("Unauthorized");
    if (!cardId) throw new Error("cardId is required");

    const card = await prisma.card.findUnique({
        where: { id: cardId },
        select: { id: true, userId: true },
    });
    if (!card) throw new Error("Card not found");
    
    // ✅ Visitor can save Owner's contact - no permission check needed
    // Just prevent saving own card
    if (card.userId === userId) throw new Error("You cannot save your own card");
    
    if (!data.phone && !data.email) throw new Error("Phone or email is required to save contact");

    // Fix: Proper OR condition type
    const orConditions: Array<{ phone: string } | { email: string }> = [];
    if (data.phone) {
        orConditions.push({ phone: data.phone });
    }
    if (data.email) {
        orConditions.push({ email: data.email });
    }

    const existing = await prisma.contact.findFirst({
        where: {
            userId,
            cardId,
            ...(orConditions.length > 0 ? { OR: orConditions } : {}),
        },
    });
    if (existing) return { alreadySaved: true, contact: existing };

    const contact = await prisma.contact.create({
        data: {
            userId, // Visitor's user ID
            cardId, // Owner's card ID
            firstName: data.firstName ?? "",
            lastName: data.lastName ?? "",
            phone: data.phone ?? "",
            email: data.email ?? "",
            company: data.company ?? "",
            jobTitle: data.jobTitle ?? "",
            image: data.image ?? "",
            logo: data.logo ?? "",
            banner: data.banner ?? "",
            note: data.note ?? "",
            profile_img: data.profile_img ?? "",
            latitude: data.latitude ?? null,
            longitude: data.longitude ?? null,
            city: data.city ?? "",
            country: data.country ?? "",
        },
    });

    return { alreadySaved: false, contact };
};

// Get all contacts
export const getAllContacts = async (userId: string) => {
    if (!userId) throw new Error("userId is required");

    const contacts = await prisma.contact.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    });

    return contacts || [];
};

// Update contact
export const updateContact = async (
    contactId: string,
    userId: string,
    data: Partial<{
        firstName: string;
        lastName: string;
        phone: string;
        email?: string;
        company?: string;
        jobTitle?: string;
        image?: string;
        logo?: string;
        banner?: string;
        note?: string;
        profile_img?: string;
        latitude?: number;
        longitude?: number;
        city?: string;
        country?: string;
    }>
) => {
    const existing = await prisma.contact.findFirst({
        where: { id: contactId, userId },
    });

    if (!existing) throw new Error("Contact not found or unauthorized");

    if (!data || Object.keys(data).length === 0) return existing;

    const updateData: {
        firstName?: string;
        lastName?: string;
        phone?: string;
        email?: string;
        company?: string;
        jobTitle?: string;
        image?: string;
        logo?: string;
        banner?: string;
        note?: string;
        profile_img?: string;
        latitude?: number | null;
        longitude?: number | null;
        city?: string;
        country?: string;
    } = {};

    if (data.firstName !== undefined) updateData.firstName = data.firstName;
    if (data.lastName !== undefined) updateData.lastName = data.lastName;
    if (data.phone !== undefined) updateData.phone = data.phone;
    if (data.email !== undefined) updateData.email = data.email;
    if (data.company !== undefined) updateData.company = data.company;
    if (data.jobTitle !== undefined) updateData.jobTitle = data.jobTitle;
    if (data.image !== undefined) updateData.image = data.image;
    if (data.logo !== undefined) updateData.logo = data.logo;
    if (data.banner !== undefined) updateData.banner = data.banner;
    if (data.note !== undefined) updateData.note = data.note;
    if (data.profile_img !== undefined) updateData.profile_img = data.profile_img;
    if (data.latitude !== undefined) updateData.latitude = data.latitude ?? null;
    if (data.longitude !== undefined) updateData.longitude = data.longitude ?? null;
    if (data.city !== undefined) updateData.city = data.city;
    if (data.country !== undefined) updateData.country = data.country;

    return prisma.contact.update({
        where: { id: contactId },
        data: updateData,
    });
};

// Delete contact
export const deleteContact = async (contactId: string, userId: string) => {
    if (!contactId) throw new Error("contactId is required");
    if (!userId) throw new Error("Unauthorized");

    const contact = await prisma.contact.findFirst({
        where: { id: contactId, userId },
        select: { id: true },
    });

    if (!contact) {
        return {
            success: false,
            message: "Contact already deleted or not found",
        };
    }

    await prisma.contact.delete({ where: { id: contactId } });

    return {
        success: true,
        message: "Contact deleted successfully",
    };
};

// ✅ Step 4: Visitor shares their contact with Owner
export const shareVisitorContact = async (
  visitorUserId: string, // Visitor's user ID
  ownerCardId: string, // Owner's card that was scanned
  visitorCardId: string, // Visitor's card to share
  scanLocation?: {
    latitude?: number;
    longitude?: number;
    city?: string;
    country?: string;
  }
) => {
  if (!visitorUserId) throw new Error("Unauthorized");
  if (!ownerCardId || !visitorCardId) {
    throw new Error("ownerCardId and visitorCardId are required");
  }

  // Get owner card
  const ownerCard = await prisma.card.findUnique({
    where: { id: ownerCardId },
    include: { 
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });
  if (!ownerCard) throw new Error("Owner card not found");
  if (!ownerCard.user) throw new Error("Owner not found");

  // Get visitor card
  const visitorCard = await prisma.card.findUnique({
    where: { id: visitorCardId },
    include: { 
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      personalInfo: true,
      socialLinks: true,
    },
  });
  if (!visitorCard) throw new Error("Visitor card not found");
  if (!visitorCard.user) throw new Error("Visitor not found");

  // Verify visitor owns the card they're sharing
  if (visitorCard.userId !== visitorUserId) {
    throw new Error("Unauthorized: You can only share your own card");
  }

  // Check if share already exists and pending
  const existingShare = await prisma.visitorContactShare.findFirst({
    where: {
      ownerCardId,
      visitorCardId,
      ownerId: ownerCard.userId,
      status: "pending_owner_approval",
    },
  });

  if (existingShare) {
    throw new Error("Share request already sent and pending");
  }

  // Create visitor contact share with status "pending_owner_approval"
  const share = await prisma.visitorContactShare.create({
    data: {
      ownerCardId,
      visitorCardId,
      ownerId: ownerCard.userId,
      visitorId: visitorUserId,
      status: "pending_owner_approval",
      latitude: scanLocation?.latitude ?? null,
      longitude: scanLocation?.longitude ?? null,
      city: scanLocation?.city ?? null,
      country: scanLocation?.country ?? null,
    },
    include: {
      visitorCard: {
        include: {
          personalInfo: true,
          socialLinks: true,
        },
      },
      ownerCard: {
        include: {
          personalInfo: true,
        },
      },
    },
  });

  return {
    shareId: share.id,
    ownerCardId: share.ownerCardId,
    visitorCardId: share.visitorCardId,
    status: share.status,
    visitorCard: share.visitorCard,
    ownerCard: share.ownerCard,
    location: {
      latitude: share.latitude,
      longitude: share.longitude,
      city: share.city,
      country: share.country,
    },
    createdAt: share.createdAt,
  };
};

// ✅ Step 5: Owner gets pending visitor shares
export const getPendingVisitorShares = async (ownerUserId: string) => {
  if (!ownerUserId) throw new Error("userId is required");

  const shares = await prisma.visitorContactShare.findMany({
    where: {
      ownerId: ownerUserId,
      status: "pending_owner_approval",
    },
    include: {
      visitorCard: {
        include: {
          personalInfo: true,
          socialLinks: true,
        },
      },
      visitor: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return shares.map((share) => ({
    id: share.id,
    ownerCardId: share.ownerCardId,
    visitorCardId: share.visitorCardId,
    visitorCard: share.visitorCard,
    visitor: share.visitor,
    status: share.status,
    location: {
      latitude: share.latitude,
      longitude: share.longitude,
      city: share.city,
      country: share.country,
    },
    createdAt: share.createdAt,
  }));
};

// ✅ Step 6: Owner approves visitor share
export const approveVisitorShare = async (shareId: string, ownerUserId: string) => {
  if (!shareId) throw new Error("shareId is required");
  if (!ownerUserId) throw new Error("Unauthorized");

  // Find share
  const share = await prisma.visitorContactShare.findUnique({
    where: { id: shareId },
    include: {
      visitorCard: {
        include: {
          personalInfo: true,
        },
      },
    },
  });

  if (!share) {
    throw new Error("Share not found");
  }

  // Verify owner
  if (share.ownerId !== ownerUserId) {
    throw new Error("Unauthorized: You can only approve shares sent to you");
  }

  // Check if already processed
  if (share.status !== "pending_owner_approval") {
    throw new Error(`Share already ${share.status}`);
  }

  // Update share status to "approved"
  const updatedShare = await prisma.visitorContactShare.update({
    where: { id: shareId },
    data: { status: "approved" },
  });

  // Auto-create contact in owner's contact list
  // Fix: Handle nullable personalInfo properly
  const personalInfo = share.visitorCard.personalInfo;
  if (!personalInfo) {
    throw new Error("Visitor card personal info not found");
  }

  const contact = await prisma.contact.create({
    data: {
      userId: ownerUserId, // Owner gets visitor's contact
      cardId: share.visitorCardId, // Visitor's card ID
      firstName: personalInfo.firstName || "",
      lastName: personalInfo.lastName || "",
      phone: personalInfo.phoneNumber || "",
      email: personalInfo.email || "",
      company: "", // Not in personalInfo schema
      jobTitle: personalInfo.jobTitle || "",
      image: "", // Not in personalInfo schema
      logo: "", // Not in personalInfo schema
      banner: "", // Not in personalInfo schema
      profile_img: "", // Not in personalInfo schema
      note: "", // Not in personalInfo schema
      // Use scan location
      latitude: share.latitude,
      longitude: share.longitude,
      city: share.city || "",
      country: share.country || "",
    },
  });

  return {
    shareId: updatedShare.id,
    status: updatedShare.status,
    contact,
  };
};

// ✅ Step 6: Owner rejects visitor share
export const rejectVisitorShare = async (shareId: string, ownerUserId: string) => {
  if (!shareId) throw new Error("shareId is required");
  if (!ownerUserId) throw new Error("Unauthorized");

  // Find share
  const share = await prisma.visitorContactShare.findUnique({
    where: { id: shareId },
  });

  if (!share) {
    throw new Error("Share not found");
  }

  // Verify owner
  if (share.ownerId !== ownerUserId) {
    throw new Error("Unauthorized: You can only reject shares sent to you");
  }

  // Check if already processed
  if (share.status !== "pending_owner_approval") {
    throw new Error(`Share already ${share.status}`);
  }

  // Update share status to "rejected"
  const updatedShare = await prisma.visitorContactShare.update({
    where: { id: shareId },
    data: { status: "rejected" },
  });

  return {
    shareId: updatedShare.id,
    status: updatedShare.status,
  };
};

// Optional: Owner requests Customer's contact permission
export const requestContactPermission = async (
    userId: string,
    cardId: string,
    message?: string
) => {
    if (!userId) throw new Error("Unauthorized");
    if (!cardId) throw new Error("cardId is required");

    // Check if card exists
    const card = await prisma.card.findUnique({
        where: { id: cardId },
        include: { 
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
    });
    if (!card) throw new Error("Card not found");
    if (!card.user) throw new Error("Card owner not found");

    // Prevent owner from requesting own card
    if (card.userId === userId) {
        throw new Error("You cannot request permission for your own card");
    }

    // Get card owner (the person who will receive the request)
    const cardOwnerId = card.userId;

    // Check if request already exists
    const existingRequest = await prisma.contactRequest.findFirst({
        where: {
            cardId,
            requestedBy: userId,
            requestedTo: cardOwnerId,
            status: "pending",
        },
    });

    if (existingRequest) {
        throw new Error("Request already sent and pending");
    }

    // Create request
    const request = await prisma.contactRequest.create({
        data: {
            cardId,
            requestedBy: userId, // Owner who wants the contact
            requestedTo: cardOwnerId, // Customer who owns the card
            status: "pending",
            message: message || null,
        },
        include: {
            card: {
                include: {
                    personalInfo: true,
                    socialLinks: true,
                },
            },
            requestedByUser: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                },
            },
        },
    });

    return {
        requestId: request.id,
        cardId: request.cardId,
        status: request.status,
        message: request.message,
        card: request.card,
        requestedBy: request.requestedByUser,
        createdAt: request.createdAt,
    };
};

// Get received requests (Customer sees Owner's requests)
export const getReceivedRequests = async (userId: string) => {
    if (!userId) throw new Error("userId is required");

    const requests = await prisma.contactRequest.findMany({
        where: {
            requestedTo: userId, // Requests sent to this user
        },
        include: {
            card: {
                include: {
                    personalInfo: true,
                    socialLinks: true,
                },
            },
            requestedByUser: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return requests.map((req) => ({
        id: req.id,
        cardId: req.cardId,
        card: req.card,
        owner: req.requestedByUser,
        status: req.status,
        message: req.message,
        createdAt: req.createdAt,
        updatedAt: req.updatedAt,
    }));
};

// Get sent requests (Owner sees their requests)
export const getSentRequests = async (userId: string) => {
    if (!userId) throw new Error("userId is required");

    const requests = await prisma.contactRequest.findMany({
        where: {
            requestedBy: userId, // Requests sent by this user
        },
        include: {
            card: {
                include: {
                    personalInfo: true,
                    socialLinks: true,
                },
            },
            requestedToUser: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return requests.map((req) => ({
        id: req.id,
        cardId: req.cardId,
        card: req.card,
        customer: req.requestedToUser,
        status: req.status,
        message: req.message,
        createdAt: req.createdAt,
        updatedAt: req.updatedAt,
    }));
};

// Approve request (Customer approves)
export const approveRequest = async (requestId: string, userId: string) => {
    if (!requestId) throw new Error("requestId is required");
    if (!userId) throw new Error("Unauthorized");

    // Find request
    const request = await prisma.contactRequest.findUnique({
        where: { id: requestId },
        include: {
            card: {
                include: {
                    personalInfo: true,
                },
            },
        },
    });

    if (!request) {
        throw new Error("Request not found");
    }

    // Verify user is the one who received the request
    if (request.requestedTo !== userId) {
        throw new Error("Unauthorized: You can only approve requests sent to you");
    }

    // Check if already processed
    if (request.status !== "pending") {
        throw new Error(`Request already ${request.status}`);
    }

    // Update request status
    const updatedRequest = await prisma.contactRequest.update({
        where: { id: requestId },
        data: {
            status: "approved",
        },
    });

    // Optionally auto-create contact when approved
    // Uncomment if you want automatic contact creation
    /*
    const personalInfo = request.card.personalInfo;
    if (!personalInfo) {
        throw new Error("Card personal info not found");
    }

    const contact = await prisma.contact.create({
        data: {
            userId: request.requestedBy, // Owner gets customer's contact
            cardId: request.cardId,
            firstName: personalInfo.firstName || "",
            lastName: personalInfo.lastName || "",
            phone: personalInfo.phoneNumber || "",
            email: personalInfo.email || "",
            company: "",
            jobTitle: personalInfo.jobTitle || "",
            image: "",
            logo: "",
            banner: "",
            profile_img: "",
            note: "",
        },
    });
    */

    return {
        requestId: updatedRequest.id,
        status: updatedRequest.status,
        // contact: contact, // If auto-create enabled
    };
};

// Reject request (Customer rejects)
export const rejectRequest = async (requestId: string, userId: string) => {
    if (!requestId) throw new Error("requestId is required");
    if (!userId) throw new Error("Unauthorized");

    // Find request
    const request = await prisma.contactRequest.findUnique({
        where: { id: requestId },
    });

    if (!request) {
        throw new Error("Request not found");
    }

    // Verify user is the one who received the request
    if (request.requestedTo !== userId) {
        throw new Error("Unauthorized: You can only reject requests sent to you");
    }

    // Check if already processed
    if (request.status !== "pending") {
        throw new Error(`Request already ${request.status}`);
    }

    // Update request status
    const updatedRequest = await prisma.contactRequest.update({
        where: { id: requestId },
        data: {
            status: "rejected",
        },
    });

    return {
        requestId: updatedRequest.id,
        status: updatedRequest.status,
    };
};

export const contactServices = {
    saveContact,
    getAllContacts,
    updateContact,
    deleteContact,
    shareVisitorContact,
    getPendingVisitorShares,
    approveVisitorShare,
    rejectVisitorShare,
    requestContactPermission,
    getReceivedRequests,
    getSentRequests,
    approveRequest,
    rejectRequest,
};