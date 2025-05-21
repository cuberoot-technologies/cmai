<script>
	import { API_BASE_URL } from '$lib/api';

	let services = [];

	async function fetchServices() {
		try {
			const response = await fetch(`${API_BASE_URL}/collections/services/records`);
			const data = await response.json();
			services = data.items || [];
		} catch (error) {
			console.error('Error fetching services:', error);
		}
	}

	fetchServices();
</script>

<div class="mx-auto rounded-lg bg-white shadow-md">
	<h2 class="bg-light text-dblue relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-xl font-bold">
		Our Services
	</h2>

	<div class="space-y-4">
		{#each services as service, index}
			<div class="mb-0 border-b-2 border-dotted border-gray-200 px-2 py-1">
				<p class="text-base text-gray-800">
					{index + 1}. {service.name}
				</p>
			</div>
		{/each}
	</div>
</div>
