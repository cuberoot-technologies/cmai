<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import Home from '../components/home/Home.svelte';
	// import { onMount } from 'svelte';

	// let showPopup = false;

	// onMount(() => {
	// 	const lastClosed = localStorage.getItem('popupClosedAt');

	// 	// Show popup if it's the first time or after 5 seconds
	// 	if (!lastClosed || Date.now() - lastClosed > 5 * 60 * 1000) {
	// 		showPopup = true;
	// 		document.body.classList.add('overflow-hidden'); // Disable scrolling
	// 	}
	// });

	// function closePopup() {
	// 	showPopup = false;
	// 	localStorage.setItem('popupClosedAt', Date.now());
	// 	document.body.classList.remove('overflow-hidden'); // Re-enable scrolling

	// 	// Reopen the popup after 5 seconds
	// 	setTimeout(() => {
	// 		showPopup = true;
	// 		document.body.classList.add('overflow-hidden'); // Disable scrolling again
	// 	}, 5 * 60 * 1000);
	// }
</script>

<Navbar />
<Home />
<Footer />

<!-- {#if showPopup}
	<div class="popup relative">
		<div class="popup-content">
			<img src="https://i.pinimg.com/736x/58/2b/90/582b905c5139c5dd1b8f614460c20d88.jpg" class="h-[350px] w-full" alt="">
			<button on:click={closePopup} class="bg-light w-[40px] h-[40px] p-2 absolute rounded-full text-dblue top-10 right-10 flex items-center justify-center cursor-pointer text-xl">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" width="20px" height="20px" />
				</svg>
			</button>
		</div>
	</div>
{/if} -->

<!-- <style>
	.popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgb(0 0 0 / 65%);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
	}

	.popup-content {
		padding: 20px;
		text-align: center;
	}

	/* Prevent scrolling */
	.overflow-hidden {
		overflow: hidden;
		height: 100vh;
	}
</style> -->
