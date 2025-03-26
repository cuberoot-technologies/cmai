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

	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
				
					<div class="mx-auto ">
						

						<div class="grid grid-cols-1 gap-6">
							<!-- Vision Card -->
							<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
								<div>
									<img
										src="https://www.southpole.com/uploads/thumbs/mission-hero_1180x640.jpeg.webp"
										alt="Mission Image"
										class="h-auto w-full rounded-lg object-cover shadow-lg"
									/>
								</div>

								<!-- Text Content -->
								<div class="text-left">
									<h2 class="text-3xl font-bold text-gray-900">Vision</h2>
									<p class="mt-4 text-lg text-gray-600">
										To be a catalyst towards building India as a Developed Nation
									</p>
								</div>
							</div>

							<!-- Mission Card -->

							<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
								<!-- Text Content -->
								<div class="text-left">
									<h2 class="text-3xl font-bold text-gray-900">Mission</h2>

									<ul class="list-inside list-decimal text-lg text-gray-600 mt-4">
										<li>One-stop platform for services to industry & society</li>
										<li>Customer-focused organization</li>
										<li>World-class services</li>
										<li>Global thinking and local action</li>
										<li>Learning and caring organization</li>
										<li>Partnership approach</li>
									</ul>
								</div>
								<div>
									<img
										src="https://www.southpole.com/uploads/thumbs/home-hero-alternate_600x400.jpg.webp"
										alt="Mission Image"
										class="h-auto w-full rounded-lg object-cover shadow-lg"
									/>
								</div>
							</div>
						
						</div>

						<!-- Back Button -->
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
