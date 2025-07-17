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
		<div class="grid grid-cols-1 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
				<h2
					class="text-dblue relative mb-2 inline-block w-full border-b-1 border-solid border-gray-200 px-4 py-2 text-xl font-bold"
				>
					Strategy
				</h2>
				<div class="  p-6">
					<div class="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
						<div class="space-y-8">
							<!-- Short Term Strategy -->
							<section class="bg-dblue rounded-lg p-6">
								<h2 class="text-2xl font-semibold text-white">Short Term Strategy</h2>
								<ul class="mt-2 list-disc pl-5 text-white">
									<li>
										Develop structured governance frameworks to ensure transparency, accountability,
										and alignment with India’s climate objectives.
									</li>
									<li>
										Initiate pilot projects through ICCA, CLA and SAF Association to
										explore innovative carbon market mechanisms.
									</li>
									<li>
										Collaborate with policymakers, industries, and civil society to synchronize
										efforts in leveraging the carbon market for sustainable growth.
									</li>
								</ul>
							</section>

							<!-- Mid Term Strategy -->
							<section class="bg-dblue-light rounded-lg p-6">
								<h2 class="text-2xl font-semibold text-white">Mid Term Strategy</h2>
								<ul class="mt-2 list-disc pl-5 text-white">
									<li>
										Expand the influence of CMAI by driving large-scale adoption of successful pilot
										projects across industries.
									</li>
									<li>
										Position CMAI as a leading policy advisory body to shape India’s regulatory and
										operational landscape for climate action.
									</li>
									<li>
										Enhance India’s participation in global carbon markets by promoting
										high-quality, verifiable carbon credits.
									</li>
								</ul>
							</section>

							<!-- Long Term Strategy -->
							<section class="bg-dblue-light rounded-lg p-6">
								<h2 class="text-2xl font-semibold text-white">Long Term Strategy</h2>
								<ul class="mt-2 list-disc pl-5 text-white">
									<li>
										Lead India’s transition to net-zero by 2070 through sustained support for carbon
										market operations and policy evolution.
									</li>
									<li>
										Leverage CMAI’s expertise to build resilient global partnerships and share best
										practices.
									</li>
									<li>
										Collaborate with international stakeholders to ensure India’s leadership in
										creating a sustainable, equitable future.
									</li>
								</ul>
							</section>
						</div>
					</div>
				</div>
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div class="bg-light relative flex h-[220px] items-center justify-center shadow">
					<img src="/images/cma.png" alt="" class=" w-[230px] rounded-lg" />
					<a
						href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUNVg3TUtFR1pLRU9HQVBINENKSUlEMFlTVC4u&route=shorturl"
						target="_blank"
						class="text-dblue hover:bg-light absolute right-3 flex h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
