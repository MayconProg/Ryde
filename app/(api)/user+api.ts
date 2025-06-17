import { sql } from "@/lib/neon";

export async function POST(req: Request) {
  try {
    const { name, email, clerkId } = await req.json();

    if (!name || !email || !clerkId) {
      return Response.json(
        { error: "Missing required Fields!" },
        { status: 400 }
      );
    }

    const response = await sql`
    INSERT INTO users (
        name,
        email,
        clerk_id
    ) VALUES (
        ${name},
        ${email},
        ${clerkId}
    )
  `;

    return new Response(
      JSON.stringify({ message: "User Created Successfully!", data: response }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ error: error }, { status: 500 });
  }
}
