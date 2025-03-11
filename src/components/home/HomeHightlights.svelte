<script>
	import { onMount, tick } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';

	let keenSlider;

	onMount(async () => {
		await tick(); // Ensure DOM is fully updated before initializing

		keenSlider = new KeenSlider('#keen-slider', {
			loop: true,
			slides: {
				perView: 1,
				spacing: 12
			},
			breakpoints: {
				'(min-width: 640px)': { slides: { perView: 2, spacing: 16 } },
				'(min-width: 1022px)': { slides: { perView: 2, spacing: 24 } }
			}
		});

		// Ensure slider resizes properly
		setTimeout(() => keenSlider.resize(), 100);

		// Navigation buttons
		document
			.getElementById('keen-slider-previous')
			?.addEventListener('click', () => keenSlider.prev());
		document.getElementById('keen-slider-next')?.addEventListener('click', () => keenSlider.next());
	});
</script>

<section class="">
	<div class="mx-auto mb-10 max-w-screen-xl px-4 py-12">
		<div class="flex max-w-7xl items-center justify-between sm:pe-6 lg:pe-8">
			<h2 class="text-4xl font-bold text-sky-800 sm:text-5xl">Highlights</h2>
			<div class="flex gap-4">
				<button
					id="keen-slider-previous"
					class="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-5 rtl:rotate-180"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</button>
				<button
					id="keen-slider-next"
					class="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"
				>
					<svg
						class="size-5 rtl:rotate-180"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 5l7 7-7 7"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						/>
					</svg>
				</button>
			</div>
		</div>

		<div class="mt-8">
			<div id="keen-slider" class="keen-slider w-full">
				<div class="keen-slider__slide relative w-full">
					<section class="relative mt-10 flex flex-col bg-gray-50 p-5 lg:h-[600px] lg:items-center">
						<div class="w-full lg:px-8">
							<div class="mx-auto max-w-lg text-center">
								<h1 class="text-2xl font-bold sm:text-3xl">Launch of India SAF Alliance</h1>

								<p class="mt-4 mb-8 text-gray-500">
									India SAF Alliance was launched at the India Climate Week 2025 by Hon’ble Shri.
									Nitin Gadkari, Minister of Road Transport and Highways, Government of India
								</p>
							</div>
						</div>

						<div class="relative flex h-64 w-full items-start p-5">
							<img alt="" src="/images/highb.JPG" class=" inset-0 h-[350px] w-full" />
						</div>
					</section>
				</div>
				<div class="keen-slider__slide relative w-full">
					<section class="relative mt-10 flex flex-col bg-gray-50 p-5 lg:h-[600px] lg:items-center">
						<div class="w-full lg:px-8">
							<div class="mx-auto max-w-lg text-center">
								<h1 class="text-2xl font-bold sm:text-3xl">India Climate Week 2025</h1>

								<p class="mt-4 mb-8 text-gray-500">
									India Climate Week (ICW) 2025, organized by CMAI and held from 3rd to 7th February
									2025, brought together global experts, policymakers, and industry leaders to drive
									climate action
								</p>
							</div>
						</div>

						<div class="relative flex h-64 w-full w-full justify-center gap-6 p-5">
							<img alt="" src="/images/high.JPG" class=" inset-0 h-[350px] w-[350px]" />
							<img alt="" src="/images/higha.png" class=" inset-0 h-[350px] w-[200px]" />
						</div>
					</section>
				</div>

				<div class="keen-slider__slide relative w-full">
					<section class="relative mt-10 flex flex-col bg-gray-50 p-5 lg:h-[600px] lg:items-center">
						<div class="w-full lg:px-8">
							<div class="mx-auto max-w-lg text-center">
								<h1 class="text-2xl font-bold sm:text-3xl">Launch of India EPR Alliance</h1>

								<p class="mt-4  text-gray-500">
									India EPR Alliance was launched at the India Climate Week 2025 by Shri Jitin
									Prasada, Hon’ble Minister of State, Ministry of Commerce & Industry, Ministry of
									Electronics and Information Technology and Shri Praveen Khandelwal, Member of
									Parliament and the Founder and General Secretary, CAIT
								</p>
							</div>
						</div>

						<div class="relative flex h-64 w-full items-start p-5">
							<img alt="" src="/images/highc.JPG" class=" inset-0 h-[350px] w-full" />
						</div>
					</section>
				</div>

				<div class="keen-slider__slide relative w-full">
					<section class="relative mt-10 flex flex-col bg-gray-50 p-5 lg:h-[600px] lg:items-center">
						<div class="w-full lg:px-8">
							<div class="mx-auto max-w-lg text-center">
								<h1 class="text-2xl font-bold sm:text-3xl">Global Cooperation in Carbon Markets</h1>

								<p class="mt-4 mb-8 text-gray-500">
									Session on "Global Cooperation in Carbon Markets" during India Climate Week 2025
									was attended by more than 25 Embassies.
								</p>
							</div>
						</div>

						<div class="relative flex h-64 w-full items-start p-5">
							<img alt="" src="/images/highd.JPG" class=" inset-0 h-[350px] w-full" />
						</div>
					</section>
				</div>

				<div class="keen-slider__slide relative w-full">
					<section class="relative mt-10 flex flex-col bg-gray-50 p-5 lg:h-[600px] lg:items-center">
						<div class="w-full lg:px-8">
							<div class="mx-auto max-w-lg text-center">
								<h1 class="text-2xl font-bold sm:text-3xl">Partnerships and Collaborations</h1>

								<p class="mt-4 mb-8 text-gray-500">
									1. CMAI signed MOU with Indian Institute of Corporate Affairs (IICA) at the India
									Climate Week 2025 to drive sustainability and decarbonization in India.
								</p>
							</div>
						</div>

						<div class="relative flex h-64 w-full items-start p-5">
							<img alt="" src="/images/highe.JPG" class=" inset-0 h-[350px] w-full" />
						</div>
					</section>
				</div>

				<div class="keen-slider__slide relative w-full">
					<section class="relative mt-10 flex flex-col bg-gray-50 p-5 lg:h-[600px] lg:items-center">
						<div class="w-full lg:px-8">
							<div class="mx-auto max-w-lg text-center">
								<h1 class="text-2xl font-bold sm:text-3xl">Partnerships and Collaborations</h1>

								<p class="mt-4 mb-8 text-gray-500">
									2. CMAI signed MOU with IIT Kharagpur at the India Climate Week 2025 to drive
									decarbonization of the industries.
								</p>
							</div>
						</div>

						<div class="relative flex h-64 w-full items-start p-5">
							<img alt="" src="/images/highf.jpg" class=" inset-0 h-[350px] w-full" />
						</div>
					</section>
				</div>

				<div class="keen-slider__slide relative w-full">
					<section class="relative mt-10 flex flex-col bg-gray-50 p-5 lg:h-[600px] lg:items-center">
						<div class="w-full lg:px-8">
							<div class="mx-auto max-w-lg text-center">
								<h1 class="text-2xl font-bold sm:text-3xl">Partnerships and Collaborations</h1>

								<p class="mt-4 mb-8 text-gray-500">
									3. CMAI signed MOU with ICT Academy at the India Climate Week 2025 to advance Net
									Zero targets.
								</p>
							</div>
						</div>

						<div class="relative flex h-64 w-full items-start p-5">
							<img alt="" src="/images/highg.JPG" class=" inset-0 h-[350px] w-full" />
						</div>
					</section>
				</div>

				<div class="keen-slider__slide relative w-full">
					<section class="relative mt-10 flex flex-col bg-gray-50 p-5 lg:h-[600px] lg:items-center">
						<div class="w-full lg:px-8">
							<div class="mx-auto max-w-lg text-center">
								<h1 class="text-2xl font-bold sm:text-3xl">Site Visit</h1>

								<p class="mt-4 mb-8 text-gray-500">
									Day 1 and Day 5 of the India Climate Week witnessed site visits to Article 6
									technology facilities in Hapur and Indian Oil, respectively.
								</p>
							</div>
						</div>

						<div class="relative flex h-64 w-full w-full justify-center gap-6 p-5">
							<img alt="" src="/images/highi.jpg" class=" inset-0 h-[350px] w-[270px]" />
							<img alt="" src="/images/highh.jpg" class=" inset-0 h-[350px] w-[270px]" />
						</div>
					</section>
				</div>

				<div class="keen-slider__slide relative w-full">
					<section class="relative mt-10 flex flex-col bg-gray-50 p-5 lg:h-[600px] lg:items-center">
						<div class="w-full lg:px-8">
							<div class="mx-auto max-w-lg text-center">
								<h1 class="text-2xl font-bold sm:text-3xl">India Climate Samman</h1>

								<p class="mt-4 mb-8 text-gray-500">
									CMAI successfully hosted the India Climate Samman 2025 awards, celebrating
									exceptional contributions to climate leadership, carbon market innovation, and
									sustainability.
								</p>
							</div>
						</div>

                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5">
                            <img alt="" src="/images/highj.jpg" class="h-[170px] w-full object-cover" />
                            <img alt="" src="/images/highk.jpg" class="h-[170px] w-full object-cover" />
                            <img alt="" src="/images/highl.jpg" class="h-[170px] w-full object-cover" />
                            <img alt="" src="/images/highm.jpg" class="h-[170px] w-full object-cover" />
                            <img alt="" src="/images/highn.jpg" class="h-[170px] w-full object-cover" />
                            <img alt="" src="/images/higho.jpg" class="h-[170px] w-full object-cover" />
                          </div>
                          
					</section>
				</div>
			</div>
		</div>
	</div>
</section>
