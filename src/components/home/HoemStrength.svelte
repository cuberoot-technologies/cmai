<script>
	import { API_BASE_URL } from '$lib/api';

	let media = [];

	async function fetchMedia() {
		try {
			const response = await fetch(`${API_BASE_URL}/collections/strengths_and_milestones/records`);
			const data = await response.json();
			media = data.items || [];
			// console.log(media, 'Fetched media');
		} catch (error) {
			console.error('Error fetching media:', error);
		}
	}

	fetchMedia();
</script>

<div class="mx-auto rounded-lg bg-white shadow-md">
	<h2
		class="relative inline-block w-full border-b-2 border-dotted border-sky-800 bg-light px-4 py-2 text-xl font-bold text-dblue"
	>
		Strengths & Milestones
	</h2>
	<div class="space-y-4">
		{#each media as item, i}
			<div class="border-b-2 border-dotted border-gray-200 mb-0 p-3">
				<p class="text-base text-gray-800">
					{i + 1}. {item.title}
				</p>
			</div>
		{/each}
	</div>
</div>
