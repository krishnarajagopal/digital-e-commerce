import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
	typescript: true,
	apiVersion: '2023-08-16',
});

export const POST = async (request: Request) => {
	const data: any = await request.json();
	const amount = data.amount;

	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: Number(amount) * 100,
			currency: 'usd',
		});
		return NextResponse.json(paymentIntent.client_secret, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error, { status: 400 });
	}
};
