<script>
	import HomeSearch from '../components/home/HomeSearch.svelte';
	let menuOpen = false;
</script>

<header class="relative z-10 bg-stone-200">
	<!-- Header Container -->
	<div class="mx-auto flex h-[5rem] max-w-screen-xl items-center justify-between px-4 lg:px-0 relative">
		<!-- Hamburger Button (Mobile Only) -->
		<button class="md:hidden text-dblue text-lg focus:outline-none absolute left-4" on:click={() => (menuOpen = !menuOpen)}>
			{#if menuOpen}
				✖
			{:else}
				☰
			{/if}
		</button>

		<!-- Logo Centered -->
		<div class="flex-grow flex justify-center">
			<a href="/" class="text-teal-400">
				<img src="/images/cmai.png" alt="Logo" width="170px" />
			</a>
		</div>

		<!-- Desktop Search (Hidden on Mobile) -->
		<div class="hidden md:block absolute right-4">
			<HomeSearch />
		</div>
	</div>

	<!-- Mobile Search -->
	<div class="block md:hidden flex flex-col items-center px-4 pb-2">
		<HomeSearch />
	</div>

	<hr class="text-gray-300" />

	<!-- Navigation -->
	<div class="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8 flex justify-center">
		<nav class="md:flex items-center justify-center">
			<!-- Mobile Menu -->
			<ul
				class="absolute h-[100vh] bg-stone-200 left-0 top-[5rem]  w-full  shadow-md transition-all md:static md:h-full md:flex md:space-x-6 md:bg-transparent md:shadow-none"
				class:hidden={!menuOpen}
			>
				<li class="border-b  md:border-none">
					<a href="/" class="block px-4 py-2 text-dblue font-semibold hover:text-teal-400">About Us</a>
				</li>
				<li class="border-b md:border-none">
					<a href="/" class="block px-4 py-2 text-dblue font-semibold hover:text-teal-400">Initiatives</a>
				</li>
				<li class="border-b md:border-none">
					<a href="/" class="block px-4 py-2 text-dblue font-semibold hover:text-teal-400">Services</a>
				</li>
				<li class="border-b md:border-none">
					<a href="/" class="block px-4 py-2 text-dblue font-semibold hover:text-teal-400">Events</a>
				</li>
				<li>
					<a href="/" class="block px-4 py-2 text-dblue font-semibold  hover:text-teal-400">Become A Member</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
