<script>
	import FormMember from './FormMember.svelte';

	


</script>

<div>
	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
				<div class="bg-white ">
					<h2 class="mb-4 text-2xl font-semibold text-dblue">About Membership</h2>
					<p class="mb-4 text-gray-600 text-xl">
						The Carbon Markets Association of India (CMAI) works to accelerate the Net Zero
						Transition of India and the World by facilitating collaboration among stakeholders,
						including the government, industry, and civil society.
					</p>
				</div>

				<div class="mx-auto bg-white shadow-md">
					<h2
						class="bg-light text-dblue relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-xl font-bold"
					>
						Major Objectives of Membership
					</h2>
					<div class="space-y-4">
						<!-- Event 1 -->
						<div class="    border-b-2 border-dotted border-gray-200 mb-0 p-3">
							<p class="text-gray-600 text-xl">
								1. Develop a resilient carbon market that is inclusive yet dynamic so that a
								net-zero future can be accomplished sooner than anticipated.
							</p>
						</div>

						<!-- Event 2 -->
						<div class="   border-b-2 border-dotted border-gray-200 mb-0 p-3">
							<p class="text-gray-600 text-xl">
								2. Encourage industry participation in policy advocacy and the development of
								regulatory frameworks to support the expansion of India's carbon credit market.
							</p>
						</div>

						<!-- Event 3 -->
						<div class="   border-b-2 border-dotted border-gray-200 mb-0 p-3">
							<p class="text-gray-600 text-xl">
								3. Bring together the entire industry for a shared goal of developing strong policy
								guidelines and frameworks for the country's carbon market.
							</p>
						</div>

						<!-- Event 4 -->
						<div class="    mb-0 p-3">
							<p class="text-gray-600 text-xl">
								4. Suggest industries for cutting-edge green technology interventions to promote
								rapid market expansion and support the sustainable development of the economy and
								the market.
							</p>
						</div>
					</div>
				</div>

				<div class=" shadow">
					<div class="mx-auto rounded-lg bg-white shadow-md">
						<h2
							class="bg-dblue-light relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-xl font-bold text-white"
						>
							Administrative Measures:
						</h2>
						<div class="space-y-4">
							<!-- Event 1 -->
							<div class="mt-2 flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">
									➢ Quarterly meetings of the Executive, Managing Committee, and reporting thereof.
								</p>
							</div>

							<!-- Event 2 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">
									➢ Call on meetings / interactive sessions with Government officials, policymakers,
									and international institutions/diplomats.
								</p>
							</div>

							<!-- Event 3 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">
									➢ Regular representation to government bodies and institutions to develop a
									holistic carbon market in India.
								</p>
							</div>

							<!-- Event 4 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">➢ Electronic circulation of updates.</p>
							</div>
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">
									➢ Formation of Expert Committees / advisory forums if required.
								</p>
							</div>
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">
									➢ Regular programs such as roundtables, seminars, webinars, and workshops..
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div class="relative flex items-center justify-center">
					<FormMember />
				</div>
			</div>
		</div>
	</div>
</div>
