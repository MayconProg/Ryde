import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, amount } = body;

  if (!name || !email || !amount) {
    return Response.json(
      { error: "Missing Required Credentials!" },
      { status: 400 }
    );
  }

  let customer = (await stripe.customers.list({ email })).data[0];

  if (!customer) {
    const newCustomer = await stripe.customers.create({
      email,
      name,
    });

    customer = newCustomer;
  }

  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2024-06-20" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(amount) * 100,
    currency: "usd",
    customer: customer.id,

    automatic_payment_methods: {
      enabled: true,
      allow_redirects: "never",
    },
  });

  return Response.json(
    {
      paymentIntent: paymentIntent,
      ephemeralKey: ephemeralKey,
      customer: customer.id,
    },
    { status: 201 }
  );
}
