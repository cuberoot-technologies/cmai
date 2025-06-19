<script>
	import FormMember from '../aboutmembership/FormMember.svelte';
</script>

<div>
	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
			 <img src="/images/service7.jpg" alt=""class="mx-auto" >

				<div class="bg-white">
					<h2 class="text-dblue mb-4 text-2xl font-semibold">
						National & International Delegations for Fostering Climate Action
					</h2>
					<p class="mb-4 text-xl text-gray-600">
						CMAI actively leads national and international delegations to drive global and domestic dialogue on climate change, carbon markets, and sustainability. By bringing together key industry stakeholders, policymakers, and climate experts, we ensure that India’s voice is represented in global climate forum including at the UNFCCC Conference of Parties (COP).
					</p>

					
				</div>
				
				<p class="mb-4 text-xl text-gray-600">
					We continue this momentum into COP30, where we will once again lead a diverse, impact-driven delegation. We are taking our delegation to COP30 — join us in shaping the future of climate action.
				</p>
				
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div class="relative flex w-full items-center justify-center border border-gray-200 p-4">
					<div class="mx-auto max-w-lg text-center">
						<h1 class="text-dblue mb-5 text-2xl font-bold">Become a member now!</h1>

						<a href="/about-membership"><button
							type="submit"
							class="border-text-secondary w-4xs border-text-dblue bg-dblue w-full cursor-pointer px-2 py-2 text-base text-xl text-white transition-all duration-300 ease-in-out hover:border-orange-700 hover:bg-orange-700 hover:text-white"
						>
							Join Now
						</button></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
