<script>
	import { onMount } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';

	let sliderRef;
	let keenSliderInstance;

	onMount(() => {
		if (!sliderRef) {
			console.error('Slider element not found');
			return;
		}

		keenSliderInstance = new KeenSlider(sliderRef, {
			loop: true,
			slides: {
				origin: 'center',
				perView: 1,
				spacing: 16
			},
			breakpoints: {
				'(min-width: 640px)': { slides: { perView: 2, spacing: 16 } },
				'(min-width: 1022px)': { slides: { perView: 2, spacing: 24 } }
			}
		});
	});

	function prevSlide() {
		keenSliderInstance?.prev();
	}

	function nextSlide() {
		keenSliderInstance?.next();
	}
</script>

<section class="bg-gray-50">
	<div class="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 xl:py-24">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
			<div class="max-w-xl text-center sm:text-left">
				<h2 class="text-3xl font-bold tracking-tight text-sky-800 sm:text-4xl">
					Testimonials

				</h2>
				<p class="mt-4 text-gray-700">Building a Greener Tomorrow – Hear How CMAI is Driving Change Across Industries.</p>

				<div class="hidden lg:mt-8 lg:flex lg:gap-4">
					<button
						aria-label="Previous slide"
						on:click={prevSlide}
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
						aria-label="Next slide"
						on:click={nextSlide}
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

			<div class="-mx-6 lg:col-span-2 lg:mx-0">
				<div bind:this={sliderRef} class="keen-slider">
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588999?h=4aa3788990&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="13. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>

					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064589022?h=a598664488&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="1. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>

					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588964?h=b731f5a93b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="11. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>

					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588935?h=2b6966b0e0&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="6. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588913?h=c8b70efdc9&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="12. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588880?h=0ed3489af2&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="3. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588733?h=ded4a28a25&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="14. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588705?h=5cc5eceac6&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="7. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588839?h=0040f5f1c2&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="8. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
								<div style="padding:100% 0 0 0;position:relative;">
									<iframe
										src="https://player.vimeo.com/video/1064588816?h=5e01ffebe1&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
										frameborder="0"
										allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
										style="position:absolute;top:0;left:0;width:100%;height:100%;"
										title="5. CLIP"
									></iframe>
								</div>
								<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588796?h=7b6d732f75&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="1. CLIP (2)"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588761?h=9d324bd266&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="4. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588935?h=2b6966b0e0&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="6. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588667?h=4a726e434e&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="2. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588637?h=36e162a07b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="10. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
					<div class="keen-slider__slide">
						<blockquote
							class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12"
						>
							<div style="padding:100% 0 0 0;position:relative;">
								<iframe
									src="https://player.vimeo.com/video/1064588595?h=57e69fd9e5&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
									frameborder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									style="position:absolute;top:0;left:0;width:100%;height:100%;"
									title="9. CLIP"
								></iframe>
							</div>
							<script src="https://player.vimeo.com/api/player.js"></script>
						</blockquote>
					</div>
				</div>

				<div class="mt-8 flex justify-center gap-4 lg:hidden">
					<button
						aria-label="Previous slide"
						on:click={prevSlide}
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
						aria-label="Next slide"
						on:click={nextSlide}
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
		</div>
	</div>
</section>
