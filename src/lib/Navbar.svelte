<script>
	import HomeSearch from '../components/home/HomeSearch.svelte';
	let menuOpen = false;
</script>

<header class="relative z-10">
	<!-- Header Container -->
	<div class="bg-dblue">
		<div
			class="relative mx-auto flex h-[5rem] max-w-screen-xl items-center justify-between px-4 lg:px-0"
		>
			<!-- Hamburger Button (Mobile Only) -->
			<button
				class="absolute left-4 text-lg text-white focus:outline-none md:hidden"
				on:click={() => (menuOpen = !menuOpen)}
			>
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
		<div class="block flex flex-col items-center px-4 pb-2 md:hidden">
			<HomeSearch />
		</div>
	</div>
	<hr class="text-gray-300" />

	<!-- Navigation -->
	<div class="mx-auto flex max-w-screen-xl justify-center px-4 py-2 sm:px-6 lg:px-8">
		<nav class="items-center justify-center md:flex">
			<!-- Mobile Menu -->
			<ul
				class="absolute top-[5rem] left-0 h-[100vh] w-full bg-white shadow-md transition-all md:static md:flex md:h-full md:space-x-6 md:bg-transparent md:shadow-none"
				class:hidden={!menuOpen}
			>
				<ul class="relative">
					<li class="group border-b md:border-none">
						<a href="/about" class="text-dblue block px-4 py-2 font-semibold hover:text-teal-400"
							>About Us</a
						>

						<!-- Submenu -->
						<ul
							class="absolute left-0 mt-0 hidden w-48 rounded-md bg-white shadow-lg group-hover:block"
						>
							<li>
								<a href="/mission-vision" class="hover:bg-dblue block px-4 py-2 hover:text-white"
									>Mission & Vision</a
								>
							</li>
							<li>
								<a href="/strategy" class="hover:bg-dblue block px-4 py-2 hover:text-white"
									>Strategy</a
								>
							</li>
							<li>
								<a href="/strategy" class="hover:bg-dblue block px-4 py-2 hover:text-white"
									>CMAI Leadership</a
								>
							</li>
						</ul>
					</li>
				</ul>
				<ul class="relative">
					<li class="group border-b md:border-none">
						<a href="#" class="text-dblue block px-4 py-2 font-semibold hover:text-teal-400"
							>Initiatives</a
						>

						<!-- Submenu -->
						<ul
							class="absolute left-0 mt-0 hidden w-48 rounded-md bg-white shadow-lg group-hover:block"
						>
							<li>
								<a href="/india-saf-alliance" class="hover:bg-dblue block px-4 py-2 hover:text-white"
									>India SAF Alliance</a
								>
							</li>
							<li>
								<a href="/india-epr-alliance" class="hover:bg-dblue block px-4 py-2 hover:text-white"
									>India EPR Alliance</a
								>
							</li>
							<li>
								<a href="/ant-Initiative" class="hover:bg-dblue block px-4 py-2 hover:text-white"
									>ANT Initiative</a
								>
							</li>

							<li>
								<a href="/india-clean-cooking-initiative" class="hover:bg-dblue block px-4 py-2 hover:text-white"
									>India Clean Cooking Initiative</a
								>
							</li>

							<li>
								<a href="/india-climate-law-alliance" class="hover:bg-dblue block px-4 py-2 hover:text-white"
									>India Climate Law Alliance</a
								>
							</li>
						</ul>
					</li>
				</ul>

				<li class="border-b md:border-none">
					<a href="/" class="text-dblue block px-4 py-2 font-semibold hover:text-teal-400"
						>Services</a
					>
				</li>
				<li class="border-b md:border-none">
					<a href="/" class="text-dblue block px-4 py-2 font-semibold hover:text-teal-400">Events</a
					>
				</li>
				<li>
					<a href="/" class="text-dblue block px-4 py-2 font-semibold hover:text-teal-400"
						>Become A Member</a
					>
				</li>
			</ul>
		</nav>
	</div>
</header>
