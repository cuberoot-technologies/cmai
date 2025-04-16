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
  

    <!-- Membership Benefits Section -->
    <section class="container mx-auto p-8 max-w-6xl">
        <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 class="text-2xl font-semibold mb-4">Membership Benefits</h2>

            <div class="space-y-6">
                <!-- Policy Advocacy Section -->
                <div>
                    <h3 class="text-xl font-semibold mb-2">Policy Advocacy to Government and Regulators</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Representations on behalf of the industry</li>
                        <li>Get recognized as the representative body of the concerned sector among all the stakeholders.</li>
                    </ul>
                </div>

                <!-- Networking Opportunities Section -->
                <div>
                    <h3 class="text-xl font-semibold mb-2">Networking Opportunities with Corporate Leaders, Government Authorities, and International Fora</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Call on meetings</li>
                        <li>Interactive sessions</li>
                    </ul>
                </div>

                <!-- Advisory Services Section -->
                <div>
                    <h3 class="text-xl font-semibold mb-2">Advisory Services to Business</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Circulars on policy updates, Govt notifications, govt schemes, etc.</li>
                        <li>Newsletters on industry updates/sectoral information</li>
                        <li>Share and develop robust mitigation and adaptation strategies</li>
                    </ul>
                </div>

                <!-- Capacity Building Workshops Section -->
                <div>
                    <h3 class="text-xl font-semibold mb-2">Capacity Building Workshops and Trainings for Stakeholders</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Conference/seminars/webinars</li>
                        <li>Training programs</li>
                        <li>Exhibitions</li>
                    </ul>
                </div>

                <!-- Knowledge Papers Section -->
                <div>
                    <h3 class="text-xl font-semibold mb-2">Knowledge Papers and Research Reports</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Research Studies</li>
                        <li>Knowledge Reports</li>
                        <li>Policy Papers</li>
                        <li>Monthly Newsletter</li>
                    </ul>
                </div>

                <!-- Other Benefits Section -->
                <div>
                    <h3 class="text-xl font-semibold mb-2">Other Benefits:</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>General Membership access of strategic partners - ISAFA, IEPRA, ICCA & ICLA</li>
                        <li>Branding in all the events organized by the association</li>
                        <li>Opportunity to be the Chairperson/Co-Chairperson of different sub-committees</li>
                        <li>Opportunity to be the keynote speaker in the events</li>
                        <li>Special mention on the website of CMAI</li>
                        <li>Social Media recognition</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Membership Registration Form -->
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
