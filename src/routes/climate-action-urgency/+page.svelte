<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import ClimateActionUrgencyBanner from '../../components/climateactionurgency/ClimateActionUrgencyBanner.svelte';
	import ClimateActionUrgency from '../../components/climateactionurgency/ClimateActionUrgency.svelte';
</script>

<section class="relative bg-[url('./images/banner.jpg')] bg-cover bg-center">
	<div
		class="absolute inset-0 z-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-50"
	></div>
	<Navbar />
	<ClimateActionUrgencyBanner />
</section>
<ClimateActionUrgency />

<Footer />
