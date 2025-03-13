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
				'(min-width: 640px)': { slides: { perView: 1, spacing: 16 } },
				'(min-width: 1022px)': { slides: { perView: 1, spacing: 24 } }
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

<section>
	<div class="relative  mx-auto mb-10 max-w-screen-xl">
		<div class="absolute top-[42%] z-10 flex w-[100%] items-center justify-between gap-4 px-5">
			<button
				id="keen-slider-previous"
				class="rounded-full border border-orange-600  text-orange-600 transition hover:bg-orange-600 hover:text-white"
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
				class="rounded-full border border-orange-600  text-orange-600 transition hover:bg-orange-600 hover:text-white"
			>
				<svg
					class="size-5 rtl:rotate-180"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
				</svg>
			</button>
		</div>
		<div id="keen-slider" class="keen-slider w-full">
			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/highb.JPG" class=" inset-0 h-[500px] w-[100%] w-full" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center justify-center bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-center text-white">
							<h1 class="text-sm font-bold text-white sm:text-sm">Launch of India SAF Alliance</h1>

							<p class="mt-2 mb-2 text-xs text-white">
								India SAF Alliance was launched at the India Climate Week 2025 by Hon’ble Shri.
								Nitin Gadkari, Minister of Road Transport and Highways, Government of India
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/high.JPG" class=" inset-0 h-[500px] w-[100%]" />
					<!-- </div> -->
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center justify-center bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-center text-white">
							<h1 class="text-sm font-bold text-white sm:text-sm">India Climate Week 2025</h1>

							<p class="mt-2 mb-2 text-xs text-white">
								India Climate Week (ICW) 2025, organized by CMAI and held from 3rd to 7th February
								2025, brought together global experts, policymakers, and industry leaders to drive
								climate action
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/highc.JPG" class=" inset-0 h-[500px] w-[100%] w-full" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center justify-center bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-center text-white">
							<h1 class="text-sm font-bold text-white sm:text-sm">Launch of India EPR Alliance</h1>

							<p class="mt-4 text-white">
								India EPR Alliance was launched at the India Climate Week 2025 by Shri Jitin
								Prasada, Hon’ble Minister of State, Ministry of Commerce & Industry, Ministry of
								Electronics and Information Technology and Shri Praveen Khandelwal, Member of
								Parliament and the Founder and General Secretary, CAIT
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/highd.JPG" class=" inset-0 h-[500px] w-[100%] w-full" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center justify-center bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-center text-white">
							<h1 class="text-sm font-bold text-white sm:text-sm">
								Global Cooperation in Carbon Markets
							</h1>

							<p class="mt-2 mb-2 text-xs text-white">
								Session on "Global Cooperation in Carbon Markets" during India Climate Week 2025 was
								attended by more than 25 Embassies.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/highe.JPG" class=" inset-0 h-[500px] w-[100%] w-full" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center justify-center bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-center text-white">
							<h1 class="text-sm font-bold text-white sm:text-sm">
								Partnerships and Collaborations
							</h1>

							<p class="mt-2 mb-2 text-xs text-white">
								1. CMAI signed MOU with Indian Institute of Corporate Affairs (IICA) at the India
								Climate Week 2025 to drive sustainability and decarbonization in India.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/highf.jpg" class=" inset-0 h-[500px] w-[100%] w-full" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center justify-center bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-center text-white">
							<h1 class="text-sm font-bold text-white sm:text-sm">
								Partnerships and Collaborations
							</h1>

							<p class="mt-2 mb-2 text-xs text-white">
								2. CMAI signed MOU with IIT Kharagpur at the India Climate Week 2025 to drive
								decarbonization of the industries.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/highg.JPG" class=" inset-0 h-[500px] w-[100%] w-full" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center justify-center bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-center text-white">
							<h1 class="text-sm font-bold text-white sm:text-sm">
								Partnerships and Collaborations
							</h1>

							<p class="mt-2 mb-2 text-xs text-white">
								3. CMAI signed MOU with ICT Academy at the India Climate Week 2025 to advance Net
								Zero targets.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/highg.JPG" class=" inset-0 h-[500px] w-[100%] w-full" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center justify-center bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-center text-white">
							<h1 class="text-sm font-bold text-white sm:text-sm">Site Visit</h1>

							<p class="mt-2 mb-2 text-xs text-white">
								Day 1 and Day 5 of the India Climate Week witnessed site visits to Article 6
								technology facilities in Hapur and Indian Oil, respectively.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<div class="grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
						<img alt="" src="/images/highj.jpg" class="h-[220px] w-[100%] w-full object-cover" />
						<img alt="" src="/images/highk.jpg" class="h-[220px] w-[100%] w-full object-cover" />
						<img alt="" src="/images/highl.jpg" class="h-[220px] w-[100%] w-full object-cover" />
						<img alt="" src="/images/highm.jpg" class="h-[220px] w-[100%] w-full object-cover" />
						<img alt="" src="/images/highn.jpg" class="h-[220px] w-[100%] w-full object-cover" />
						<img alt="" src="/images/higho.jpg" class="h-[220px] w-[100%] w-full object-cover" />
					</div>
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center justify-center bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-center text-white">
							<h1 class="text-sm font-bold text-white sm:text-sm">India Climate Samman</h1>

							<p class="mt-2 mb-2 text-xs text-white">
								CMAI successfully hosted the India Climate Samman 2025 awards, celebrating
								exceptional contributions to climate leadership, carbon market innovation, and
								sustainability.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
