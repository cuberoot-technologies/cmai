<script>
	let name = '';
	let email = '';
	let phone = '';
	let designation = '';
	let organization = '';
	let successMessage = '';
	let errorMessage = '';
	import { API_BASE_URL } from '$lib/api';

	const API_URL = `${API_BASE_URL}/collections/member_form/records`;

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Basic Validation
		if (!name || !email || !phone || !designation || !organization) {
			errorMessage = 'Please fill in all fields.';
			successMessage = '';
			return;
		}

		// Build request payload
		const data = {
			name,
			email,
			phone: Number(phone),
			designation,
			organization
		};

		try {
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			if (response.ok) {
				successMessage = 'Form submitted successfully!';
				errorMessage = '';
				name = email = phone = designation = organization = '';
			} else {
				errorMessage = 'Failed to submit form.';
				successMessage = '';
			}
		} catch (err) {
			console.error('Error:', err);
			errorMessage = 'Something went wrong. Please try again.';
			successMessage = '';
		}
	};
</script>

<section class="relative mx-auto lg:items-center">
	<div class="w-full border border-gray-200 p-3">
		<div class="mx-auto max-w-lg text-center">
			<h1 class="text-dblue text-2xl font-bold">Become a member now!</h1>
			<p class="mt-4 text-xl text-gray-600">
				Accelerate your Net Zero journey with CMAI. Register below to express your interest in joining CMAI.
			</p>
		</div>

		<form on:submit={handleSubmit} class="mx-auto mt-5 mb-0 max-w-md space-y-4">
			<input type="text" bind:value={name} placeholder="Enter Full Name"
				class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600" />

			<input type="text" bind:value={designation} placeholder="Enter Designation"
				class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600" />

			<input type="text" bind:value={organization} placeholder="Enter Organization"
				class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600" />

			<input type="email" bind:value={email} placeholder="Enter Email"
				class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600" />

			<input type="tel" bind:value={phone} placeholder="Enter Phone Number"
				class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600" />

			<div class="flex items-center justify-center">
				<button type="submit"
					class="bg-dblue w-full cursor-pointer px-2 py-2 text-xl text-white transition-all duration-300 ease-in-out hover:bg-orange-700">
					Submit
				</button>
			</div>

			{#if successMessage}
				<p class="text-green-600 text-center text-sm mt-2">{successMessage}</p>
			{/if}
			{#if errorMessage}
				<p class="text-red-600 text-center text-sm mt-2">{errorMessage}</p>
			{/if}

			<label class="w-full p-3 text-xl text-gray-600 text-center block">
				Once registered, our team will contact you within 24 hours.
			</label>
		</form>
	</div>
</section>
