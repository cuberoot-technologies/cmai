<script>
	import FormMember from './FormMember.svelte';

	


</script>

<div>
	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
				<div class="bg-white ">
					<h2 class="mb-4 text-2xl font-semibold text-dblue">How to Become a Member</h2>
				</div>
				<div class="mx-auto bg-white shadow-md">
					<h2
						class="bg-light text-dblue relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-xl font-bold"
					>
                    ELIGIBLE ENTITIES
					</h2>
					<div class="space-y-4">
						<!-- Event 1 -->
						<div class="    border-b-2 border-dotted border-gray-200 mb-0 p-3">
							<p class="text-gray-600 text-xl">
								1. MNCs with registered offices in India and as well as overseas.

							</p>
						</div>

						<!-- Event 2 -->
						<div class="   border-b-2 border-dotted border-gray-200 mb-0 p-3">
							<p class="text-gray-600 text-xl">
								2. Public Limited Companies, Public Sector/State Government Undertakings

							</p>
						</div>

						<!-- Event 3 -->
						<div class="   border-b-2 border-dotted border-gray-200 mb-0 p-3">
							<p class="text-gray-600 text-xl">
								3. Private Limited Companies
							</p>
						</div>
                        <div class="   border-b-2 border-dotted border-gray-200 mb-0 p-3">
							<p class="text-gray-600 text-xl">
								4. Partnership Firms
							</p>
						</div>
                        <div class="   border-b-2 border-dotted border-gray-200 mb-0 p-3">
							<p class="text-gray-600 text-xl">
								5. Proprietorship Firms
                                

							</p>
						</div>	<div class="   border-b-2 border-dotted border-gray-200 mb-0 p-3">
							<p class="text-gray-600 text-xl">
								6. Non-profit etc.
							</p>
						</div>	

						<!-- Event 4 -->
						
					</div>
				</div>

				<div class=" shadow">
					<div class="mx-auto rounded-lg bg-white shadow-md">
						<h2
							class="bg-dblue-light relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-xl font-bold text-white"
						>
                        Documents Required for Membership
						</h2>
						<div class="space-y-4">
							<!-- Event 1 -->
							<div class="mt-2 flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">
									➢ Memorandum and Articles of Association or Bye Laws or Constitution or Partnership Deed along with the Latest Annual Report

								</p>
							</div>

							<!-- Event 2 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">
									➢ Annual Accounts/Latest Balance Sheet, (CA Certified)

								</p>
							</div>

							<!-- Event 3 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">
									➢ List of Directors, Partners with full addresses and details of Directorships/business interests, etc. in any other Companies. 

								</p>
							</div>

							<!-- Event 4 -->
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">➢ Any other brochure/literature about the organization, as required
                                </p>
							</div>
							<div class="flex items-center justify-between p-2 shadow-sm">
								<p class="text-gray-600 text-xl">
									➢ GSTIN Certificate copy etc.
								</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div class="relative flex items-center justify-center">
					<FormMember />
				</div>
			</div>
		</div>
	</div>
</div>
