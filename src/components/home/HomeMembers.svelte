<script>
	import { API_BASE_URL } from '$lib/api';

	let members = [];

	async function fetchMembers() {
		try {
			const response = await fetch(`${API_BASE_URL}/collections/members/records`);
			const data = await response.json();
			members = data.items || [];
		} catch (error) {
			console.error('Error fetching members:', error);
		}
	}

	fetchMembers();
</script>

<div class="mx-auto rounded-lg bg-white shadow-md">
	<h2 class="relative inline-block w-full border-b-2 border-dotted border-sky-800 bg-dblue px-4 py-2 text-xl font-bold text-white">
		Members
	</h2>

	<div class="space-y-4">
		{#each members.slice(0,10) as member }
			<div class="border-b-2 border-dotted border-gray-200 mb-0 px-2 py-2">
				<p class="text-base text-gray-800">
					➢ {member.name}
				</p>
			</div>
		{/each}

		<a
			href="/members"
			class="group relative inline-flex w-full items-center justify-end p-4 pb-2 pt-0 text-base text-gray-700 transition-all duration-300 hover:text-dblue"
		>
			See all
			<span
				class="ml-1 translate-x-0 transform text-sm opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
			>
				→
			</span>
		</a>
	</div>
</div>
