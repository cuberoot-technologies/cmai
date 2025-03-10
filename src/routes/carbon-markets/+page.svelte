<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import CarbonMarketsBanner from '../../components/carbonmarkets/CarbonMarketsBanner.svelte';
	import CarbonMarkets from '../../components/carbonmarkets/CarbonMarkets.svelte';
</script>

<section class="relative bg-[url('/images/banner.jpg')] bg-cover bg-center">
	<div
		class="absolute inset-0 z-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-50"
	></div>
	<Navbar />
	<CarbonMarketsBanner />
</section>
<CarbonMarkets />

<Footer />
