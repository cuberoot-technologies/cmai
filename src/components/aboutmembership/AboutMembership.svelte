<script>
	import FormMember from './FormMember.svelte';
</script>

<div>
	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
				<div class="bg-white">
					<h2 class="text-dblue mb-4 text-2xl font-semibold">About Membership</h2>
					<p class="mb-4 text-xl text-gray-600">
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
						<div class="    mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								1. Develop a resilient carbon market that is inclusive yet dynamic so that a
								net-zero future can be accomplished sooner than anticipated.
							</p>
						</div>

						<!-- Event 2 -->
						<div class="   mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								2. Encourage industry participation in policy advocacy and the development of
								regulatory frameworks to support the expansion of India's carbon credit market.
							</p>
						</div>

						<!-- Event 3 -->
						<div class="   mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								3. Bring together the entire industry for a shared goal of developing strong policy
								guidelines and frameworks for the country's carbon market.
							</p>
						</div>

						<!-- Event 4 -->
						<div class="    mb-0 p-3">
							<p class="text-xl text-gray-600">
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
								<p class="text-xl text-gray-600">
									➢ Quarterly meetings of the Executive, Managing Committee, and reporting thereof.
								</p>
							</div>

							<!-- Event 2 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-xl text-gray-600">
									➢ Call on meetings / interactive sessions with Government officials, policymakers,
									and international institutions/diplomats.
								</p>
							</div>

							<!-- Event 3 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-xl text-gray-600">
									➢ Regular representation to government bodies and institutions to develop a
									holistic carbon market in India.
								</p>
							</div>

							<!-- Event 4 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-xl text-gray-600">➢ Electronic circulation of updates.</p>
							</div>
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-xl text-gray-600">
									➢ Formation of Expert Committees / advisory forums if required.
								</p>
							</div>
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-xl text-gray-600">
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

				<div>
					<h1 class="text-dblue text-2xl font-bold mt-9 mb-3">FOR MEMBERSHIP DETAILS REACH OUT TO :</h1>
					<a href="mailto:ayushi.gaur@cma-india.in" class="flex items-center gap-3 text-xl text-gray-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-5 shrink-0 text-black"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>ayushi.gaur@cma-india.in</a
					>
					<a href="mailto:secretary@cma-india.in" class="flex items-center gap-3 text-xl text-gray-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-5 shrink-0 text-black"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>secretary@cma-india.in</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
