<script>
	let activeTab = 0;

	const companies = [
		{
			name: 'COP29',
			videos: [
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744783603/skvq5fofvum3bhguijxb.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744783601/wzkaw9z2ee4k5twhvupy.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744783600/ktbtnklt3otmajpnjokv.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744783600/de24v7hcxwn0yrytoq49.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744783598/mwvvxnszij7gnqhj0and.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744783595/hkuffmd2jlhnsngbqxiq.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744783595/dgirrl3ywccrtngz8eyp.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744783594/dtvnykssbwrjsns9vtjx.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744783589/qpkmv8isskcrtcrzhfpx.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744783589/fguihvzknnqxekabfi09.mp4'
			]
		},
		{
			name: 'India Climate Samman',
			videos: [
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785090/11._CLIP_jqu1uj.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785085/4._CLIP_bc7o1o.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785082/10._CLIP_m5l4we.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785075/5._CLIP_i6yhgc.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785076/2._CLIP_ezjxgt.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785071/6._CLIP_mvwfbp.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785075/7._CLIP_lljkrq.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785060/13._CLIP_rnmh12.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785059/3._CLIP_sl9big.mp4'
			]
		},
		{
			name: 'India Climate Week',
			videos: [
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785788/14._CLIP_1_y7sdof.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785787/12._CLIP_1_q7pimb.mp4',
				'https://res.cloudinary.com/dscbvxg5e/video/upload/v1744785781/1._CLIP_3_naqb5t.mp4'
			]
		},
		{
			name: 'Members',
			videos: ['https://www.youtube.com/embed/XHOmBV4js_E']
		}
	];
</script>

<div class="mx-auto max-w-7xl p-4">
	<!-- Tabs -->
	<div class="mb-6 flex flex-wrap gap-2 overflow-x-auto mt-5 pb-2 justify-center">
		{#each companies as company, index}
			<button
				class={`border px-4 py-2 text-lg transition-colors duration-200 ${
					activeTab === index
						? 'border-blue-600 bg-dblue text-white'
						: 'border-gray-300 bg-white text-gray-800 hover:bg-gray-100'
				}`}
				on:click={() => (activeTab = index)}
			>
				{company.name}
			</button>
		{/each}
	</div>

	<!-- Active Tab Videos -->
	<div class="border border-gray-200 bg-white p-4 shadow-md">
		<h2 class="mb-4 text-2xl font-semibold">{companies[activeTab].name}</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each companies[activeTab].videos as video}
				<div class="aspect-w-16 aspect-h-9 relative w-full">
					<iframe
						src={video}
						class="absolute top-0 left-0 h-full w-full"
						frameborder="0"
						allowfullscreen
					></iframe>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.aspect-w-16 {
		position: relative;
		width: 100%;
		padding-top: 56.25%; /* 16:9 aspect ratio */
	}

	.aspect-w-16 iframe {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
