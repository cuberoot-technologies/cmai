<script>
    const apiURL = import.meta.env.VITE_API_URL;
  
    export let isOpen = false;
    export let onClose = () => {};
    export let source = '';
  
    let name = '';
    let email = '';
    let phone = '';
    let designation = '';
    let organization = '';
    let description = '';
  
    let successMessage = '';
  
    const resetForm = () => {
      name = '';
      email = '';
      phone = '';
      designation = '';
      organization = '';
      description = '';
    };
  
    const handleSubmit = async () => {
      // Validate required fields
      if (!name || !email || !phone || !designation || !organization) {
        successMessage = 'Please fill in all required fields.';
        return;
      }
  
      const formData = {
        name,
        email,
        phone,
        designation,
        organization,
        source,
        description // optional
      };
  
      try {
        const res = await fetch(`https://cms.cmai.wat-s.app/api/collections/joi_register_form/records`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
  
        if (!res.ok) throw new Error('Failed to submit form');
  
        successMessage = 'Once registered our team will contact you in the next 24 hours.';
        resetForm();
      } catch (err) {
        console.error('Submission failed:', err);
        successMessage = 'There was an error submitting the form.';
      }
    };
  </script>
  
  {#if isOpen}
    <div class="fixed inset-0 bg-[#000000d4] bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 class="text-xl font-bold mb-4 text-center w-full">Fill the Form</h2>
  
        <input type="text" bind:value={name} placeholder="Your Name" class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600 mt-3" />
        <div class="flex justify-end gap-2 ">

        <input type="email" bind:value={email} placeholder="Your Email" class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600 mt-3" />
        <input type="tel" bind:value={phone} placeholder="Phone" class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600 mt-3" />
        </div>
        <div class="flex justify-end gap-2 ">

        <input type="text" bind:value={designation} placeholder="Designation" class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600 mt-3" />
        <input type="text" bind:value={organization} placeholder="Organization" class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600 mt-3" />
        </div>
        <textarea bind:value={description} placeholder="Any Additional Comments" class="w-full border-gray-200 bg-white p-3 text-xl text-gray-600 shadow-xs placeholder:text-gray-600 mt-3" />
  
        {#if successMessage}
          <p class="text-green-600 text-base mb-3">{successMessage}</p>
        {/if}
  
        <div class="flex justify-end gap-2 mt-4">
          <button class="bg-gray-400 w-full cursor-pointer px-2 py-2 text-xl text-white " on:click={onClose}>Cancel</button>
          <button class="bg-dblue w-full cursor-pointer px-2 py-2 text-xl text-white transition-all duration-300 ease-in-out hover:bg-orange-700" on:click={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  {/if}
  