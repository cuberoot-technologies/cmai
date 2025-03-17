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
	<div class="relative mx-auto mb-10 max-w-screen-xl">
		<div class="absolute top-[42%] z-10 flex w-[100%] items-center justify-between gap-4 px-5">
			<button
				id="keen-slider-previous"
				class="rounded-full border border-white text-white transition hover:bg-blue-700 hover:text-white"
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
				class="rounded-full border border-white text-white transition hover:bg-blue-700 hover:text-white"
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
					<img alt="" src="/images/ligha.jpg" class="inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">
							<p class="mt-2 mb-2 text-lg text-white">
								CMAI in policy discussions with Indian Minister of Power and Minister of Housing and Urban Affairs, Shri Manohar Lal Khattar
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighb.JPG" class=" inset-0 h-[500px] w-[100%]" />
					<!-- </div> -->
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">

							<p class="mt-2 mb-2 text-lg text-white">
								Fostering climate dialogue in global Collaboration with ambassadors of various countries to India
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighc.jpg" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">
							<p class="mt-4 text-white">
								Carbon Policy Discussions with Joint Secretary, Indian Ministry of Environment, Forest and Climate Change, Naresh Pal Gangwar
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighd.png" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">
							

							<p class="mt-2 mb-2 text-lg text-white">
								CMAI as a knowledge partner with Indian Minister of New and Renewable Energy, Pralhad Joshi during a national workshop on carbon markets
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighe.jpg" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">

							<p class="mt-2 mb-2 text-lg text-white">
								At a panel discussion organised by the Global Biofuel Alliance at COP29 Baku
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighf.jpg" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">
						
							<p class="mt-2 mb-2 text-lg text-white">
								CMAI at a panel discussion organised by the International Solar Alliance at COP29 Baku
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighg.JPG" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">
						

							<p class="mt-2 mb-2 text-lg text-white">
								MoU with Indian Institute of Corporate Affairs to train professionals, policymakers, and academicians on carbon markets.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighh.jpg" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">

							<p class="mt-2 mb-2 text-lg text-white">
								MoU with IIT KGP to accelerate the development of low-carbon industrial solutions in India
							</p>
						</div>
					</div>
				</div>
			</div>




			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighi.png" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">

							<p class="mt-2 mb-2 text-lg text-white">
								Capacity building workshop with Indian Oil Corporation Ltd
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighj.JPG" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">

							<p class="mt-2 mb-2 text-lg text-white">
								Honouring Dr. V.K. Saraswat for his service in climate action and clean energy innovation
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighk.jpg" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">

							<p class="mt-2 mb-2 text-lg text-white">
								Bilateral global collaboration for fostering climate dialogue with Brazilian Ambassador, H.E. Mr. Kenneth Félix
							</p>
						</div>
					</div>
				</div>
			</div>





			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighl.jpg" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">
							

							<p class="mt-2 mb-2 text-lg text-white">
								Capacity building and upskilling of members via site visits
							</p>
						</div>
					</div>
				</div>
			</div>




			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighm.jpg" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">

							<p class="mt-2 mb-2 text-lg text-white">
								Fostering climate dialogues at Carbon Policy Development Conclave 2024
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="keen-slider__slide relative w-full">
				<div class="group relative overflow-hidden">
					<img alt="" src="/images/lighn.jpg" class=" inset-0 h-[500px] w-[100%] w-full object-cover" />
					<div
						class="bg-opacity-50 absolute inset-0 top-[84%] flex h-[80px] items-center  bg-black p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					>
						<div class=" text-left text-white">

							<p class="mt-2 mb-2 text-lg text-white">
								CMAI as a stakeholder committee member for ecomark rules at the CPCB advocating industry voice 
							</p>
						</div>
					</div>
				</div>
			</div>



		</div>
	</div>
</section>
