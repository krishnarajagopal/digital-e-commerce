import {
	useStripe,
	useElements,
	PaymentElement,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import PaymentSuccessfulPage from '../../../(WithoutLayout)/PaymentSuccessfulPage/page';

const CheckoutForm = ({ amount }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [errorMessage, setErrorMessage] = useState();
	const [loading, setLoading] = useState(false);
	const handleError = (error) => {
		setLoading(false);
		setErrorMessage(error.message);
	};

	const handleSubmit = async (event) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setLoading(true);
		// Trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}

		const res = await fetch('/api/create-intent', {
			method: 'POST',
			body: JSON.stringify({
				amount: amount,
			}),
		});
		// create payment intent and obtain client secret
		const clientSecret = await res.json();
		const result = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			clientSecret,
			elements,
			confirmParams: {
				return_url: 'http://localhost:3000/PaymentSuccessfulPage',
			},
		});

		if (result.error) {
			// Show error to your customer (for example, payment details incomplete)
			console.log(result.error.message);
		} else {
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='px-32 md:mx-[400px] mt-12'>
				<PaymentElement />
				<button className='bg-primary p-3 text-white rounded-md w-full mt-5 hover:bg-blue-600  transition duration-2'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default CheckoutForm;
