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
				<h2
					class="text-dblue relative mb-2 inline-block w-full border-b-1 border-solid border-gray-200 px-4 py-2 text-xl font-bold"
				>
                EPR Association
				</h2>
				<div class="  ">
					<div class="mx-auto  rounded-xl bg-white py-6 ">
						<div class="space-y-8">
							<!-- Short Term Strategy -->
							<section class="bg-dblue-light  p-6">
                          <h2 class="text-2xl font-semibold mb-4 text-white">Introduction</h2>

								<p class="text-2xl text-white">
                                    The EPR Association is a pioneering initiative dedicated to transforming waste management in India through Extended Producer Responsibility. Bringing together producers, recyclers, policymakers, and environmental organisations, the Alliance champions sustainable waste practices, drives circular economy innovation, and sets benchmarks for reducing environmental impact while creating economic opportunities across diverse sectors. 

								</p>
                               <div class="mt-5">
                                <a class="rounded-lg bg-white px-6 py-2 text-dblue font-bold hover:bg-gray-200 mt-5 p-4" href="https://forms.office.com/pages/responsepage.aspx?id=zfBz1sJw-0ql0phkJ8st_dNkz-HpRABNsyEgu9SdqldUNjVBVEJRUktPWjZIMktQUk5ZT0VMWVI4TS4u&route=shorturl" target="_blank">Know More</a></div>

							</section>
						</div>
					</div>
				</div>
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div class=" relative flex items-center justify-center ">
					<img src="/images/epr.png" alt="" class=" w-[350px] rounded-lg" />
					<a
					on:click={() => openModal('EPR Association - (Intitiatives)')}
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
