<script>
	let showAboutDropdown = false;
	let showOfferingsDropdown = false;
	let showClimateDropdown = false;
	let showKnowledgeDropdown = false;
	let showMobileMenu = false;

	function toggleDropdown(menu) {
		showAboutDropdown = menu === 'about' ? !showAboutDropdown : false;
		showOfferingsDropdown = menu === 'offerings' ? !showOfferingsDropdown : false;
		showClimateDropdown = menu === 'climate' ? !showClimateDropdown : false;
		showKnowledgeDropdown = menu === 'knowledge' ? !showKnowledgeDropdown : false;
	}

	function toggleMobileMenu() {
		showMobileMenu = !showMobileMenu;
	}

	const menuItems = [
		{
			name: 'About Us',
			key: 'about',
			links: [
				{ path: '/about-us', label: 'About US' },
				{ path: '/our-team', label: 'Our Team' },
				{ path: '/members', label: 'Members' }
			]
		},
		{
			name: 'Initiatives',
			key: 'Initiatives',
			links: [
				{ path: '/carbon-markets', label: 'Empowering India’s Carbon Credit Market' },
				{ path: '/innovation-support', label: 'Policy research and advocacy' },
				{ path: '/cop-journey', label: 'Innovative Interventions ' },
				{ path: '/india-commitment', label: 'Capacity Building ' },
				{ path: '/climate-action-urgency', label: 'Community Initiatives' },
				{ path: '/climate-analytics', label: 'Partnerships ' }
			]
		},
		{
			name: 'Services',
			key: 'Services',
			links: [
				{ path: '/climate-sciences', label: 'Climate Sciences' },
				{ path: '/history-of-climate-action', label: 'History of Climate Action' },
				{ path: '/cop-journey', label: 'COP Journey ' },
				{ path: '/india-commitment', label: 'India Commitment ' },
				{ path: '/climate-action-urgency', label: 'Climate Action Urgency' },
				{ path: '/climate-analytics', label: 'Climate Analytics ' }
			]
		},
		{
			name: 'Events',
			key: 'Events',
			links: [{ path: '/research-material', label: 'Research Material' }]
		},
		{
			name: 'become a member',
			key: 'become a member',
			links: [{ path: '/research-material', label: 'Research Material' }]
		}
	];
</script>

