import { prisma } from "../../lib/prisma";

const saveContact = async (
    userId: string,
    cardId: string,
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
    // 1️⃣ Basic guards
    if (!userId) throw new Error("Unauthorized");
    if (!cardId) throw new Error("cardId is required");

    // 2️⃣ Card exists check
    const card = await prisma.card.findUnique({
        where: { id: cardId },
        select: { id: true, userId: true },
    });
    if (!card) throw new Error("Card not found");

    // 3️⃣ Owner self-save prevent
    if (card.userId === userId) throw new Error("You cannot save your own card");

    // 4️⃣ Minimum identifier check
    if (!data.phone && !data.email) throw new Error("Phone or email is required to save contact");

    // 5️⃣ Duplicate check (per user)
    const existing = await prisma.contact.findFirst({
        where: {
            userId,
            cardId,
            OR: [
                data.phone ? { phone: data.phone } : undefined,
                data.email ? { email: data.email } : undefined,
            ].filter(Boolean) as any[],
        },
    });

    if (existing) return { alreadySaved: true, contact: existing };

    // 6️⃣ Create contact
    const contact = await prisma.contact.create({
        data: {
            userId,
            cardId,
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
            // Use null instead of 0 for location fields (0 is a valid coordinate)
            latitude: data.latitude ?? null,
            longitude: data.longitude ?? null,
            city: data.city ?? "",
            country: data.country ?? "",
        },
    });

    return { alreadySaved: false, contact };
};

const getAllContacts = async (userId: string) => {
    if (!userId) throw new Error("userId is required");

    const contacts = await prisma.contact.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    });

    // Return empty array if no contacts found (this is a valid state)
    return contacts || [];
};

const updateContact = async (
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

    if (!data || Object.keys(data).length === 0) {
        // কোনো update করা হবে না, শুধু existing contact return
        return existing;
    }

    // Prepare update data - only include fields that are provided
    const updateData: any = {};
    
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
    
    // Handle location fields - allow null values
    if (data.latitude !== undefined) updateData.latitude = data.latitude;
    if (data.longitude !== undefined) updateData.longitude = data.longitude;
    if (data.city !== undefined) updateData.city = data.city;
    if (data.country !== undefined) updateData.country = data.country;

    return prisma.contact.update({
        where: { id: contactId },
        data: updateData,
    });
};

const deleteContact = async (contactId: string, userId: string) => {
    if (!contactId) {
        throw new Error("contactId is required");
    }

    if (!userId) {
        throw new Error("Unauthorized");
    }

    // 1️⃣ Check exists + ownership
    const contact = await prisma.contact.findFirst({
        where: {
            id: contactId,
            userId,
        },
        select: { id: true },
    });

    // 🔐 This covers:
    // - wrong id
    // - already deleted id
    // - other user's contact
    if (!contact) {
        return {
            success: false,
            message: "Contact already deleted or not found",
        };
    }

    // 2️⃣ Delete
    await prisma.contact.delete({
        where: { id: contactId },
    });

    return {
        success: true,
        message: "Contact deleted successfully",
    };
};

export const contactServices = { 
    saveContact, 
    getAllContacts, 
    updateContact, 
    deleteContact 
};