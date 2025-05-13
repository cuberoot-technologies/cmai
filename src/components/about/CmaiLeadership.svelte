<script>
	import { onMount } from 'svelte';
	import { API_BASE_URL } from '$lib/api';

	let records = [];

	const rowPattern = [2, 3, 2]; // Repeating row pattern

	// Function to chunk records by the pattern [2,3,2,...]
	function chunkRecords(data, pattern) {
		let result = [];
		let i = 0;
		let patternIndex = 0;

		while (i < data.length) {
			const count = pattern[patternIndex % pattern.length];
			result.push(data.slice(i, i + count));
			i += count;
			patternIndex++;
		}
		return result;
	}

	onMount(async () => {
		const res = await fetch(`${API_BASE_URL}/collections/cmai_leadership/records`);
		const data = await res.json();
		const items = data.items || data;
		records = chunkRecords(items, rowPattern);
	});
</script>

<!-- Leadership Section -->
<div class="container mx-auto mt-10 px-4">
	<h2
		class="text-dblue relative mb-2 inline-block w-full border-b-1 border-solid border-gray-200 px-4 py-2 text-xl font-bold"
	>
		Meet Our Team
	</h2>

	<!-- Render Rows Based on Pattern -->
	{#each records as row}
		<div class="mt-5 mb-8 flex flex-wrap justify-center gap-8">
			{#each row as person}
				<div
					class="w-[280px] transform rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
				>
					<img
						src={`https://cms.cmai.wat-s.app/api/files/${person.collectionId}/${person.id}/${person.field}`}
						alt={person.name}
						class="h-90 w-full rounded-t-lg object-cover"
					/>
					<div class="p-4 text-center">
						<h3 class="text-lg font-semibold">{person.name || 'No Name'}</h3>
						<p class="text-base text-gray-600">{person.designation || 'No Designation'}</p>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>
