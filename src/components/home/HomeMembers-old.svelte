<script>
	import { onMount, onDestroy } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';

	let keenSliderEl;
	let keenSlider;
	let interval;

	onMount(() => {
		keenSlider = new KeenSlider(keenSliderEl, {
			loop: true,
			slides: { perView: 1, spacing: 12 },
			breakpoints: {
				'(min-width: 640px)': { slides: { perView: 1, spacing: 16 } },
				'(min-width: 1034px)': { slides: { perView: 1, spacing: 24 } }
			},
			drag: true,
			created: (slider) => {
				// Auto-slide every 3 seconds with smooth animation
				interval = setInterval(() => {
					slider.moveToIdx(slider.track.details.abs + 1, true);
				}, 3000);
			},
			animation: {
				duration: 2500, // Slow animation duration (2.5s)
				easing: (t) => 1 - Math.pow(1 - t, 3) // Smooth ease-out cubic transition
			}
		});

		window.addEventListener('resize', () => keenSlider.resize());
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	function prevSlide() {
		keenSlider.prev();
	}

	function nextSlide() {
		keenSlider.next();
	}
</script>

<section class=" bg-gray-50 p-4">
	<div class="max-w-xl">
		<h2 class="text-xl font-bold tracking-tight text-sky-800">Our Members</h2>

		<p class="mt-2 max-w-xl text-sm leading-relaxed text-gray-700">
			CMAI has a diverse membership base, including industry leaders, corporates, government
			institutions, and academic institutes. Together, we collaborate to promote sustainable
			practices, advocate for impactful policies, and develop innovative solutions aimed at reducing
			carbon emissions.
		</p>
	</div>
	<div class=" relative mx-auto max-w-screen-xl">
		<div class="absolute top-[50%] z-10 flex w-[100%] items-center justify-between gap-4 p-2">
			<button
				on:click={prevSlide}
				class="rounded-full border border-orange-600 text-orange-600 transition hover:bg-orange-600 hover:text-white"
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
				on:click={nextSlide}
				class="rounded-full border border-orange-600 text-orange-600 transition hover:bg-orange-600 hover:text-white"
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
		<div class="mb-3 flex items-end justify-end">
			<a
				href="#"
				class="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-orange-600 px-3 py-2 text-orange-600 transition hover:bg-orange-600 hover:text-white md:mt-0"
			>
				<span class="text-xs"> See All Members </span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="size-4 rtl:rotate-180"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</svg>
			</a>
		</div>
		<div class="mt-2">
			<div bind:this={keenSliderEl} class="keen-slider w-full">
				{#each ['Eki Energy', 'Fortum India Pvt Ltd', 'Glencore', 'Grownet', 'Gujchem Distillers India Limited (Zr2 Group)', 'Indian Oil Corporate Limited', 'Nayara Energy Limited', 'Railway Energy Management Company Limited', 'Reliance Industries Ltd', 'Tata Power Renewable Energy Private Limited', 'Trafigura India Private Limited', 'TruAlt Bioenergy Limited', 'Vishvaraj India Private Limited (Vishvaraj Group)', 'Xpansiv'] as name}
					<div class="keen-slider__slide">
						<article
							class="flex h-[110px] flex-col items-center justify-around bg-white text-center shadow-xs transition hover:shadow-lg"
						>
							<span class="flex w-full justify-center p-2">
								<p>{name}</p>
							</span>
						</article>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
