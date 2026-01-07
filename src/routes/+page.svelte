<script>
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
    import Home from '../components/home/Home.svelte';
    import { onMount } from 'svelte';

    let showPopup = false;

    onMount(() => {
        const lastClosed = Number(localStorage.getItem('popupClosedAt'));  // FIXED ✔

        if (!lastClosed || Date.now() - lastClosed > 5 * 60 * 1000) {
            showPopup = true;
            document.body.classList.add('overflow-hidden');
        }
    });

    function closePopup() {
        showPopup = false;
        localStorage.setItem('popupClosedAt', Date.now());
        document.body.classList.remove('overflow-hidden');

        setTimeout(() => {
            showPopup = true;
            document.body.classList.add('overflow-hidden');
        }, 5 * 60 * 1000);
    }
</script>

<Navbar />
<Home />
<Footer />

{#if showPopup}
	<div class="popup relative">
		<div class="popup-content flex gap-3">
			<a href="https://www.indiaenergyweek.com/" target="_blank" rel="noopener noreferrer"><img src="/images/pop.jpeg" class=" w-full" alt=""> </a>
			<a href="https://cma-india-event.netlify.app/" target="_blank" rel="noopener noreferrer"><img src="/images/eve.jpg" class=" w-full h-68" alt=""> </a>
			<button on:click={closePopup} class="bg-light w-[40px] h-[40px] p-2 absolute rounded-full text-dblue top-10 right-10 flex items-center justify-center cursor-pointer text-xl">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" width="20px" height="20px" />
				</svg>
			</button>
		</div>
	</div>
{/if}

<style>
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
</style>
