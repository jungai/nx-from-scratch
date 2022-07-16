import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

(async () => {
  console.log('prepare seed data 🔥');
  await prisma.song.upsert({
    where: { id: 1 },
    update: { name: 'bbibbi' },
    create: { id: 1, name: 'strawberry moon' },
  });
  await console.log('✅');
})();
