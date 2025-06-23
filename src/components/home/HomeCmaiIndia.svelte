<script>
	import { API_BASE_URL } from '$lib/api';

	let media = [];
	let groupedMedia = [];

	async function fetchMedia() {
		try {
			const response = await fetch(`${API_BASE_URL}/collections/media/records`);
			const data = await response.json();
			media = data.items || [];
			console.log(media, 'Fetched media');

			groupByMonthYear();
		} catch (error) {
			console.error('Error fetching media:', error);
		}
	}

	function groupByMonthYear() {
		let temp = {};

		media.forEach(item => {
			// Extract month-year from title using regex
			const match = item.title.match(/^([A-Za-z]+ \d{4})/);

			if (match) {
				const monthYear = match[1];
				if (!temp[monthYear]) {
					temp[monthYear] = [];
				}
				temp[monthYear].push(item);
			}
		});

		// Convert to array and sort
		groupedMedia = Object.entries(temp).sort((a, b) => {
			const dateA = new Date(a[0] + " 01");
			const dateB = new Date(b[0] + " 01");
			return dateB - dateA; // Newest first
		});

		console.log(groupedMedia, 'Grouped and Sorted Media');
	}

	fetchMedia();
</script>



<div class="mx-auto rounded-lg bg-light shadow-md">
	<h2
		class="relative inline-block w-full border-b-2 border-dotted border-sky-800 bg-dblue px-4 py-2 text-xl font-bold text-white"
	>
		CMAI in Media
	</h2>

	<div class="space-y-6 p-4">
		{#each groupedMedia as [monthYear, items]}
				<div class="m-0">
					{#each items as item}
						<div class="mb-3 border-b border-gray-200 ">
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
		{/each}
	</div>
</div>


