<script>
	import { onMount } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';

	let keenSliderEl; // Reference for Svelte
	let keenSlider;

	onMount(() => {
		keenSlider = new KeenSlider(keenSliderEl, {
			loop: true,
			slides: { perView: 1, spacing: 12 },
			breakpoints: {
				'(min-width: 640px)': { slides: { perView: 4, spacing: 16 } },
				'(min-width: 1024px)': { slides: { perView: 4, spacing: 24 } }
			},
			drag: true // Allow touch dragging
		});

		// Ensure slider resizes correctly
		window.addEventListener('resize', () => keenSlider.resize());
	});

	function prevSlide() {
		keenSlider.prev();
	}

	function nextSlide() {
		keenSlider.next();
	}
</script>

<section class="px-4 py-12">
	<div class="mx-auto max-w-screen-xl">
		<div class="flex items-center justify-between">
			<h2 class="text-4xl font-bold text-sky-800 sm:text-5xl">Partnerships and Collaborations</h2>
			<div class="flex gap-4">
				<button
					on:click={prevSlide}
					class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
					class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
			<div bind:this={keenSliderEl} class="keen-slider w-full">
				{#each ['/images/ictacademy.png', '/images/iica.png', '/images/life.png', '/images/world.png', '/images/indian.png', '/images/krishi.jpg', '/images/area.png', '/images/moe.png', '/images/spec.png', '/images/vcmi.webp'] as imageSrc}
					<div class="keen-slider__slide">
						<article
							class="flex h-[200px] flex-col items-center justify-around bg-white p-4 shadow-xs transition hover:shadow-lg"
						>
							<span class="flex w-full justify-center p-2">
								<img src={imageSrc} alt={imageSrc} width="60%" />
							</span>
						</article>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
