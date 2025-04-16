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
    <!-- Header Section -->


    <!-- Main Content Section -->
    <section class="container mx-auto p-8 max-w-6xl">
        <div class="bg-white p-6 rounded-lg shadow-lg ">
            <h2 class="text-2xl font-semibold mb-4">About Membership
            </h2>
            <p class="text-lg mb-4">
                The Carbon Markets Association of India (CMAI) works to accelerate the Net Zero Transition of India and the World by facilitating collaboration among stakeholders, including the government, industry, and civil society.
            </p>

            <h3 class="text-xl font-semibold mb-2">Major Objectives of Membership:</h3>
            <ul class="list-disc pl-5 mb-4">
                <li>Develop a resilient carbon market that is inclusive yet dynamic so that a net-zero future can be accomplished sooner than anticipated.</li>
                <li>Encourage industry participation in policy advocacy and the development of regulatory frameworks to support the expansion of India's carbon credit market.</li>
                <li>Bring together the entire industry for a shared goal of developing strong policy guidelines and frameworks for the country's carbon market.</li>
                <li>Suggest industries for cutting-edge green technology interventions to promote rapid market expansion and support the sustainable development of the economy and the market.</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Administrative Measures:</h3>
            <ul class="list-disc pl-5 mb-4">
                <li>Quarterly meetings of the Executive, Managing Committee, and reporting thereof.</li>
                <li>Call on meetings / interactive sessions with Government officials, policymakers, and international institutions/diplomats.</li>
                <li>Regular representation to government bodies and institutions to develop a holistic carbon market in India.</li>
                <li>Electronic circulation of updates.</li>
                <li>Formation of Expert Committees / advisory forums if required.</li>
                <li>Regular programs such as roundtables, seminars, webinars, and workshops.</li>
            </ul>

            <!-- Membership Registration Form -->
            <div class="mt-8">
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
                        <button type="submit" class="bg-dblue text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">Submit</button>
                    </div>
                </form>

                <p class="mt-4 text-center text-gray-500">Once registered, our team will contact you within 24 hours.</p>
            </div>
        </div>
    </section>
</main>
