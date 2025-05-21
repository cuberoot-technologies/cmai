<script>
	import { API_BASE_URL } from '$lib/api';

	let media = [];

	async function fetchMedia() {
		try {
			const response = await fetch(`${API_BASE_URL}/collections/media/records`);
			const data = await response.json();
			media = data.items || [];
			console.log(media, 'Fetched media');
		} catch (error) {
			console.error('Error fetching media:', error);
		}
	}

	fetchMedia();
</script>

<div class="mx-auto rounded-lg bg-light shadow-md">
	<h2
		class="relative inline-block w-full border-b-2 border-dotted border-sky-800 bg-dblue px-4 py-2 text-xl font-bold text-white"
	>
		CMAI in Media
	</h2>
	<div class="space-y-4">
		{#each media as item}
			<div class="mb-0 border-b-2 border-dotted border-gray-200 p-3">
				<a
					href={item.url}
					class="text-base text-gray-800 transition hover:text-blue-600 hover:underline"
					target="_blank"
				>
					{item.title}
				</a>
			</div>
		{/each}
	</div>
</div>
