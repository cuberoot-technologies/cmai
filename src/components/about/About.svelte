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

	const socialLinks = [
		{
			name: 'Facebook',
			url: 'https://cii.in/facebook',
			icon: 'fa-facebook',
			color: 'text-blue-600'
		},
		{ name: 'Twitter', url: 'https://cii.in/twitter', icon: 'fa-x-twitter', color: 'text-black' }, // X (Twitter) in black
		{
			name: 'LinkedIn',
			url: 'https://cii.in/linkedin',
			icon: 'fa-linkedin',
			color: 'text-blue-500'
		},
		{ name: 'YouTube', url: 'https://cii.in/youtube', icon: 'fa-youtube', color: 'text-red-600' }
	];
</script>

<div>
	<div class="container mx-auto mt-5 p-4 pb-0">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
				<h2
					class="text-dblue relative mb-2 inline-block w-full border-b-1 border-solid border-gray-200 px-4 py-2 text-xl font-bold"
				>
					About Us
				</h2>
				<p class="mb-4 text-lg text-gray-800">
					The Carbon Markets Association of India (CMAI) works to accelerate the Net Zero Transition
					of India and the World by facilitating collaboration among stakeholders, including the
					government, industry, and civil society.
				</p>
				<p class="mb-4 text-lg text-gray-800">
					As a leading non-governmental, not-for-profit, industry-led organization, CMAI has
					supported over 3,500 projects, resulting in the reduction of 220 million tons of GHG
					emissions. Our active involvement in global climate negotiations ensures that we remain at
					the forefront of environmental action.
				</p>
				<p class="mb-4 text-lg text-gray-800">
					We aim to ensure that all the stakeholders inclusive of farmers, MSMEs, large industries,
					think tanks, financial institutions, and policymakers formulate strategic steps that can
					empower the country’s stride to a net zero future. CMAI works closely with government
					bodies to influence policy, engage thought leaders, and enhance industry competitiveness
					through specialized services and strategic global partnerships.
				</p>
				<p class="mb-4 text-lg text-gray-800">
					CMAI works closely with key ministries such as Ministry of Environment, Forest and Climate
					Change (MOEFCC), Ministry of Power (MoP), Ministry of New and Renewable Energy (MNRE), and
					NITI Aayog, providing policy advocacy and knowledge support. CMAI plays a pivotal role in
					initiatives like the Carbon Credit Trading Scheme (CCTS) and the Green Credit Programme
					(GCP), ensuring alignment with global standards and promoting climate justice. We are also
					a member of the committee for implementation of Extended Producer Responsibility (EPR)
					guidelines notified under Plastic Waste Management (PWM) Rules of Central Pollution
					Control Board’s (CPCB) and Technical Committee member for the development of Ecomark
					Rules. CMAI is the Committee Member of MoEFCC’s Mangroves and Wetlands Program. We are
					also working as knowledge partner with the Ministry of Railway, Ministry of Agriculture
					and State Water and Sanitation Mission, UP.
				</p>
				<p class="mb-4 text-lg text-gray-800">
					Beyond carbon markets, CMAI champions initiatives like the SAF Association, India Clean Cooking Alliance and Climate Law Association. CMAI continues to lead efforts toward global decarbonization and serves as a key reference point for both Indian industries and the international business community.
				</p>
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
	<section class="bg-dblue mb-10 py-6 text-center">
		<div class="container mx-auto mt-5 px-4">
		  <h2 class="text-3xl font-bold md:text-4xl text-white">Why CMAI?</h2>
	  
		  <!-- Responsive Grid -->
		  <div class="mx-auto max-w-screen-xl py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
			<!-- Expertise & Experience -->
			<div class="flex flex-col items-center text-center ">
			  <div class="mb-4 text-5xl">🏆</div>
			  <h3 class="text-lg font-semibold text-white">Expertise & Experience</h3>
			  <p class="mt-2 max-w-xs text-lg text-white">
				With over 3,500 projects reducing 220 million tons of GHG emissions, CMAI brings deep expertise in carbon markets and sustainability.
			  </p>
			</div>
	  
			<!-- Collaborative Approach -->
			<div class="flex flex-col items-center text-center">
			  <div class="mb-4 text-5xl">🤝</div>
			  <h3 class="text-lg font-semibold text-white">Collaborative Approach</h3>
			  <p class="mt-2 max-w-xs text-lg text-white">
				CMAI fosters collaboration between governments, industries, and civil society to drive impactful climate action.
			  </p>
			</div>
	  
			<!-- Comprehensive Services -->
			<div class="flex flex-col items-center text-center">
			  <div class="mb-4 text-5xl">🛠️</div>
			  <h3 class="text-lg font-semibold text-white">Comprehensive Services</h3>
			  <p class="mt-2 max-w-xs text-lg text-white">
				From policy advocacy to carbon project consultancy, CMAI offers a full spectrum of services to support businesses and communities in their sustainability journey.
			  </p>
			</div>
	  
		
		  </div>
		</div>
		<div class="flex  items-center justify-center gap-15">
			<!-- Global & Local Impact -->
			<div class="flex flex-col items-center text-center">
			  <div class="mb-4 text-5xl">🌍</div>
			  <h3 class="text-lg font-semibold text-white">Global & Local Impact</h3>
			  <p class="mt-2 max-w-xs text-lg text-white">
				CMAI combines global expertise with local action, ensuring tailored solutions for India's transition to a net-zero future.
			  </p>
			</div>
	  
			<!-- Trusted Partnerships -->
			<div class="flex flex-col items-center text-center">
			  <div class="mb-4 text-5xl">🔗</div>
			  <h3 class="text-lg font-semibold text-white">Trusted Partnerships</h3>
			  <p class="mt-2 max-w-xs text-lg text-white">
				CMAI works closely with key ministries, thought leaders, and international organizations, driving climate innovation and policy alignment for lasting change.
			  </p>
			</div>
			</div>
	  </section>
	  
	<div class="container mx-auto mb-10">
		<div class="flex justify-center">
			<a
				href="/images/CMAI Brochure may 2025.pdf.pdf" target="_blank"
				class="flex items-center gap-2 rounded-full bg-blue-800 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-gray-700"
			>
				Click here to download the brochure <span>⬇️</span>
			</a>
		</div>
	</div>

	<div class="flex items-center justify-center space-x-8 border-t py-4">
		{#each socialLinks as link}
			<div class="flex flex-col items-center">
				<a href={link.url} target="_blank" rel="noopener noreferrer">
					<i class="fab {link.icon} {link.color} text-3xl"></i>
				</a>
				<a href={link.url} class="mt-2 text-sm text-gray-600">{link.url}</a>
			</div>
		{/each}
	</div>

	<style>
		@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
	</style>
</div>
