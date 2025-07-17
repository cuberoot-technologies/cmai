<script>
	import HomePartner from './HomePartner.svelte';
	import HomeMembers from './HomeMembers.svelte';
	import HomeServices from './HomeServices.svelte';
	import FormModal from './FormModal.svelte';
	import HomeHightlights from './HomeHightlights.svelte';
	import HomePolicy from './HomePolicy.svelte';
	import HomeAbout from './HomeAbout.svelte';
	import HoemStrength from './HoemStrength.svelte';
	import HomeCmaiIndia from './HomeCmaiIndia.svelte';
	import HomeVideo from './HomeVideo.svelte';
	import HomeResearch from './HomeResearch.svelte';

	let isModalOpen = false;
	let modalSource = '';

	function openModal(source) {
		modalSource = source;
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
		modalSource = '';
	}
</script>

<div>
	<script>
	</script>

	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-3 md:col-span-3">
				<div class=" shadow"><HomeAbout /></div>
				<a href="/about-membership"
					><div
						class="bg-dblue mb-2 rounded-lg p-4 text-center text-lg font-bold text-white shadow"
					>
						Become a Member
					</div></a
				>
				<div class="bg-light relative flex h-[220px] items-center justify-center shadow">
					<img src="/images/cma.png" alt="" class=" w-[230px] rounded-lg" />
					<a
						href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUNVg3TUtFR1pLRU9HQVBINENKSUlEMFlTVC4u&route=shorturl"
						target="_blank"
						class="text-dblue hover:bg-light absolute right-3 flex h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div>
				<div class="relative flex h-[170px] items-center justify-center shadow">
					<img src="/images/copp.jpg" alt="" class=" h-[170px] w-full rounded-lg" />
					<a
						href="https://forms.office.com/Pages/ResponsePage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUNlEzVEE4WE5TSkFYRzlMOEJWMEQ5SkE2Mi4u&origin=QRCode"
						target="_blank"
						class="hover:bg-light absolute right-3 flex h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div>
				<div class=" shadow">
					<div class="mx-auto max-w-2xl rounded-lg bg-white shadow-md">
						<h2
							class="bg-dblue-light relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-xl font-bold text-white"
						>
							Forthcoming Events
						</h2>
						<div class="space-y-4">
							<!-- Event 1 -->
							<div class="mt-2 flex items-center justify-between p-2 shadow-sm">
								<p class="text-base text-lg text-gray-800">➢ India Climate Week 2026</p>
								<a
									on:click={() => openModal('India Climate Week 2026')}
									class="bg-dblue cursor-pointer rounded-md px-2 py-2 text-xs text-white transition hover:bg-blue-700"
								>
									Register Now
								</a>
							</div>

							<!-- Event 2 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-base text-lg text-gray-800">➢ India SAF Conclave 2025</p>
								<a
									on:click={() => openModal('India SAF Conclave 2025')}
									class="bg-dblue cursor-pointer rounded-md px-2 py-2 text-xs text-white transition hover:bg-blue-700"
								>
									Register Now
								</a>
							</div>
							<!-- Event 3 -->
							<!-- <div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-base text-lg text-gray-800">➢ India EPR Conclave 2025</p>
								<a
									on:click={() => openModal('India EPR Conclave 2025')}
									class="bg-dblue cursor-pointer rounded-md px-2 py-2 text-xs text-white transition hover:bg-blue-700"
								>
									Register Now
								</a>
							</div> -->

							<!-- Event 4 -->
							<!-- <div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-base text-lg text-gray-800">
									➢ India Carbon Policy <br /> Development Conclave 2025
								</p>
								<a
									on:click={() => openModal('India Carbon Policy Conclave 2025')}
									class="bg-dblue cursor-pointer rounded-md px-2 py-2 text-xs text-white transition hover:bg-blue-700"
								>
									Register Now
								</a>
							</div> -->
						</div>
					</div>
				</div>
				<div class="shadow"><HomeVideo /></div>

				<div class="bg-light mt-5 p-5 shadow"><HomePolicy /></div>
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
				<div class="  bg-dblue items-center justify-between p-2 shadow-sm">
					<p class="text-center text-base text-lg text-white">
						Services through Strategic Partners
					</p>
				</div>
				<div class="bg-light relative flex items-center justify-center shadow">
					<img src="/images/saf.png" alt="" class=" w-[240px] rounded-lg" />
					<a
						href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUMFZUSUZYMFFaM1VYM1BIV0xEVlYzMFUyWC4u&origin=QRCode&route=shorturl"
						target="_blank"
						class="text-dblue hover:bg-light absolute right-3 flex h-[100%] h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div>

				<!-- <div class="bg-light relative flex items-center justify-center shadow">
					<img src="/images/epr.png" alt="" class=" w-[180px] rounded-lg" />
					<a
						href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUNjVBVEJRUktPWjZIMktQUk5ZT0VMWVI4TS4u&route=shorturl"
						target="_blank"
						class="text-dblue hover:bg-light absolute right-3 flex h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div> -->
				<div class=" bg-light relative flex flex h-[150px] items-center shadow">
					<img src="/images/center.png" alt="" class=" w-[350px] rounded-lg" />
					<a
						href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUQUtKTDBTMkpUUjFRV1lWQlJVMjBSNk1OWC4u&route=shorturl"
						target="_blank"
						class="text-dblue hover:bg-light absolute right-3 flex h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div>
				<div class="bg-light relative flex h-[220px] items-center justify-center shadow">
					<img src="/images/icla.png" alt="" class=" w-[140px] rounded-lg" />
					<a
						href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUQ09KM0VZTU4wWFU5VzI1TEhBNTFVU0owQy4u&route=shorturl"
						target="_blank"
						class="text-dblue hover:bg-light absolute right-3 flex h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div>
				<div class="bg-light relative flex h-[180px] items-center justify-center shadow">
					<img src="/images/icca.png" alt="" class=" w-[280px] rounded-lg" />
					<a
						href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUM1VZTVYyUzg0RFVVTEdIWVQxS0E1UUdGTy4u&route=shorturl"
						target="_blank"
						class="text-dblue hover:bg-light absolute right-3 flex h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div>

				<div class="bg-dblue mt-2 items-center justify-between p-2 shadow-sm">
					<p class="text-center text-base text-lg text-white">Be A CMAI Member & Visit COP 30</p>
				</div>

				<div class=""><HomeServices /></div>
				<div class=""><HomeMembers /></div>
				<!-- <div class=" shadow">
					<div class="mx-auto max-w-2xl rounded-lg bg-white shadow-md">
						<h2
							class="relative inline-block w-full border-b-2 border-dotted border-sky-800 bg-light px-4 py-2 text-xl font-bold text-sky-800"
						>
							Contact Us
						</h2>
						<div class="mt-2 flex flex-col items-center pb-4">
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
				</div> -->
			</div>
		</div>
	</div>
	<FormModal isOpen={isModalOpen} onClose={closeModal} source={modalSource} />
</div>
