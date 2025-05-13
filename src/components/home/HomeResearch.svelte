<script>
	import { onMount, onDestroy } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';
	import { API_BASE_URL } from '$lib/api';

	let keenSliderEl;
	let keenSlider;
	let interval;
	let researchReports = [];

	async function fetchResearchReports() {
		try {
			const res = await fetch(`${API_BASE_URL}/collections/research_reports/records`);
			const data = await res.json();

			researchReports = data.items || [];
		} catch (error) {
			console.error('Error fetching research reports:', error);
		}
	}

	function startAutoSlide() {
		interval = setInterval(() => {
			if (keenSlider?.track?.details) {
				keenSlider.moveToIdx(keenSlider.track.details.abs + 1, true);
			}
		}, 3000);
	}

	function stopAutoSlide() {
		clearInterval(interval);
	}

	onMount(async () => {
		await fetchResearchReports();

		if (!keenSliderEl) return;

		keenSlider = new KeenSlider(keenSliderEl, {
			loop: true,
			slides: { perView: 1, spacing: 12 },
			breakpoints: {
				'(min-width: 640px)': { slides: { perView: 2, spacing: 16 } },
				'(min-width: 1034px)': { slides: { perView: 2, spacing: 24 } }
			},
			drag: true,
			animation: {
				duration: 2500,
				easing: (t) => 1 - Math.pow(1 - t, 3)
			}
		});

		startAutoSlide();
		keenSliderEl.addEventListener('mouseenter', stopAutoSlide);
		keenSliderEl.addEventListener('mouseleave', startAutoSlide);
		window.addEventListener('resize', () => keenSlider.resize());
	});

	onDestroy(() => {
		clearInterval(interval);
		if (keenSliderEl) {
			keenSliderEl.removeEventListener('mouseenter', stopAutoSlide);
			keenSliderEl.removeEventListener('mouseleave', startAutoSlide);
		}
	});

	function prevSlide() {
		keenSlider?.prev();
	}

	function nextSlide() {
		keenSlider?.next();
	}
</script>

<section class="py-8">
	<h2
		class="bg-light text-dblue relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-xl font-bold"
	>
		Research Reports
	</h2>

	<div class="relative mx-auto max-w-screen-xl">
		<div class="absolute top-[40%] z-10 flex w-[100%] items-center justify-between gap-4 p-2">
			<button
				on:click={prevSlide}
				class="rounded-full border border-blue-800 text-blue-800 transition hover:bg-blue-700 hover:text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="size-5 rtl:rotate-180"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>
			</button>
			<button
				on:click={nextSlide}
				class="rounded-full border border-blue-800 text-blue-800 transition hover:bg-blue-700 hover:text-white"
			>
				<svg
					class="size-5 rtl:rotate-180"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
				</svg>
			</button>
		</div>

		<div bind:this={keenSliderEl} class="keen-slider w-full">
			{#each researchReports as report}
				<div class="keen-slider__slide">
					<a href={report.link || '#'} target="_blank">
						<article
							class="flex h-[290px] flex-col items-center justify-around bg-white p-4 shadow-xs transition hover:shadow-lg"
						>
							<img
								src={`https://cms.cmai.wat-s.app/api/files/${report.collectionId}/${report.id}/${report.image}`}
								alt={report.title}
								class="h-[195px] border border-gray-300 object-contain"
							/>
							<p class="text-center text-base text-gray-800">{report.title || 'Untitled'}</p>
						</article>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
