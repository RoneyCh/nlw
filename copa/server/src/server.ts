import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query", "info", "warn"]
});

async function bootstrap() {
    const app = fastify({
        logger: true
    });

    await app.register(fastifyCors, {
        origin: true
        });

    app.get("/pools/count", async () => {
        const count = await prisma.pool.count();
        return { count };
    });

    await app.listen({ port: 3333, host: "0.0.0" });
}

bootstrap();