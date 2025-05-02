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
					 SAF association
				</h2>
				<div class=" ">
					<div class="mx-auto   py-6 ">
						<div class="space-y-8">
							<!-- Short Term Strategy -->
							<section class="bg-dblue  p-6">
								<p class="text-2xl text-white">
									The SAF association is dedicated to revolutionising the aviation sector by
									advancing sustainable aviation fuel (SAF) solutions. Uniting government, industry,
									academia, and rural communities, our alliance leverages India’s agricultural
									strengths and technological expertise to drive decarbonisation, enhance energy
									security, and create opportunities, transforming air travel into a greener future.
								
								</p>
                                <button class="rounded-lg bg-white px-6 py-2 text-dblue font-bold hover:bg-gray-200 mt-5" on:click={() => openModal('India SAF Alliance - Know More (Intitiatives)')}>Know More</button>

							</section>
						</div>
					</div>
				</div>
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div
					class="relative flex items-center justify-center "
				>
					<img src="/images/saf.png" alt="" class=" w-[350px] rounded-lg" />
					<a
					on:click={() => openModal('India SAF Alliance - (Intitiatives)')}
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
