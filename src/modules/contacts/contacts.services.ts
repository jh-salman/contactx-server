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

    // Check if card exists
    const card = await prisma.card.findUnique({ where: { id: cardId } });
    if (!card) throw new Error("Card not found");

    // Prevent duplicate contacts
    const existing = await prisma.contact.findFirst({
        where: {
            cardId,
            OR: [
                data.phone ? { phone: data.phone } : undefined,
                data.email ? { email: data.email } : undefined,
            ].filter(Boolean) as any[],
        },
    });

    if (existing) return { alreadySaved: true, contact: existing };

    const contact = await prisma.contact.create({ data: { userId, cardId, ...data } });
    return { alreadySaved: false, contact };
};

const getAllContacts = async (userId: string) => {
    if (!userId) throw new Error("userId is required");

    const contacts = await prisma.contact.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    });

    if (!contacts || contacts.length === 0) throw new Error("No contacts found");
    return contacts;
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

    return prisma.contact.update({
        where: { id: contactId },
        data,
    });
};


const deleteContact = async (contactId: string, userId: string) => {
    if (!contactId) throw new Error("contactId is required");

    const existing = await prisma.contact.findFirst({ where: { id: contactId, userId } });
    if (!existing) throw new Error("Contact not found or unauthorized");

    return prisma.contact.delete({ where: { id: contactId } });
};

export const contactServices = { saveContact, getAllContacts, updateContact, deleteContact };
