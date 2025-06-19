<script>
	import HomePolicy from "../home/HomePolicy.svelte";

</script>

<div>
	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
				<div class="bg-white">
					<h2 class="text-dblue mb-4 text-2xl font-semibold">
						Various Sectoral Surveys and Feedbacks for Policy Suggestions
					</h2>
					<p class="mb-4 text-xl text-gray-600">
						To strengthen India’s carbon market ecosystem and ensure that industry voices are
						effectively heard, CMAI conducts regular sector-specific surveys and stakeholder
						consultations. These insights help shape practical, data-driven policy recommendations
						that reflect the real needs and challenges of businesses across sectors.
					</p>
					<p class="mb-4 text-xl text-gray-600">
						By participating, stakeholders contribute to the creation of inclusive, impactful, and
						industry-aligned climate policies.
					</p>
				</div>
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<HomePolicy/>
				
			</div>
		</div>
	</div>
</div>
