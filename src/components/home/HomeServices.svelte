<script>
	import { onDestroy, onMount } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';

	let keenSliderElement;
	let keenSlider;
	let prevButton;
	let nextButton;

	onMount(() => {
		keenSlider = new KeenSlider(keenSliderElement, {
			loop: true,
			slides: {
				perView: 2,
				spacing: 12
			},
			breakpoints: {
				'(min-width: 640px)': { slides: { perView: 2, spacing: 16 } },
				'(min-width: 1022px)': { slides: { perView: 2, spacing: 24 } }
			}
		});

		// Attach event listeners safely
		prevButton?.addEventListener('click', () => keenSlider.prev());
		nextButton?.addEventListener('click', () => keenSlider.next());
	});

	// Cleanup event listeners on unmount
	onDestroy(() => {
		if (keenSlider) keenSlider.destroy();
	});
</script>

<section class="bg-gray-50">
	<div class="mx-auto mb-10 max-w-screen-xl px-4 py-12">
		<div class="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
			<h2 class="max-w-xl text-4xl font-bold tracking-tight text-sky-800 sm:text-5xl">
				Read trusted our services
			</h2>

			<div class="mt-8 flex gap-4 lg:mt-0">
				<button
					aria-label="Previous slide"
					bind:this={prevButton}
					class="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"
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
					bind:this={nextButton}
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

		<div class="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
			<div bind:this={keenSliderElement} class="keen-slider">
				<div class="keen-slider__slide bg-white p-6 shadow-xs">
					<blockquote
						class="flex h-full flex-col justify-between bg-white p-6 shadow-xs sm:p-8 lg:p-12"
					>
						<div>
							<div class="flex gap-0.5 text-green-500">01</div>
							<div class="mt-4">
								<p class="text-2xl font-bold text-black sm:text-3xl">
									Capacity Building/Skilling
								</p>

								<p class="mt-4 leading-relaxed text-gray-700">
									CMAI offers specialized training programs and workshops to enhance the knowledge
									and skills of individuals and organizations in the areas of sustainability, carbon
									markets, and decarbonization strategies. Our capacity-building initiatives empower
									stakeholders to effectively navigate the evolving landscape of carbon pricing,
									ESG, and climate policies.
								</p>
							</div>
						</div>
					</blockquote>
				</div>
                <div class="keen-slider__slide bg-white p-6 shadow-xs">
					<blockquote
						class="flex h-full flex-col justify-between bg-white p-6 shadow-xs sm:p-8 lg:p-12"
					>
						<div>
							<div class="flex gap-0.5 text-green-500">02</div>
							<div class="mt-4">
								<p class="text-2xl font-bold text-black-200 sm:text-3xl">
									Policy Advocacy
								</p>

								<p class="mt-4 leading-relaxed text-gray-700">
									CMAI actively engages in policy advocacy to influence national and international climate policies. By collaborating with key stakeholders, we work to ensure that carbon market regulations, climate financing, and sustainability frameworks align with industry needs, enabling a smooth transition to a low-carbon economy.

								</p>
							</div>
						</div>
					</blockquote>
				</div>
                <div class="keen-slider__slide bg-white p-6 shadow-xs">
					<blockquote
						class="flex h-full flex-col justify-between bg-white p-6 shadow-xs sm:p-8 lg:p-12"
					>
						<div>
							<div class="flex gap-0.5 text-green-500">03</div>
							<div class="mt-4">
								<p class="text-2xl font-bold text-black-200 sm:text-3xl">
									End-to-End Project Consultancy
								</p>

								<p class="mt-4 leading-relaxed text-gray-700">
									We provide comprehensive consultancy services for carbon market projects, from identification to carbon credit issuance. CMAI assists organizations with carbon credit generation, offset project design, ESG reporting, and compliance, ensuring successful project implementation that meets regulatory standards and drives sustainability goals.
								</p>
							</div>
						</div>
					</blockquote>
				</div>
                <div class="keen-slider__slide bg-white p-6 shadow-xs">
					<blockquote
						class="flex h-full flex-col justify-between bg-white p-6 shadow-xs sm:p-8 lg:p-12"
					>
						<div>
							<div class="flex gap-0.5 text-green-500">04</div>
							<div class="mt-4">
								<p class="text-2xl font-bold text-black-200 sm:text-3xl">
									Sustainability & Carbon Neutrality Services
								</p>

								<p class="mt-4 leading-relaxed text-gray-700">
									CMAI offers tailored services to help organizations achieve sustainability and carbon neutrality. Our solutions include carbon footprint assessment, net-zero strategies, and the implementation of carbon reduction technologies, helping businesses transition to more sustainable operations and meet global climate goals.
								</p>
							</div>
						</div>
					</blockquote>
				</div>
                <div class="keen-slider__slide bg-white p-6 shadow-xs">
					<blockquote
						class="flex h-full flex-col justify-between bg-white p-6 shadow-xs sm:p-8 lg:p-12"
					>
						<div>
							<div class="flex gap-0.5 text-green-500">05</div>
							<div class="mt-4">
								<p class="text-2xl font-bold text-black-200 sm:text-3xl">
									Fostering Climate Dialogues
								</p>

								<p class="mt-4 leading-relaxed text-gray-700">
									CMAI fosters essential climate dialogues by bringing together industry leaders, policymakers, and experts to exchange ideas, best practices, and innovations. These dialogues facilitate collaboration on critical climate issues and promote the development of actionable strategies to accelerate global decarbonization efforts and sustainability initiatives.
								</p>
							</div>
						</div>
					</blockquote>
				</div>
                <div class="keen-slider__slide bg-white p-6 shadow-xs">
					<blockquote
						class="flex h-full flex-col justify-between bg-white p-6 shadow-xs sm:p-8 lg:p-12"
					>
						<div>
							<div class="flex gap-0.5 text-green-500">06</div>
							<div class="mt-4">
								<p class="text-2xl font-bold text-black-200 sm:text-3xl">
									Knowledge Report
								</p>

								<p class="mt-4 leading-relaxed text-gray-700">
                                    CMAI produces in-depth knowledge reports that provide critical insights on carbon markets, sustainability practices, and climate policies. These reports are designed to inform decision-makers and guide businesses in understanding market trends, regulatory frameworks, and opportunities for sustainable growth and carbon credit generation.

								</p>
							</div>
						</div>
					</blockquote>
				</div>
			</div>
		</div>
	</div>
</section>
