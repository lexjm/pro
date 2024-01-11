import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getContacts = async (variables: { type?: string | null }) => {
  const type = variables.type === 'customers' ? 'customer' : variables.type === 'leads' ? 'lead' : null;

  const contacts = await prisma.contact.findMany({
    where: {
      type: type,
    },
  });

  return {
    contacts,
  };
};

export const getContact = async (variables: { id: string }) => {
  if (!variables.id) {
    throw new Error('Invalid contact id');
  }

  const contact = await prisma.contact.findUnique({
    where: {
      id: variables.id,
    },
  });

  if (!contact) {
    throw new Error('Contact not found');
  }

  return {
    contact,
  };
};

// ... Continúa con las demás funciones, reemplazando las llamadas a mocks con operaciones de Prisma

export const createContact = async (variables: {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  type?: string;
}) => {
  const contact = await prisma.contact.create({
    data: {
      firstName: variables.firstName,
      lastName: variables.lastName,
      email: variables.email,
      phone: variables.phone,
      type: variables.type,
      name: variables.firstName && variables.lastName ? `${variables.firstName} ${variables.lastName}` : null,
    },
  });

  return {
    contact,
  };
};

export const updateContact = async (
  variables: { id: string } & Partial<Contact>,
) => {
  const { id, ...rest } = variables;

  const contact = await prisma.contact.update({
    where: {
      id: id,
    },
    data: rest,
  });

  return {
    contact,
  };
};

// Nota: Las funciones para manejar comentarios y notificaciones necesitarían modelos y lógica adicionales.