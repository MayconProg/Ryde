import { sql } from "@/lib/neon";

export async function GET() {
  try {
    const response = await sql`SELECT * FROM drivers`;

    return Response.json({
      message: "Drivers Found Successfully!",
      data: response,
    });
  } catch (error) {
    console.error("Error fetching drivers: ", error);
    return Response.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
