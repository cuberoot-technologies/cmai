<script>
    let name = '';
    let designation = '';
    let organization = '';
    let email = '';
    let phone = '';

    const handleSubmit = () => {
        console.log({
            name,
            designation,
            organization,
            email,
            phone
        });
        // You can handle form submission logic here (e.g., send data to the backend)
    };
</script>

<main class="bg-gray-100">
   

    <!-- Membership Eligibility and Documents Section -->
    <section class="container mx-auto p-8 max-w-6xl">
        <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 class="text-2xl font-semibold mb-4">Eligible Entities</h2>
            <ul class="list-disc pl-5 space-y-2 text-lg">
                <li>MNCs with registered offices in India and as well as overseas</li>
                <li>Public Limited Companies, Public Sector/State Government Undertakings</li>
                <li>Private Limited Companies</li>
                <li>Partnership Firms</li>
                <li>Proprietorship Firms</li>
                <li>Non-profit organizations, etc.</li>
            </ul>
        </div>

        <!-- Documents Required Section -->
        <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 class="text-2xl font-semibold mb-4">Documents Required for Membership</h2>
            <ul class="list-disc pl-5 space-y-2 text-lg">
                <li>Memorandum and Articles of Association or Bye Laws or Constitution or Partnership Deed along with the Latest Annual Report</li>
                <li>Annual Accounts/Latest Balance Sheet, (CA Certified)</li>
                <li>List of Directors, Partners with full addresses and details of Directorships/business interests, etc. in any other Companies</li>
                <li>Any other brochure/literature about the organization, as required</li>
                <li>GSTIN Certificate copy, etc.</li>
            </ul>
        </div>

        <!-- Registration Form -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold mb-4">Become a Member Now!</h3>
            <p class="text-lg mb-4">Accelerate your Net Zero journey with CMAI. Register below to express your interest in joining CMAI.</p>

            <form on:submit|preventDefault={handleSubmit} class="space-y-4">
                <div>
                    <label for="name" class="block text-lg font-semibold">Name</label>
                    <input type="text" id="name" bind:value={name} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                </div>

                <div>
                    <label for="designation" class="block text-lg font-semibold">Designation</label>
                    <input type="text" id="designation" bind:value={designation} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                </div>

                <div>
                    <label for="organization" class="block text-lg font-semibold">Organization</label>
                    <input type="text" id="organization" bind:value={organization} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                </div>

                <div>
                    <label for="email" class="block text-lg font-semibold">Email ID</label>
                    <input type="email" id="email" bind:value={email} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                </div>

                <div>
                    <label for="phone" class="block text-lg font-semibold">Phone Number</label>
                    <input type="tel" id="phone" bind:value={phone} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                </div>

                <div class="text-center">
                    <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">Submit</button>
                </div>
            </form>

            <p class="mt-4 text-center text-gray-500">Once registered, our team will contact you within 24 hours.</p>
        </div>
    </section>
</main>
