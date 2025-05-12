<script>
	import FormModal from "../home/FormModal.svelte";
	let isModalOpen = false;
  let modalSource = '';

  function openModal(source) {
    modalSource = source;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
    modalSource = '';
  }
</script>

<div>
	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
				<div class="bg-light max-w-full">
					<h2
						class="border-text-dblue text-dblue relative inline-block w-full border-b-2 border-dotted px-4 py-2 text-lg font-bold"
					>
						Climate Law Association
					</h2>
					<h2 class="mt-4 mb-4 px-4 text-2xl font-semibold">Introduction</h2>
					<p class="mt-2 px-4 pb-4 text-lg leading-relaxed text-gray-700">
						The Climate Law Association is a pioneering collaborative platform dedicated to
						advancing robust legal frameworks that address climate change in India. Bringing
						together legal experts, policymakers, industry leaders, and civil society, the alliance
						strives to craft progressive climate legislation that supports sustainable development,
						climate justice, and a resilient, low-carbon future for the nation.
					</p>
				</div>

				<div class="mx-auto bg-white shadow-md">
					<h2
						class="bg-light text-dblue relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-lg font-bold"
					>
						Highlights
					</h2>
					<div class="space-y-4">
						<!-- Event 1 -->
						<div class="  mb-0 border-b-2 border-dotted border-gray-200 px-2 py-2">
							<p class="text-lg text-gray-700">
								➢ Successful advocacy for landmark climate policies and progressive legal reforms.
							</p>
						</div>

						<!-- Event 2 -->
						<div class=" mb-0 border-b-2 border-dotted border-gray-200 px-2 py-2">
							<p class="text-lg text-gray-700">
								➢ Development of innovative legal frameworks addressing climate change.
							</p>
						</div>

						<!-- Event 3 -->
						<div class=" mb-0 border-b-2 border-dotted border-gray-200 px-2 py-2">
							<p class="text-lg text-gray-700">
								➢ Active engagement with legal experts, policymakers, and civil society to drive
								climate governance.
							</p>
						</div>

						<!-- Event 4 -->
						<div class="mb-0 border-b-2 border-dotted border-gray-200 px-2 py-2">
							<p class="text-lg text-gray-700">
								➢ Alignment of national laws with international climate commitments.
							</p>
						</div>

						<div class=" mb-0 px-2 py-2">
							<p class="text-lg text-gray-700">
								➢ Raising legal awareness and fostering enforceable, forward-thinking climate
								legislation.
							</p>
						</div>
					</div>
				</div>

				<div class="mx-auto mt-5 pt-5">
					<div class="grid grid-cols-1 gap-6">
						<!-- Vision Card -->
						<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
							<div>
								<img
									src="/images/climate.jpeg"
									alt="Mission Image"
									class="h-[270px] w-full rounded-lg object-cover shadow-lg"
								/>
							</div>

							<!-- Text Content -->
							<div class="text-left">
								<h2 class="text-3xl font-bold text-gray-900">Vision</h2>
								<p class="mt-4 text-lg text-gray-700">
									The Climate Law Association envisions a future where robust, progressive
									climate legislation underpins sustainable growth and positions India as a global
									leader in climate action. We aim to create an integrated legal framework that
									guarantees environmental justice, empowers communities, and drives transformative
									policies, ensuring a resilient, net-zero future for all.
								</p>
							</div>
						</div>

						<!-- Mission Card -->

						<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
							<!-- Text Content -->
							<div class="text-left">
								<h2 class="text-3xl font-bold text-gray-900">Mission</h2>

								<p class="mt-4 text-lg text-gray-700">
									Our mission is to empower and catalyse legal reform for effective climate
									governance. By bridging the gap between policymakers, legal practitioners, and key
									stakeholders, we advocate for evidence-based, enforceable climate laws that drive
									mitigation and adaptation efforts. We are committed to ensuring that India's legal
									system leads the charge in global climate action and sustainable development.
								</p>
							</div>
							<div>
								<img
									src="/images/earth.jpg"
									alt="Mission Image"
									class="h-[270px] w-full rounded-lg object-cover shadow-lg"
								/>
							</div>
						</div>
					</div>

					<!-- Back Button -->
				</div>
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div
				class="relative flex h-[190px] items-center justify-center "
			>
				<img src="/images/icla.png" alt="" class=" w-[350px] " />
				<a
				on:click={() => openModal('Climate Law Association - (Intitiatives)')}
					class="text-dblue font-bold rounded-md absolute top-2 right-3 underline px-2 py-2 text-base text-white transition hover:bg-light hover:text-white"
				>
					Join Now
				</a>
			</div>
			
			</div>
		</div>
	</div>
	<FormModal isOpen={isModalOpen} onClose={closeModal} source={modalSource} />

</div>
