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
				<h2
					class="text-dblue relative mb-2 inline-block w-full border-b-1 border-solid border-gray-200 px-4 py-2 text-xl font-bold"
				>
					EPR Association
				</h2>
				<div class="  ">
					<div class="mx-auto rounded-xl bg-white py-6">
						<div class="space-y-8">
							<!-- Short Term Strategy -->
							<section class="bg-dblue-light p-6">
								<h2 class="mb-4 text-2xl font-semibold text-white">Introduction</h2>

								<p class="text-2xl text-white">
									The EPR Association is a pioneering initiative dedicated to transforming waste
									management in India through Extended Producer Responsibility. Bringing together
									producers, recyclers, policymakers, and environmental organisations, the Alliance
									champions sustainable waste practices, drives circular economy innovation, and
									sets benchmarks for reducing environmental impact while creating economic
									opportunities across diverse sectors.
								</p>
								<div class="mt-5">
									<a
										class="text-dblue mt-5 rounded-lg bg-white p-4 px-6 py-2 font-bold hover:bg-gray-200"
										href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUNjVBVEJRUktPWjZIMktQUk5ZT0VMWVI4TS4u&route=shorturl"
										target="_blank">Know More</a
									>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
			
		<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div
					class=" relative flex items-center justify-center border-1 border-solid border-gray-200"
				>
					<img src="/images/epr.png" alt="" class=" w-[280px] rounded-lg" />
					<a
						href="https://forms.office.com//pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUNjVBVEJRUktPWjZIMktQUk5ZT0VMWVI4TS4u&fromie=true"
						target="_blank"
						class="text-dblue hover:bg-light absolute right-3 flex h-[100%] h-[100%] cursor-pointer items-end rounded-md px-2 py-2 text-base font-bold text-white underline transition hover:text-white"
					>
						Click now to register
					</a>
				</div>
				<div class=" relative flex items-center justify-center">
					<img src="/images/eprqr.png" alt="" class=" w-[180px] rounded-lg" />
				</div>
			</div>
		</div>
	</div>
	<FormModal isOpen={isModalOpen} onClose={closeModal} source={modalSource} />
</div>
