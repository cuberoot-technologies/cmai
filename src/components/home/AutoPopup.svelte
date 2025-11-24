<script>
    export let isOpen = false;
    export let onClose = () => {};
</script>

{#if isOpen}
<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h2 class="text-xl font-bold mb-2">Welcome to Our Website</h2>
        <p class="mb-4">This popup shows only one time.</p>

        <button
            class="bg-blue-600 text-white px-4 py-2 rounded"
            on:click={onClose}
        >
            Close
        </button>
    </div>
</div>
{/if}
