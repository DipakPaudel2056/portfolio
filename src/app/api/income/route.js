import prisma from "../../lib/prisma";
// here i will create an endpoint to create and read all the income items
export async function POST(req) {
  const body = await req.json();
  try {
    await prisma.finance.create({
      data: {
        amount: body.amount,
        type: body.type,
        category: body.category,
        date: body.date,
      },
    });
    console.log("Received income data:", body);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
export async function GET() {
  try {
    const finances = await prisma.finance.findMany({
      orderBy: {
        timestamp: "desc",
      },
    });
    return new Response(JSON.stringify(finances), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
