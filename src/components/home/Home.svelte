<script>
	import HomeTestimonial from './HomeTestimonial.svelte';
	import HomePartner from './HomePartner.svelte';
	import HomeMembers from './HomeMembers.svelte';
	import HomeServices from './HomeServices.svelte';
	import HomeHightlights from './HomeHightlights.svelte';
	import HomeUpcommingEvents from './HomeUpcommingEvents.svelte';
	import HomePolicy from './HomePolicy.svelte';
	import HomeAbout from './HomeAbout.svelte';
	import HoemStrength from './HoemStrength.svelte';
	import HomeCmaiIndia from './HomeCmaiIndia.svelte';
	import HomeVideo from './HomeVideo.svelte';
	import HomeResearch from './HomeResearch.svelte';
</script>

<div>
	<script>
		// You can add dynamic data if needed
	</script>

	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-3 md:col-span-3">
				<div class=" shadow"><HomeAbout /></div>
				<div class="rounded-lg bg-green-300 p-4 shadow">Become a Member</div>
				<div
					class="relative flex items-center justify-center bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 shadow"
				>
					<img src="/images/cma.png" alt="" class=" w-[230px] rounded-lg" />
				</div>

				<div class=" shadow">
					<div class="mx-auto max-w-2xl rounded-lg bg-white shadow-md">
						<h2
							class="relative inline-block w-full border-b-2 border-dotted border-sky-800 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 px-4 py-2 text-xl font-bold text-sky-800"
						>
							Forthcoming Events
						</h2>
						<div class="space-y-4">
							<!-- Event 1 -->
							<div class="mt-2 flex items-center justify-between p-2 shadow-sm">
								<p class="text-sm text-gray-800">India Climate Week 2026</p>
								<a
									href="#"
									class="rounded-md bg-sky-800 px-2 py-2 text-xs text-white transition hover:bg-blue-700"
								>
									Register Now
								</a>
							</div>

							<!-- Event 2 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-sm text-gray-800">India SAF Conclave 2025</p>
								<a
									href="#"
									class="rounded-md bg-sky-800 px-2 py-2 text-xs text-white transition hover:bg-blue-700"
								>
									Register Now
								</a>
							</div>

							<!-- Event 3 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-sm text-gray-800">India EPR Conclave 2025</p>
								<a
									href="#"
									class="rounded-md bg-sky-800 px-2 py-2 text-xs text-white transition hover:bg-blue-700"
								>
									Register Now
								</a>
							</div>

							<!-- Event 4 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-sm text-gray-800">
									India Carbon Policy <br /> Development Conclave 2025
								</p>
								<a
									href="#"
									class="rounded-md bg-sky-800 px-2 py-2 text-xs text-white transition hover:bg-blue-700"
								>
									Register Now
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="shadow"><HomeVideo /></div>
				<div
					class="relative flex h-[250px] items-center justify-center bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-500 shadow"
				>
					<img src="/images/center.png" alt="" class=" w-[320px] rounded-lg" />
				</div>
				<div class="shadow mt-5 p-5"><HomePolicy /></div>

			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-6 md:col-span-6">
				<div class="">
					<HomeHightlights />
				</div>
				<div class="shadow"><HoemStrength /></div>
				<div class="shadow"><HomeCmaiIndia /></div>
				<div class=" shadow"><HomeResearch /></div>

				<!-- <div class=" "><HomePartner /></div> -->
				<div class="shadow"><HomePartner /></div>
			</div>

			<!-- Right Sidebar (smaller) -->
			<div class="space-y-4 md:col-span-3">
				<div
					class="relative flex items-center justify-center bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 shadow"
				>
					<img src="/images/saf.png" alt="" class=" w-[200px] rounded-lg" />
				</div>

				<div
					class="relative flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 shadow"
				>
					<img src="/images/epr.png" alt="" class=" w-[160px] rounded-lg" />
				</div>
				<div
					class="relative flex h-[150px] items-center justify-center bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-500 shadow"
				>
					<img src="/images/icca.png" alt="" class=" w-[280px] rounded-lg" />
				</div>
				<div
					class="relative flex h-[150px] items-center justify-center bg-gradient-to-r from-green-300 via-green-400 to-green-500 shadow"
				>
					<img src="/images/icla.webp" alt="" class=" w-[150px] rounded-lg" />
				</div>

				<div
					class="relative flex h-[150px] items-center justify-center bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-500 shadow"
				>
					<img src="/images/cop.png" alt="" class=" w-[150px] rounded-lg" />
				</div>
				<div class=""><HomeServices /></div>
				<div class=""><HomeMembers /></div>
				<div class=" shadow">
					<div class="mx-auto max-w-2xl rounded-lg bg-white shadow-md">
						<h2
							class="relative inline-block w-full border-b-2 border-dotted border-sky-800 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 px-4 py-2 text-xl font-bold text-sky-800"
						>
							Contact Us
						</h2>
						<div class="mt-2 flex  flex-col items-center pb-4">
							<p class="mb-4 text-xl font-bold tracking-tight text-sky-800 sm:text-xl">
								Submit Your Policy <br /> Recommendations
							</p>
							<a
								href="#"
								class="rounded-md bg-sky-800 px-6 py-2 text-sm text-white transition hover:bg-sky-900"
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
