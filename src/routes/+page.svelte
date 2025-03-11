<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import Home from '../components/home/Home.svelte';
	import HomeBanner from '../components/home/HomeBanner.svelte';
</script>

<section class="relative w-full h-screen overflow-hidden">
	<!-- Background Video -->
	<video
		class="absolute inset-0 w-full h-full object-cover"
		src="/images/video.mp4"
		autoplay
		loop
		muted
		playsinline
	></video>

	<!-- Overlay -->
	<div class="absolute inset-0 bg-black opacity-50"></div>

	<!-- Navbar and Content -->
	<div class="relative z-10">
		<Navbar />
		<HomeBanner />
	</div>
</section>

<!-- Main Content -->
<Home />

<Footer />
