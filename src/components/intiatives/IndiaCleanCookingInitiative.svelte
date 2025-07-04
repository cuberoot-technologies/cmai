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
						India Clean Cooking Initiative
					</h2>
					<h2 class="mt-4 mb-4 px-4 text-2xl font-semibold text-white">Introduction</h2>
					<p class="mt-2 px-4 text-lg leading-relaxed text-white">
						The India Clean Cooking Alliance is a transformative initiative dedicated to
						revolutionising cooking practices across India. By uniting government bodies, industry
						experts, NGOs, and community leaders, the Alliance promotes smoke-free, low-emission
						cooking technologies. It aims to reduce health hazards and environmental degradation
						while advancing sustainable energy practices at the grassroots level.
					</p>
					<div class="mt-5 ml-4">
						<a
							class="text-dblue mt-5 rounded-lg bg-white p-4 px-6 py-2 font-bold hover:bg-gray-200"
							href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUM1VZTVYyUzg0RFVVTEdIWVQxS0E1UUdGTy4u&route=shorturl"
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
								➢ Mass deployment of innovative clean cooking technologies across communities.
							</p>
						</div>

						<!-- Event 2 -->
						<div class=" mb-0 border-b-2 border-dotted border-gray-200 px-2 py-2">
							<p class="text-lg text-gray-700">
								➢ Implementation of robust capacity-building programmes to enhance adoption.
							</p>
						</div>

						<!-- Event 3 -->
						<div class=" mb-0 border-b-2 border-dotted border-gray-200 px-2 py-2">
							<p class="text-lg text-gray-700">
								➢ Establishment of strategic partnerships to drive affordability and accessibility.
							</p>
						</div>

						<!-- Event 4 -->
						<div class="mb-0 border-b-2 border-dotted border-gray-200 px-2 py-2">
							<p class="text-lg text-gray-700">
								➢ Execution of targeted awareness campaigns that empower rural communities.
							</p>
						</div>

						<div class=" mb-0 px-2 py-2">
							<p class="text-lg text-gray-700">
								➢ Significant reduction in reliance on traditional fuels, mitigating indoor air
								pollution and its adverse health impacts.
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
									src="/images/vis.jpg"
									alt="Mission Image"
									class="h-[270px] w-full rounded-lg object-cover shadow-lg"
								/>
							</div>

							<!-- Text Content -->
							<div class="text-left">
								<h2 class="text-3xl font-bold text-gray-900">Vision</h2>
								<p class="mt-4 text-lg text-gray-700">
									The Alliance envisions a future where every household in India has access to safe,
									clean, and efficient cooking solutions. By fostering widespread adoption of
									sustainable cooking practices, it aspires to improve public health, reduce
									environmental footprints, and catalyse social and economic upliftment, ultimately
									creating a healthier, more resilient society.
								</p>
							</div>
						</div>

						<!-- Mission Card -->

						<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
							<!-- Text Content -->
							<div class="text-left">
								<h2 class="text-3xl font-bold text-gray-900">Mission</h2>

								<p class="mt-4 text-lg text-gray-700">
									Our mission is to empower communities through the promotion and implementation of
									clean cooking technologies. The Alliance strives to drive policy advocacy, enhance
									market readiness, and facilitate financial support mechanisms. By bridging
									technological innovation with community needs, we aim to ensure sustainable,
									affordable access to clean cooking for millions, paving the way for a greener
									future.
								</p>
							</div>
							<div>
								<img
									src="/images/mis.jpeg"
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
					class=" relative flex h-[220px] items-center justify-center border-1 border-solid border-gray-200"
				>
					<img src="/images/icca.png" alt="" class=" w-[280px] rounded-lg" />
					<a
						href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz- HpRABNsyEgu9SdqldUM1VZTVYyUzg0RFVVTEdIWVQxS0E1UUdGTy4u&route=shorturl"
						target="_blank"
						class="text-dblue hover:bg-light absolute right-3 flex h-[100%] h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div>
				<div class=" relative flex items-center justify-center">
					<img src="/images/iicaqr.jpg" alt="" class=" w-[180px] rounded-lg" />
				</div>
			</div>
		</div>
	</div>
	<FormModal isOpen={isModalOpen} onClose={closeModal} source={modalSource} />
</div>
