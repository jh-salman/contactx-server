import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;

// Create adapter with connection pooling for serverless
const adapter = new PrismaPg({ 
  connectionString,
  // Connection pool settings optimized for serverless
  max: 10, // Maximum number of connections in pool
});

const prisma = new PrismaClient({ 
  adapter,
  // Log queries in development only
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// Handle graceful shutdown (for traditional servers)
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  process.on('beforeExit', async () => {
    await prisma.$disconnect();
  });
}

export { prisma };