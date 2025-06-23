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

<div>
	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
		

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
						<img alt="" src="/images/lighc.jpg" class="inset-0 h-[550px] w-[100%]  w-full" />
					</div>
				</div>
        	<div class="keen-slider__slide relative w-full">
					<div class="group relative overflow-hidden">
						<img alt="" src="/images/service2.jpg" class="inset-0 h-[550px] w-[100%]  w-full" />
					</div>
				</div>
        
        
        	
        
      

				
			</div>
		</div>
	</section>
				<div class="bg-white">
					<h2 class="text-dblue mb-4 text-2xl font-semibold">
						Policy Advocacy to Government and Regulators
					</h2>
					<p class="mb-4 text-xl text-gray-600">
						Policy advocacy is at the heart of our mission to shape a robust and forward-looking
						carbon market ecosystem in India. We actively engage with government bodies, regulatory
						agencies, and key stakeholders to ensure that industry voices are effectively
						represented in climate policy and carbon market frameworks.
					</p>

					<p class="mb-4 text-xl text-gray-600">
						CMAI has been a trusted participant in stakeholder consultation committees across
						several critical ministries, including the <b>
							Ministry of Environment, Forest and Climate Change (MoEFCC), Ministry of Power (MoP),
							Ministry of New and Renewable Energy (MNRE), Bureau of Energy Efficiency (BEE),
							Ministry of Agriculture, Ministry of Railways, and various State-level Water and
							Sanitation Missions.</b
						> Our involvement spans comprehensive deliberations on climate change, carbon market mechanisms,
						and sustainable development.
					</p>
				</div>
				<div class="mx-auto bg-white shadow-md">
					<h2
						class="bg-light text-dblue relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-xl font-bold"
					>
						We are proud to be:
					</h2>
					<div class="space-y-4">
						<!-- Event 1 -->
						<div class="    mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								1. A member of the Carbon Capture, Utilization and Storage (CCUS) and Green Hydrogen
								Committees under NITI Aayog.
							</p>
						</div>

						<!-- Event 2 -->
						<div class="   mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								2. A technical committee member for the design and development of the Green Credit
								Programme (GCP).
							</p>
						</div>

						<!-- Event 3 -->
						<div class="   mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								3. A subcommittee member of the Bureau of Indian Standards (BIS), contributing to
								the Environmental Management Sectional Committee (EED 01).
							</p>
						</div>
						<div class="   mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								4. A member of the Central Pollution Control Board’s (CPCB) committee for
								implementing Extended Producer Responsibility (EPR) under the Plastic Waste
								Management Rules, as well as the Technical Committee for Ecomark Rule development.
							</p>
						</div>
						<div class="   mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								5. An active committee member for MoEFCC’s Mangroves and Wetlands Program.
							</p>
						</div>
					</div>
				</div>
				<p class="mb-4 text-xl text-gray-600">
					In our efforts to represent and advocate for industry perspectives, CMAI has submitted
					detailed policy representations on critical international and domestic frameworks such as
					Article 6.2 and 6.4 of the Paris Agreement, the Carbon Credit Trading Scheme (CCTS), and
					emerging carbon taxation mechanisms.
				</p>
				<p class="mb-4 text-xl text-gray-600">
					Furthermore, CMAI has forged collaborative partnerships through Memoranda of Understanding
					(MoUs) with organizations such as AREAS, KUKVC, SEPC, IFGE, WEC India, and VCMI. These
					collaborations aim to strengthen capacity building at the state level and unlock carbon
					finance opportunities across sectors.
				</p>
				<p class="mb-4 text-xl text-gray-600">
					Through our continued engagement and deep expertise, CMAI remains committed to driving
					effective climate action and ensuring that regulatory frameworks are both ambitious and
					inclusive.
				</p>
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				
				<div class="relative flex w-full items-center justify-center border border-gray-200 p-4">
					
					<div class="mx-auto max-w-lg text-center">
						<h1 class="text-dblue mb-5 text-2xl font-bold">Become a member now!</h1>

						<a href="/about-membership"
							><button
								type="submit"
								class="border-text-secondary w-4xs border-text-dblue bg-dblue w-full cursor-pointer px-2 py-2 text-base text-xl text-white transition-all duration-300 ease-in-out hover:border-orange-700 hover:bg-orange-700 hover:text-white"
							>
								Join Now
							</button></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
