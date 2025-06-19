<script>
	import FormModal from '../home/FormModal.svelte';
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
				<div class="bg-dblue max-w-full pb-4">
					<h2
						class="border-text-dblue relative inline-block w-full border-b-2 border-dotted px-4 py-2 text-lg font-bold text-white"
					>
						Climate Law Association
					</h2>
					<h2 class="mt-4 mb-4 px-4 text-2xl font-semibold text-white">Introduction</h2>
					<p class="mt-2 px-4 pb-4 text-lg leading-relaxed text-white">
						The Climate Law Association is a pioneering collaborative platform dedicated to
						advancing robust legal frameworks that address climate change in India. Bringing
						together legal experts, policymakers, industry leaders, and civil society, the alliance
						strives to craft progressive climate legislation that supports sustainable development,
						climate justice, and a resilient, low-carbon future for the nation.
					</p>
					<div class="mt-5 ml-4">
						<a
							class="text-dblue mt-5 rounded-lg bg-white p-4 px-6 py-2 font-bold hover:bg-gray-200"
							href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUQ09KM0VZTU4wWFU5VzI1TEhBNTFVU0owQy4u&route=shorturl"
							target="_blank">Know More</a
						>
					</div>
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
									The Climate Law Association envisions a future where robust, progressive climate
									legislation underpins sustainable growth and positions India as a global leader in
									climate action. We aim to create an integrated legal framework that guarantees
									environmental justice, empowers communities, and drives transformative policies,
									ensuring a resilient, net-zero future for all.
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
					class=" relative flex h-[280px] items-center justify-center border-1 border-solid border-gray-200 "
				>
					<img src="/images/icla.png" alt="" class=" w-[220px] rounded-lg" />
					<a
						href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz- HpRABNsyEgu9SdqldUQ09KM0VZTU4wWFU5VzI1TEhBNTFVU0owQy4u&route=shorturl"
						target="_blank"
						class="text-dblue hover:bg-light absolute right-3 flex h-[100%] h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div>
				<div class=" relative flex items-center justify-center">
					<img src="/images/iclaqr.jpg" alt="" class=" w-[180px] rounded-lg" />
				</div>
			</div>


			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div class="relative flex h-[190px] items-center justify-center">
					<img src="/images/icla.png" alt="" class=" w-[350px]" />
					<a
						on:click={() => openModal('Climate Law Association - (Intitiatives)')}
						class="text-dblue hover:bg-light absolute top-2 right-3 rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Join Now
					</a>
				</div>
			</div>
		</div>
	</div>
	<FormModal isOpen={isModalOpen} onClose={closeModal} source={modalSource} />
</div>
