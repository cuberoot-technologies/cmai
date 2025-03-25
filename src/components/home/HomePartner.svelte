<script>
	import { onMount, onDestroy } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';

	let keenSliderEl;
	let keenSlider;
	let interval;

	function startAutoSlide() {
		interval = setInterval(() => {
			keenSlider.moveToIdx(keenSlider.track.details.abs + 1, true);
		}, 3000);
	}

	function stopAutoSlide() {
		clearInterval(interval);
	}

	onMount(() => {
		// Ensure keenSliderEl is defined before using it
		if (!keenSliderEl) return;

		keenSlider = new KeenSlider(keenSliderEl, {
			loop: true,
			slides: { perView: 1, spacing: 12 },
			breakpoints: {
				'(min-width: 640px)': { slides: { perView: 2, spacing: 16 } },
				'(min-width: 1034px)': { slides: { perView: 2, spacing: 24 } }
			},
			drag: true,
			animation: {
				duration: 2500,
				easing: (t) => 1 - Math.pow(1 - t, 3)
			}
		});

		startAutoSlide(); // Start auto-slide

		// Add event listeners only if keenSliderEl exists
		keenSliderEl.addEventListener('mouseenter', stopAutoSlide);
		keenSliderEl.addEventListener('mouseleave', startAutoSlide);
		window.addEventListener('resize', () => keenSlider.resize());
	});

	onDestroy(() => {
		clearInterval(interval);

		// Ensure keenSliderEl exists before removing event listeners
		if (keenSliderEl) {
			keenSliderEl.removeEventListener('mouseenter', stopAutoSlide);
			keenSliderEl.removeEventListener('mouseleave', startAutoSlide);
		}
	});

	function prevSlide() {
		keenSlider.prev();
	}

	function nextSlide() {
		keenSlider.next();
	}
</script>

<section class="">
	<h2
		class="bg-dblue-light relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-xl font-bold text-white"
	>
		Associates
	</h2>
	<a
		href="#"
		class="group hover:text-dblue relative inline-flex w-full items-center justify-end p-4 pt-0 text-base text-gray-700 transition-all duration-300"
	>
		More
		<span
			class="ml-1 translate-x-0 transform text-sm opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
		>
			→
		</span>
	</a>
	<div class=" relative mx-auto max-w-screen-xl">
		<div class="absolute top-[40%] z-10 flex w-[100%] items-center justify-between gap-4 p-2">
			<button
				on:click={prevSlide}
				class="rounded-full border border-blue-800 text-blue-800 transition hover:bg-blue-700 hover:text-white"
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
				class="rounded-full border border-blue-800 text-blue-800 transition hover:bg-blue-700 hover:text-white"
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

		<div class="">
			<div bind:this={keenSliderEl} class="keen-slider w-full">
				{#each ['/images/life.png', '/images/indian.png', '/images/pa.png', '/images/pb.png', '/images/pc.png', '/images/area.png', '/images/vcmi.png'] as imageSrc}
					<div class="keen-slider__slide">
						<article
							class="flex h-[150px] flex-col items-center justify-around bg-white shadow-xs transition hover:shadow-lg"
						>
							<span class="flex w-full items-center justify-center p-2">
								<img src={imageSrc} alt={imageSrc} class="h-[90px]" />
							</span>
						</article>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
