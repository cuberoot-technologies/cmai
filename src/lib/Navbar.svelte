<script>
	import HomeSearch from '../components/home/HomeSearch.svelte';
	let menuOpen = false;
	let openDropdown = null;

	const toggleDropdown = (id) => {
		openDropdown = openDropdown === id ? null : id;
	};

	const closeDropdown = () => {
		openDropdown = null;
	};
</script>

<header class="relative z-10">
	<!-- Header Container -->
	<div class="bg-dblue">
		<div class="relative mx-auto flex h-[5rem] max-w-screen-xl items-center justify-between px-4 lg:px-0">
			<!-- Hamburger Button (Mobile Only) -->
			<button class="absolute left-4 text-lg text-white focus:outline-none md:hidden" on:click={() => (menuOpen = !menuOpen)}>
				{#if menuOpen}
					✖
				{:else}
					☰
				{/if}
			</button>

			<!-- Logo Centered -->
			<div class="flex flex-grow justify-center">
				<a href="/" class="text-teal-400">
					<img src="/images/logo.png" alt="Logo" width="170px" />
				</a>
			</div>

			<!-- Desktop Search (Hidden on Mobile) -->
			<div class="absolute right-4 hidden md:block">
				<HomeSearch />
			</div>
		</div>

		<!-- Mobile Search -->
		{#if menuOpen}
			<div class="block flex flex-col items-center px-4 pb-2 md:hidden">
				<HomeSearch />
			</div>
		{/if}
	</div>

	<hr class="text-gray-300" />

	<!-- Navigation -->
	<div class="mx-auto flex max-w-screen-xl justify-center px-4 py-2 sm:px-6 lg:px-8">
		<nav class="w-full">
			<ul class={`transition-all duration-300 md:flex md:space-x-6 ${menuOpen ? 'block' : 'hidden'}`}>
				<!-- Reusable Dropdown Item -->
				{#each [
					{
						id: 'about',
						title: 'About Us',
						links: [
							{ href: '/about', label: 'About Us' },
							{ href: '/mission-vision', label: 'Mission & Vision' },
							{ href: '/strategy', label: 'Strategy' },
							{ href: '/strategy', label: 'CMAI Leadership' }
						]
					},
					{
						id: 'initiatives',
						title: 'Initiatives',
						links: [
							{ href: '/india-saf-alliance', label: 'India SAF Alliance' },
							{ href: '/india-epr-alliance', label: 'India EPR Alliance' },
							{ href: '/ant-Initiative', label: 'ANT Initiative' },
							{ href: '/india-clean-cooking-initiative', label: 'India Clean Cooking Initiative' },
							{ href: '/india-climate-law-alliance', label: 'India Climate Law Alliance' }
						]
					},
					{
						id: 'services',
						title: 'Services',
						links: [
							{ href: '/policy-advocacy-to-government-and-regulators', label: 'Policy Advocacy to Government and Regulators' },
							{ href: '/networking-opportunities-with-corporate-leaders', label: 'Networking Opportunities with Corporate Leaders, Government Authorities and International Fora' },
							{ href: '/capacity-building-workshops', label: 'Capacity Building Workshops and Training Programs for Stakeholders' },
							{ href: '/international-delegations', label: 'National & International Delegations for Fostering Climate Action' },
							{ href: '/knowledge-papersevents', label: 'Knowledge Papers and Research Reports' },
							{ href: '/regular-industry', label: 'Regular Industry Updates on Policy Development' },
							{ href: '/explore-collaboration', label: 'Explore Collaboration Opportunities with our Strategic Partners' },
							{ href: '/establish-brand', label: 'Establish Brand Image through various Conferences & Events' },
							{ href: '/carbon-project', label: 'Carbon Project Consultancy and Sustainability Services including Carbon Neutral Services' },
							{ href: '/awards-and-recognitions', label: 'Awards and Recognitions' },
							{ href: '/various-sectoral-surveys', label: 'Various Sectoral Surveys and Feedbacks for Policy Suggestions' }
						]
					},
					{
						id: 'events',
						title: 'Events',
						links: [
							{ href: '/upcoming-events', label: 'Upcoming Events' },
							{ href: '/past-events', label: 'Past Events' }
						]
					},
					{
						id: 'membership',
						title: 'Become A Member',
						links: [
							{ href: '/about-membership', label: 'About Membership' },
							{ href: '/membership-benefits', label: 'Membership Benefits' },
							{ href: '/how-to-become-a-member', label: 'How to Become a Member?' }
						]
					}
				] as item}
					<li
						class="relative group border-b md:border-none"
						on:mouseenter={() => !menuOpen && (openDropdown = item.id)}
						on:mouseleave={() => !menuOpen && (openDropdown = null)}
					>
						<a
							href="#"
							class="text-dblue block px-4 py-2 font-semibold hover:text-teal-400"
							on:click={() => menuOpen && toggleDropdown(item.id)}
						>
							{item.title}
						</a>

						<!-- Dropdown -->
						{#if openDropdown === item.id}
							<ul class="absolute z-50 left-4 md:left-0 mt-0 w-72 bg-white shadow-lg rounded-md md:group-hover:block md:absolute">
								{#each item.links as link}
									<li>
										<a href={link.href} class="hover:bg-dblue block px-4 py-2 hover:text-white text-sm">
											{link.label}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	@media (min-width: 768px) {
		.group:hover ul {
			display: block !important;
		}
	}
</style>
