import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    await prisma.user.createMany({
        data: [
            { name: "Jarvis", email: "jarvis@gmail.com" },
            { name: "Sparrow", email: "sparrow@gmail.com" },
        ]
    })
}
seed().then(() => prisma.$disconnect());