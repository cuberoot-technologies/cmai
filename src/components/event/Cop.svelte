<script>
	import { onMount, tick } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';

	let keenSlider;
	let interval;

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

		// Function to start auto-slide
		const startAutoSlide = () => {
			interval = setInterval(() => keenSlider.next(), 5000);
		};

		// Function to stop auto-slide
		const stopAutoSlide = () => {
			clearInterval(interval);
		};

		// Start auto-slide
		startAutoSlide();

		// Stop auto-slide on hover and resume on leave
		const sliderElement = document.getElementById('keen-slider');
		sliderElement?.addEventListener('mouseenter', stopAutoSlide);
		sliderElement?.addEventListener('mouseleave', startAutoSlide);
	});
</script>

<div
	class=" inset-0 bg-[url('https://www.assocham.org/assets/images/event-detail-banner-bg.jpg')] bg-cover bg-center"
>
	<!-- Image Content -->
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
						<path
							d="M9 5l7 7-7 7"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						/>
					</svg>
				</button>
			</div>
			<div id="keen-slider" class="keen-slider w-full">
				<div class="keen-slider__slide relative w-full">
					<div class="group relative overflow-hidden">
						<img alt="" src="/images/c2.jpeg" class="inset-0 h-[550px] w-[100%]  w-full" />
					</div>
				</div>
        	<div class="keen-slider__slide relative w-full">
					<div class="group relative overflow-hidden">
						<img alt="" src="/images/c1.jpeg" class="inset-0 h-[550px] w-[100%]  w-full" />
					</div>
				</div>
        	<div class="keen-slider__slide relative w-full">
					<div class="group relative overflow-hidden">
						<img alt="" src="/images/c3.jpeg" class="inset-0 h-[550px] w-[100%]  w-full" />
					</div>
				</div>
        	<div class="keen-slider__slide relative w-full">
					<div class="group relative overflow-hidden">
						<img alt="" src="/images/c4.jpeg" class="inset-0 h-[550px] w-[100%]  w-full" />
					</div>
				</div>
        	<div class="keen-slider__slide relative w-full">
					<div class="group relative overflow-hidden">
						<img alt="" src="/images/c5.jpeg" class="inset-0 h-[550px] w-[100%]  w-full" />
					</div>
				</div>
        	<div class="keen-slider__slide relative w-full">
					<div class="group relative overflow-hidden">
						<img alt="" src="/images/c6.jpeg" class="inset-0 h-[550px] w-[100%]  w-full" />
					</div>
				</div>
        <div class="keen-slider__slide relative w-full">
					<div class="group relative overflow-hidden">
						<img alt="" src="/images/c7.jpeg" class="inset-0 h-[650px] w-[100%]  w-full" />
					</div>
				</div>

				<div class="keen-slider__slide relative w-full">
					<div class="group relative overflow-hidden">
						<img alt="" src="/images/c8.jpeg" class=" inset-0 h-[550px] w-[100%] " />
						<!-- </div> -->
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<div class="container mx-auto mt-8 p-4">
	<!-- Top image section with low-opacity background -->
	<div class="relative overflow-hidden rounded-xl">
		<!-- Background Image -->
	</div>

	<!-- Event Content -->
	<div class="mt-6 rounded-2xl bg-white p-6 shadow-md">
		<h1 class="mb-4 text-3xl font-bold text-gray-800">
			CMAI at COP29: Shaping Global Carbon Markets
		</h1>

		<p class="mb-4 text-xl text-gray-700">
			CMAI was proud to serve as a leading industry voice at COP29, playing a key role in shaping
			global carbon market frameworks and contributing to the finalization of Article 6 of the Paris
			Agreement.
		</p>

		<!-- Key Highlights -->
		<h2 class="mt-6 mb-3 text-2xl font-semibold text-gray-800">Key Highlights at COP29:</h2>

		<h3 class="mt-4 text-xl font-semibold text-gray-800">🔹 Industry Representation & Advocacy</h3>
		<p class="mb-4 text-xl text-gray-700">
			CMAI led a high-level industry delegation to COP29, representing the voice of Indian industry
			and fostering collaboration for the development of robust, transparent, and inclusive carbon
			markets.
		</p>

		<h3 class="mt-4 text-xl font-semibold text-gray-800">
			🔹 Global Partnerships for Stronger Carbon Markets
		</h3>
		<p class="mb-2 text-xl text-gray-700">
			To strengthen international cooperation and accelerate market readiness, CMAI signed strategic
			MoUs with:
		</p>
		<ul class="mb-4 list-inside list-disc space-y-1 text-xl text-gray-700">
			<li>UNAI (Mexico)</li>
			<li>Korea Chamber of Commerce & Industry (KCCI)</li>
			<li>South Asia Forum for Environment (SAFE)</li>
		</ul>
		<p class="mb-4 text-xl text-gray-700">
			These partnerships focus on Afforestation, Reforestation, Restoration (ARR), and biodiversity
			conservation—promoting nature-based solutions as part of the global net-zero transition.
		</p>

		<h3 class="mt-4 text-xl font-semibold text-gray-800">🔹 Sectoral Development Initiatives</h3>
		<ul class="mb-4 list-inside list-disc space-y-1 text-xl text-gray-700">
			<li>
				Clean Cooking Initiatives in collaboration with the International Solar Alliance (ISA)
			</li>
			<li>Biofuel Advocacy under the Global Biofuel Alliance (GBA)</li>
		</ul>

		<h3 class="mt-4 text-xl font-semibold text-gray-800">
			🔹 Capacity Building & Knowledge Sharing
		</h3>
		<p class="mb-4 text-xl text-gray-700">
			CMAI delivered a series of training sessions and knowledge-sharing engagements across several
			international pavilions at COP29, empowering global stakeholders with practical insights into
			carbon markets, climate finance, and sustainable technologies.
		</p>

		<!-- Conclusion -->
		<p class="mt-4 text-xl text-gray-700">
			At COP29, CMAI reaffirmed its commitment to shaping an equitable, scalable, and credible
			carbon market ecosystem that accelerates global climate goals while enabling industry
			participation at the forefront of climate action.
		</p>
	</div>
</div>
