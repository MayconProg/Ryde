import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { payment_method_id, payment_intent_id, customer_id } = body;

    if (!payment_method_id || !payment_intent_id || !customer_id) {
      return Response.json(
        { error: "Missing Required Credentials!" },
        { status: 400 }
      );
    }

    const paymentMethod = await stripe.paymentMethods.attach(
      payment_method_id,
      {
        customer: customer_id,
      }
    );

    const result = await stripe.paymentIntents.confirm(payment_intent_id, {
      payment_method: paymentMethod.id,
    });

    return Response.json(
      {
        success: true,
        message: "Payment Confirmed Successfully!",
        result: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        error,
        message: "Internal Server Error!",
      },
      { status: 500 }
    );
  }
}
