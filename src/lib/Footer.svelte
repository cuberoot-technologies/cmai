<script>
	import { API_BASE_URL } from '$lib/api';

	let email = '';
	let message = '';
	let isError = false;

	async function handleSubmit(event) {
		event.preventDefault();

		if (!email) {
			message = 'Please enter an email address.';
			isError = true;
			return;
		}

		try {
			const response = await fetch(`${API_BASE_URL}/collections/cmai_newsletter/records`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email
				})
			});

			if (response.ok) {
				message = 'Thank you for subscribing!';
				isError = false;
				email = ''; // Clear input
			} else {
				const err = await response.json();
				console.error(err);
				message = 'Failed to subscribe. Please try again.';
				isError = true;
			}
		} catch (error) {
			console.error('Error submitting:', error);
			message = 'An error occurred. Please try again.';
			isError = true;
		}
	}
</script>

<footer class=" bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 pt-6 pb-6">
		<div class="flex flex-wrap justify-between gap-4">
			<div>
				<div class="d-flex mx-auto max-w-screen-xl justify-end pt-6 pb-6">
					<h1 class="mb-3 text-xl font-bold text-white">Subscribe to our monthly newsletter</h1>
					<form
						on:submit|preventDefault={handleSubmit}
						class="flex w-full max-w-md flex-col space-y-2"
					>
						<div class="flex space-x-2">
							<input
								type="email"
								placeholder="Enter Your Email"
								bind:value={email}
								class="text-dblue flex-1 rounded-lg border border-gray-300 bg-white px-6 py-2 font-bold focus:ring focus:ring-sky-300"
								required
							/>
							<button
								type="submit"
								class="text-dblue rounded-lg border border-gray-300 bg-white px-6 py-2 font-bold hover:bg-gray-200"
							>
								Subscribe
							</button>
						</div>

						{#if message}
							<p class={`text-sm font-semibold ${isError ? 'text-red-600' : 'text-green-600'}`}>
								{message}
							</p>
						{/if}
					</form>
				</div>
				<a
					href="mailto:Secretary@cma-india.in"
					class="text-dblue rounded-lg bg-white px-6 py-2 font-bold hover:bg-gray-200"
				>
					Contact Us
				</a>
				<div class="mt-4 flex gap-4">
					<a
						class="flex items-center justify-center gap-1.5 text-base ltr:sm:justify-start rtl:sm:justify-end"
						href="mailto:Secretary@cma-india.in"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-5 shrink-0 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>

						<span class="flex-1 text-white"> Secretary@cma-india.in </span>
					</a>
					<a
						class="flex items-center justify-center gap-1.5 text-base ltr:sm:justify-start rtl:sm:justify-end"
						href="tel:9811779580"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-5 shrink-0 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>

						<span class="flex-1 text-white">+91 9811779580</span>
					</a>
				</div>
				<p class="mt-4 text-base tracking-wider text-white">
					<b>CMAI Office Address:</b> 511, 5th floor, World Trade Centre, Barakhamba Road, New Delhi
					- 110001
				</p>
				<p class="mt-4 text-base tracking-wider text-white">
					<b> CMAI Registered Address: </b> A-65, Sec-71, Noida, Uttar Pradesh
				</p>
			</div>
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.9278950569337!2d77.22443257550081!3d28.631923075664986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzU0LjkiTiA3N8KwMTMnMzcuMiJF!5e0!3m2!1sen!2sin!4v1746206843358!5m2!1sen!2sin"
					width="100%"
					height="300"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</div>
</footer>

<footer class="bg-gray-800 p-4 text-center text-white">
	<p>Copyright © {new Date().getFullYear()} CMA-India. All rights reserved.</p>
</footer>
