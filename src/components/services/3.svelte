<script>
	// Sample data based on the events provided
	const events = [
		{
			title:
				'Webinar on International Cooperation to Tackle Climate Change through Article 6 of the Paris Agreement',
			date: '9th April 2025'
		},
		{
			title:
				"Joint Certification Course with the Indian Institute of Corporate Affairs on 'Global And Indian Carbon Markets'",
			date: '4th & 5th February 2025'
		},
		{
			title:
				"Joint Certification Course with IIM Mumbai on 'Carbon Financing For ESG To Decarbonize Industry'",
			date: '17th & 18th December 2024'
		},
		{
			title:
				'Capacity Building on Carbon Markets for the Refinery Sector at the India Refining Summit 2024',
			date: '24th October 2024'
		},
		{
			title: 'Mastering Carbon Markets Certification Course',
			date: '16th September 2024'
		},
		{
			title:
				"National Workshop on 'Accelerating Green Hydrogen and Clean Energy' with the Ministry of New and Renewable Energy",
			date: '25th July 2024'
		},
		{
			title: 'Understanding Scope 3 Emissions Webinar',
			date: '5th July 2024'
		},
		{
			title: "Two Day Workshop at IOCL R&D Centre on 'Carbon Market and Offset Management'",
			date: '10th – 11th June 2024'
		},
		{
			title: 'Carbon Market Opportunities for the Biofuel Industry Workshop',
			date: 'April 2024'
		},
		{
			title: 'Integrity in the Voluntary Carbon Market Workshop',
			date: 'February 2024'
		},
		{
			title: 'Carbon Credit Taxation Workshop',
			date: 'December 2023'
		}
	];
</script>

<div>
	<div class="container mx-auto mt-5 p-4">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<!-- Left Sidebar (smaller) -->
			<div class="space-y-9 md:col-span-9">
				<div class="bg-white">
					<h2 class="text-dblue mb-4 text-2xl font-semibold">
						Capacity Building Workshops and Training Programs for Stakeholders
					</h2>
					<p class="mb-4 text-xl text-gray-600">
						CMAI offers a structured suite of capacity-building programmes tailored to various
						experience levels—senior, mid, and junior professionals—as well as sector-specific
						modules. These trainings are designed to equip stakeholders with practical knowledge on
						climate change, carbon markets, ESG integration, and sustainable finance. We have
						conducted workshops for leading organizations like Indian Oil, NTPC, IIT Delhi, Ministry
						of Petroleum & Natural Gas (MoPNG), and Center for High Technology (CHT) among others.
					</p>
				</div>
				<div class="mx-auto bg-white shadow-md">
					<h2
						class="bg-light text-dblue relative inline-block w-full border-b-2 border-dotted border-sky-800 px-4 py-2 text-xl font-bold"
					>
						Program Structure:
					</h2>
					<div class="space-y-4">
						<!-- Event 1 -->
						<div class="    mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								1. <b>Senior Level:</b> Mastering Climate Change, Carbon Accounting, and ESG Integration
								(3 Days)
							</p>
						</div>

						<!-- Event 2 -->
						<div class="   mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								2. <b>Mid Level:</b> Carbon Market and Offset Management (2 Days)
							</p>
						</div>

						<!-- Event 3 -->
						<div class="   mb-0 border-b-2 border-dotted border-gray-200 p-3">
							<p class="text-xl text-gray-600">
								3. <b>Junior Level:</b> Demystifying Net Zero (1 Day) All programs are available in both
								online and offline formats.
							</p>
						</div>
					</div>
				</div>
				<p class="mb-4 text-xl text-gray-600">
					We also deliver specialized workshops for hard-to-abate sectors such as Oil & Gas, and for
					professionals in sustainability and environmental management.
				</p>
				<p class="mb-4 text-xl text-gray-600">
					CMAI has conducted high-impact training programs and joint certification courses in
					partnership with IIM Mumbai, Indian Institute of Corporate Affairs, IIT Kharagpur and
					others. Please find below the list of our capacity building programmes:-
				</p>
				<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 py-10">
					{#each events as { title, date }}
						<div
							class="event-card rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
						>
							<h2 class="text-xl font-semibold text-gray-900">{title}</h2>
							<p class="mt-2 text-gray-600">{date}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Main Content (larger) -->
			<div class="space-y-3 border-l-1 border-solid border-gray-200 pl-3 md:col-span-3">
				<div class="relative flex w-full items-center justify-center border border-gray-200 p-4">
					<div class="mx-auto max-w-lg text-center">
						<h1 class="text-dblue mb-5 text-2xl font-bold">Become a member now!</h1>

						<button
							type="submit"
							class="border-text-secondary w-4xs border-text-dblue bg-dblue w-full cursor-pointer px-2 py-2 text-base text-xl text-white transition-all duration-300 ease-in-out hover:border-orange-700 hover:bg-orange-700 hover:text-white"
						>
							Join Now
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* Optional custom styles for card hover or other */
	.event-card:hover {
		transform: translateY(-10px);
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
	}
</style>
