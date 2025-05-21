<script>
	import { API_BASE_URL } from '$lib/api';

	let members = [];

	async function fetchMembers() {
		try {
			const response = await fetch(`${API_BASE_URL}/collections/members/records`);
			const data = await response.json();
			members = data.items || [];
			console.log(members, 'Fetched members');
		} catch (error) {
			console.error('Error fetching members:', error);
		}
	}

	fetchMembers();
</script>

<div class="max-w-4xl mx-auto p-4">
	<div class="border border-gray-300 overflow-hidden">
		<!-- Loop through members -->
		{#each members as member, index}
			<div class="grid grid-cols-12 border-t border-gray-300 {index % 2 === 1 ? 'bg-gray-50' : ''}">
				<div class="col-span-1 border-r border-gray-300 p-2 text-center">{index + 1}</div>
				<div class="col-span-11 p-2 text-lg">{member.name}</div>
			</div>
		{/each}
	</div>
</div>
