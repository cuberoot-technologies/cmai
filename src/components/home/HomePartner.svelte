<script>
	import { onMount } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';

	let keenSlider;

	onMount(() => {
        keenSlider = new KeenSlider('#keen-slider', {
            loop: true,
            slides: {
				perView: 2,
				spacing: 12
			},
			breakpoints: {
				'(min-width: 640px)': { slides: { perView: 4, spacing: 16 } },
				'(min-width: 1022px)': { slides: { perView: 4, spacing: 24 } }
			}
        });
		const keenSliderPrevious = document.getElementById('keen-slider-previous');
		const keenSliderNext = document.getElementById('keen-slider-next');

		const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
		const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

		keenSliderPrevious?.addEventListener('click', () => keenSlider.prev());
		keenSliderNext?.addEventListener('click', () => keenSlider.next());

		keenSliderPreviousDesktop?.addEventListener('click', () => keenSlider.prev());
		keenSliderNextDesktop?.addEventListener('click', () => keenSlider.next());
	});
</script>

<section class="bg-gray-50">
	<div class="mx-auto max-w-screen-xl px-4 py-12  mb-10 ">
		<div class="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
			<h2 class="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				Our Partners
			</h2>

			<div class="mt-8 flex gap-4 lg:mt-0">
				<button
					aria-label="Previous slide"
					id="keen-slider-previous"
					class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-5 rtl:rotate-180"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</button>

				<button
					aria-label="Next slide"
					id="keen-slider-next"
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

		<div class="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
			<div id="keen-slider" class="keen-slider">
				<div class="keen-slider__slide">
					<blockquote
						class="flex h-full items-center justify-between  "
					>
						<img src="/images/ictacademy.png" alt=""  width="200px" height="70px"/>
					</blockquote>
				</div>

                <div class="keen-slider__slide">
					<blockquote
						class="flex h-full items-center justify-between  "
					>
						<img src="/images/iica.png" alt=""  width="200px" height="70px"/>
					</blockquote>
				</div>


                <div class="keen-slider__slide">
					<blockquote
						class="flex h-full items-center justify-between  "
					>
						<img src="/images/life.png" alt=""  width="200px" height="70px"/>
					</blockquote>
				</div>


                <div class="keen-slider__slide">
					<blockquote
						class="flex h-full items-center justify-between  "
					>
						<img src="/images/world.png" alt=""  width="200px" height="70px"/>
					</blockquote>
				</div>


                <div class="keen-slider__slide">
					<blockquote
						class="flex h-full items-center justify-between  "
					>
						<img src="/images/indian.png" alt=""  width="200px" height="70px"/>
					</blockquote>
				</div>

                <div class="keen-slider__slide">
					<blockquote
						class="flex h-full items-center justify-between  "
					>
						<img src="/images/krishi.jpg" alt=""  width="200px" height="70px"/>
					</blockquote>
				</div> <div class="keen-slider__slide">
					<blockquote
						class="flex h-full items-center justify-between  "
					>
						<img src="/images/area.png" alt=""  width="200px" height="70px"/>
					</blockquote>
				</div> <div class="keen-slider__slide">
					<blockquote
						class="flex h-full items-center justify-between  "
					>
						<img src="/images/moe.png" alt=""  width="200px" height="70px"/>
					</blockquote>
				</div> <div class="keen-slider__slide">
					<blockquote
						class="flex h-full items-center justify-between  "
					>
						<img src="/images/spec.png" alt=""  width="200px" height="70px"/>
					</blockquote>
				</div> <div class="keen-slider__slide">
					<blockquote
						class="flex h-full items-center justify-between  "
					>
						<img src="/images/vcmi.webp" alt=""  width="200px" height="70px"/>
					</blockquote>
				</div>

				
			</div>
		</div>
	</div>
</section>
