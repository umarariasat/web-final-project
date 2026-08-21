import "dotenv/config";
import { prisma } from "./lib/prisma";

async function main() {
  try {
    console.log("🔄 Connecting to database...");

    await prisma.$connect();

    console.log("✅ DATABASE CONNECTED");

    const products = await prisma.product.findMany({
      orderBy: {
        id: "asc",
      },
    });

    console.log(`✅ PRODUCTS FOUND: ${products.length}`);

    console.log(products);
  } catch (error) {
    console.error("❌ DATABASE ERROR:");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();