<header class="relative z-10 text-white">
	<div class=" hidden lg:block">
		<div class="mx-auto flex max-w-screen-xl items-center gap-2 px-6 pb-2">
			<div class="flex size-full h-16 w-full max-w-screen-xl items-center gap-2">
				<a class="block flex gap-2 text-sm text-white" href="mailto:secretary@cma-india.in">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M2 4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h20c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H2zm18 2v.01L12 13 4 6.01V6h16zM4 18V8l8 7 8-7v10H4z"
						/>
					</svg> secretary@cma-india.in
				</a>
				<a
					class="block flex gap-2 text-sm text-white"
					href="https://maps.app.goo.gl/jvy6GRmjSP45weN96"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
						/>
					</svg>
					Working Office: 511, World Trade Centre, Barakhamba Road, New Delhi- 110001
				</a>
			</div>

			<div class="flex gap-4 sm:justify-end">
				<a href="https://www.instagram.com/cmai_carbonmarkets/" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.7.7.7.3 1.3.8 1.9 1.4.5.6 1 1.2 1.4 1.9.4.7.6 1.5.7 2.7.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.7 2.7-.3.7-.8 1.3-1.4 1.9-.6.5-1.2 1-1.9 1.4-.7.4-1.5.6-2.7.7-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.7-.7-.7-.3-1.3-.8-1.9-1.4-.5-.6-1-1.2-1.4-1.9-.4-.7-.6-1.5-.7-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .7-2.7.3-.7.8-1.3 1.4-1.9.6-.5 1.2-1 1.9-1.4.7-.4 1.5-.6 2.7-.7C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.5 3.7 1 .9 1.8 0 3.1 0 5c-.1 1.2-.1 1.6-.1 4.9s0 3.6.1 4.9c.1 1.9.9 3.2 2.7 4 .9.5 2 .8 3.3.9 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.3-.1 2.4-.4 3.3-.9 1.8-.8 2.6-2.1 2.7-4 .1-1.2.1-1.6.1-4.9s0-3.6-.1-4.9c-.1-1.9-.9-3.2-2.7-4-.9-.5-2-.8-3.3-.9-1.3-.1-1.7-.1-4.9-.1zM12 5.7a6.3 6.3 0 110 12.6 6.3 6.3 0 010-12.6m0 10.4a4.1 4.1 0 100-8.2 4.1 4.1 0 000 8.2m7.3-10.9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
						/>
					</svg>
				</a>

				<a href="https://twitter.com/official_cmai" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M23.64 4.56c-.84.37-1.75.61-2.7.72a4.72 4.72 0 002.08-2.59 9.36 9.36 0 01-2.97 1.13 4.67 4.67 0 00-8.01 4.26A13.28 13.28 0 011.67 3.14a4.64 4.64 0 001.45 6.22c-.74-.02-1.46-.23-2.1-.57v.06a4.66 4.66 0 003.73 4.57 4.68 4.68 0 01-2.1.08 4.67 4.67 0 004.36 3.24A9.36 9.36 0 010 20.48a13.2 13.2 0 007.18 2.1c8.6 0 13.3-7.13 13.3-13.3l-.01-.6a9.5 9.5 0 002.35-2.42z"
						/>
					</svg>
				</a>
				<a href="https://www.youtube.com/@OfficialCMAI" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M23.5 6.8c-.3-1.3-1.3-2.3-2.6-2.6C18.4 3.5 12 3.5 12 3.5s-6.4 0-8.9.7A3.2 3.2 0 00.5 6.8 32.1 32.1 0 000 12c0 1.7.1 3.4.5 5.2.3 1.3 1.3 2.3 2.6 2.6 2.5.7 8.9.7 8.9.7s6.4 0 8.9-.7a3.2 3.2 0 002.6-2.6c.3-1.8.5-3.5.5-5.2s-.1-3.4-.5-5.2zm-14.3 8.6V8.6l6.2 3.4-6.2 3.4z"
						/>
					</svg>
				</a>

				<a href="https://www.linkedin.com/company/86816772/admin/feed/posts/" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56c0 .95.79 1.72 1.77 1.72h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.49H3.56V9h3.56v11.49zM5.34 7.56a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zm14.14 12.93h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H8.37V9h3.42v1.57h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.4 4.3 5.52v6.25z"
						/>
					</svg>
				</a>
				<a
					href="https://www.facebook.com/people/Carbon-Markets-Association-of-India/61573425383926/"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M22.68 0H1.32C.59 0 0 .6 0 1.34v21.32C0 23.4.6 24 1.32 24h11.5v-9.3H9.65v-3.62h3.17V8.18c0-3.15 1.92-4.88 4.72-4.88 1.34 0 2.5.1 2.83.14v3.28h-1.94c-1.52 0-1.82.72-1.82 1.78v2.34h3.65l-.48 3.62h-3.17V24h6.23c.73 0 1.32-.6 1.32-1.34V1.34C24 .6 23.4 0 22.68 0z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
	<hr class="text-red-100" />
	<div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-teal-400">
				<img src="/images/logo.png" alt="Logo" width="200px" />
			</a>

			<nav class="hidden items-center space-x-6 md:flex">
				{#each menuItems as menu}
					<div class="relative cursor-pointer">
						<button
							on:click={() => toggleDropdown(menu.key)}
							class="cursor-pointer hover:text-green-400">{menu.name}</button
						>
						{#if (menu.key === 'about' && showAboutDropdown) || (menu.key === 'offerings' && showOfferingsDropdown) || (menu.key === 'climate' && showClimateDropdown) || (menu.key === 'knowledge' && showKnowledgeDropdown)}
							<ul
								class="absolute left-0 mt-2 w-2xs w-48 cursor-pointer rounded-md bg-white text-gray-900 shadow-lg"
							>
								{#each menu.links as link}
									<li class="cursor-pointer">
										<a href={link.path} class="block px-4 py-2 hover:bg-gray-200">{link.label}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				{/each}
				<a href="contact-us" class="cursor-pointer hover:text-green-400">Contact Us</a>
				<div class="sm:flex sm:gap-4">
					<button
						class="border-text-secondary w-4xs border-orange-600 bg-orange-600 px-6 py-2 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:border-orange-700 hover:bg-orange-700 hover:text-white hover:no-underline"
					>
						ICW 2025
					</button>
				</div>
			</nav>

			<div class="md:hidden">
				<button on:click={toggleMobileMenu} class="p-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	{#if showMobileMenu}
		<nav class="absolute h-screen w-full bg-gray-800 py-4 md:hidden">
			<ul class="space-y-2 text-center">
				{#each menuItems as menu}
					<li>
						<button
							on:click={() => toggleDropdown(menu.key)}
							class="block w-full cursor-pointer py-2 text-lg text-white hover:text-green-400"
							>{menu.name}</button
						>
						{#if (menu.key === 'about' && showAboutDropdown) || (menu.key === 'offerings' && showOfferingsDropdown) || (menu.key === 'climate' && showClimateDropdown) || (menu.key === 'knowledge' && showKnowledgeDropdown)}
							<ul class="rounded-md bg-gray-700 text-sm text-gray-300">
								{#each menu.links as link}
									<li>
										<a href={link.path} class="block px-4 py-2 hover:bg-gray-600">{link.label}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
				<li>
					<a href="/contact-us" class="block cursor-pointer py-2 text-white hover:text-green-400"
						>Contact Us</a
					>
				</li>
				<div class="justify-center sm:flex sm:gap-4">
					<button
						class="border-text-secondary w-4xs border-orange-600 bg-orange-600 px-6 py-2 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:border-orange-700 hover:bg-orange-700 hover:text-white"
					>
						ICW 2025
					</button>
				</div>
			</ul>
		</nav>
	{/if}
</header>
