import { prisma } from "../../lib/prisma";

const saveContact = async (
  userId: string,
  cardId: string,
  data: {
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
  }
) => {
  if (!userId || !cardId) throw new Error("userId and cardId are required");

  const existing = await prisma.contact.findFirst({
    where: {
      cardId,
      OR: [
        data.phone ? { phone: data.phone } : undefined,
        data.email ? { email: data.email } : undefined,
      ].filter(Boolean) as any[],
    },
  });

  if (existing) {
    return { alreadySaved: true, contact: existing };
  }

  const contact = await prisma.contact.create({
    data: {
      userId,
      cardId,
      ...data,
    },
  });

  return { alreadySaved: false, contact };
};

// Get all contacts for a user
const getAllContacts = async (userId: string) => {
  if (!userId) throw new Error("userId is required");

  return prisma.contact.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
};

// Update a single contact
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

  return prisma.contact.update({
    where: { id: contactId },
    data,
  });
};

// Delete a single contact
const deleteContact = async (contactId: string, userId: string) => {
  const existing = await prisma.contact.findFirst({
    where: { id: contactId, userId },
  });

  if (!existing) throw new Error("Contact not found or unauthorized");

  return prisma.contact.delete({ where: { id: contactId } });
};

export const contactServices = {
  saveContact,
  getAllContacts,
  updateContact,
  deleteContact,
};
