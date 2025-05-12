<script>
	let name = '';
	let email = '';
	let policy = '';
	let brief_description = '';
	let key_benifit = '';
	let file = null;
	let successMessage = '';
	let errorMessage = '';
	
	import { API_BASE_URL } from '$lib/api';

	const handleSubmit = async (e) => {
	e.preventDefault();

	// Validation
	if (!name || !email || !policy || !brief_description || !key_benifit || !file) {
		errorMessage = 'Please fill in all required fields.';
		successMessage = '';
		return;
	}

	// Log the form data to the console
	console.log('Form Submission:');
	console.log('Name:', name);
	console.log('Email:', email);
	console.log('Policy:', policy);
	console.log('Brief Description:', brief_description);
	console.log('Key Benefit:', key_benifit);
	console.log('File:', file?.name);

	const formData = new FormData();
	formData.append('name', name);
	formData.append('email', email);
	formData.append('policy', policy);
	formData.append('brief_description', brief_description);
	formData.append('key_benifit', key_benifit);
	formData.append('file', file);

	try {
		const res = await fetch(`${API_BASE_URL}/collections/policy_form/records`, {
			method: 'POST',
			body: formData
		});

		if (res.ok) {
			successMessage = 'Submitted successfully!';
			errorMessage = '';
			// Reset form
			name = '';
			email = '';
			policy = '';
			brief_description = '';
			key_benifit = '';
			file = null;
		} else {
			errorMessage = 'Submission failed.';
			successMessage = '';
		}
	} catch (err) {
		console.error('Error:', err);
		errorMessage = 'An error occurred.';
		successMessage = '';
	}
};

</script>

<section class="relative mx-auto lg:items-center">
	<div class="w-full">
		<div class="mx-auto max-w-lg text-center">
			<h1 class="text-dblue text-xl font-bold">Submit Your Policy Recommendations</h1>
			<p class="mt-2 text-sm text-gray-900">
				Be a Part of the Solution – Submit Your Policy Recommendations and Help Drive Sustainable Change.
			</p>
		</div>

		<form on:submit={handleSubmit} class="mx-auto mt-8 mb-0 max-w-md space-y-4" novalidate>
			<!-- Full Name -->
			<input
				type="text"
				bind:value={name}
				placeholder="Enter Full Name"
				required
				class="w-full border-gray-200 bg-white p-3 text-sm shadow-xs"
			/>

			<!-- Email -->
			<input
				type="email"
				bind:value={email}
				placeholder="Enter Email"
				required
				class="w-full border-gray-200 bg-white p-3 text-sm shadow-xs"
			/>

			<!-- Policy -->
			<select
				bind:value={policy}
				required
				class="w-full border-gray-200 bg-white p-3 text-sm shadow-xs"
			>
				<option value="" disabled>Select Policy Recommendation Category</option>
				<option>Indian Carbon Market</option>
				<option>Indian Voluntary Carbon Market</option>
				<option>International Voluntary Carbon Market</option>
				<option>Article 6.2</option>
				<option>Article 6.4</option>
				<option>Article 6.8</option>
				<option>Green Credit Program</option>
				<option>Carbon Market</option>
				<option>Any other</option>
			</select>

			<!-- Brief Description -->
			<textarea
				bind:value={brief_description}
				placeholder="Brief Description of Your Policy Recommendation"
				rows="2"
				class="w-full border-gray-200 p-3 text-sm shadow-xs"
			></textarea>

			<!-- Key Benefit -->
			<textarea
				bind:value={key_benifit}
				placeholder="Key Benefits of Your Policy Recommendations"
				required
				rows="2"
				class="w-full border-gray-200 p-3 text-sm shadow-xs"
			></textarea>

			<!-- File Upload -->
			<input
				type="file"
				on:change={(e) => file = e.target.files[0]}
				class="w-full border-gray-200 bg-white p-3 text-sm shadow-xs"
			/>

			<!-- Submit Button -->
			<div class="flex items-center justify-center">
				<button
					type="submit"
					class="w-full bg-dblue text-white py-2 px-4 hover:bg-orange-700 transition cursor-pointer"
				>
					Submit
				</button>
			</div>

			<!-- Messages -->
			{#if successMessage}
				<p class="text-green-600 text-sm text-center mt-2">{successMessage}</p>
			{/if}
			{#if errorMessage}
				<p class="text-red-600 text-sm text-center mt-2">{errorMessage}</p>
			{/if}
		</form>
	</div>
</section>
