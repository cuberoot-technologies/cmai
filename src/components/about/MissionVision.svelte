












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
				'(min-width: 640px)': { slides: { perView: 3, spacing: 16 } },
				'(min-width: 1022px)': { slides: { perView: 3, spacing: 24 } }
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

<div>
	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
                <div class=" py-10 px-4">
                    <div class="max-w-5xl mx-auto">
                      <h2 class="text-2xl font-bold text-dblue border-b-1 border-gray-200 pb-2 mb-10">
                        Vision & Mission
                      </h2>
                  
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Vision Card -->
                        <div class="bg-white shadow-lg rounded-lg p-6 relative text-center">
                          <div class="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-dblue mt-5 text-white px-6 py-2 rounded-lg ">
                            Vision
                          </div>
                          <div class="border-2 border-blue-700 p-6 rounded-lg mt-6">
                            <p class="text-base text-gray-800">
                              To be a catalyst towards building India as a Developed Nation
                            </p>
                          </div>
                        </div>
                  
                        <!-- Mission Card -->
                        <div class="bg-white shadow-lg rounded-lg p-6 relative text-center">
                          <div class="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-dblue mt-5 text-white px-6 py-2 rounded-lg ">
                            Mission
                          </div>
                          <div class="border-2 border-blue-700 p-6 rounded-lg mt-6 text-left">
                            <ul class="text-base text-gray-800 list-decimal list-inside">
                              <li>One-stop platform for services to industry & society</li>
                              <li>Customer-focused organization</li>
                              <li>World-class services</li>
                              <li>Global thinking and local action</li>
                              <li>Learning and caring organization</li>
                              <li>Partnership approach</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                  
                      <!-- Back Button -->
                      
                    </div>
                  </div>
                  
                  
                  
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div
					class="relative flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 shadow"
				>
					<img src="/images/cma.png" alt="" class=" w-[230px] rounded-lg" />
				</div>
				<div
					class="relative flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 shadow"
				>
					<img src="/images/cma.png" alt="" class=" w-[230px] rounded-lg" />
				</div>
			</div>
		</div>
	</div>
	<section class="bg-light mt-15 mb-10 py-6 text-center">
		<div class="container mx-auto mt-5 p-4">
			<h2 class="text-3xl font-bold md:text-4xl">Why CMAI?</h2>

			<div class="relative mx-auto max-w-screen-xl py-12">
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
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
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
							<div class="flex flex-col items-center text-center">
								<div class="mb-4 text-5xl">🏆</div>
								<h3 class="text-lg font-semibold">Expertise & Experience</h3>
								<p class="mt-2 max-w-xs text-base">
									With over 3,500 projects reducing 220 million tons of GHG emissions, CMAI brings
									deep expertise in carbon markets and sustainability.
								</p>
							</div>
						</div>
					</div>

					<div class="keen-slider__slide relative w-full">
						<div class="group relative overflow-hidden">
							<div class="flex flex-col items-center text-center">
								<div class="mb-4 text-5xl">🤝</div>
								<h3 class="text-lg font-semibold">Collaborative Approach</h3>
								<p class="mt-2 max-w-xs text-base">
									CMAI fosters collaboration between governments, industries, and civil society to
									drive impactful climate action.
								</p>
							</div>
						</div>
					</div>

					<div class="keen-slider__slide relative w-full">
						<div class="group relative overflow-hidden">
							<div class="flex flex-col items-center text-center">
								<div class="mb-4 text-5xl">🛠️</div>
								<h3 class="text-lg font-semibold">Comprehensive Services</h3>
								<p class="mt-2 max-w-xs text-base">
									From policy advocacy to carbon project consultancy, CMAI offers a full spectrum of
									services to support businesses and communities in their sustainability journey.
								</p>
							</div>
						</div>
					</div>

					<div class="keen-slider__slide relative w-full">
						<div class="group relative overflow-hidden">
							<div class="flex flex-col items-center text-center">
								<div class="mb-4 text-5xl">🌍</div>
								<h3 class="text-lg font-semibold">Global & Local Impact</h3>
								<p class="mt-2 max-w-xs text-base">
									CMAI combines global expertise with local action, ensuring tailored solutions for
									India's transition to a net-zero future.
								</p>
							</div>
						</div>
					</div>

					<div class="keen-slider__slide relative w-full">
						<div class="group relative overflow-hidden">
							<div class="flex flex-col items-center text-center">
								<div class="mb-4 text-5xl">🔗</div>
								<h3 class="text-lg font-semibold">Trusted Partnerships</h3>
								<p class="mt-2 max-w-xs text-base">
									CMAI works closely with key ministries, thought leaders, and international
									organizations, driving climate innovation and policy alignment for lasting change.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Contact Button -->
		
		
	</section>
	<div class="container mx-auto mb-10">
		<div class="flex justify-center">
			<a href="#" class="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-700 transition flex items-center gap-2">
				Click here to download the brochure <span>⬇️</span>
			</a>
		</div>
	</div>
</div>
