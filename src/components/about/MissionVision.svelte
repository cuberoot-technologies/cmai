












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

	
</div>
