<script>
    import { onMount } from 'svelte';
    import KeenSlider from 'keen-slider';
    import 'keen-slider/keen-slider.min.css';
  
    let sliderRef;
    let keenSliderInstance;
  
    onMount(() => {
      if (!sliderRef) {
        console.error('Slider element not found');
        return;
      }
  
      keenSliderInstance = new KeenSlider(sliderRef, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 2,
          spacing: 16,
        },
        breakpoints: {
				'(min-width: 640px)': { slides: { perView: 4, spacing: 16 } },
				'(min-width: 1024px)': { slides: { perView: 4, spacing: 24 } }
			}
      });
    });
  
    function prevSlide() {
      keenSliderInstance?.prev();
    }
  
    function nextSlide() {
      keenSliderInstance?.next();
    }
  </script>
  
  <section class="bg-gray-50">
    <div class="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 xl:py-24">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
        <div class="max-w-xl text-center sm:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Don't just take our word for it...
          </h2>
          <p class="mt-4 text-gray-700">
            Hear what our customers have to say about our services.
          </p>
  
          <div class="hidden lg:mt-8 lg:flex lg:gap-4">
            <button
              aria-label="Previous slide"
              on:click={prevSlide}
              class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              ◀️
            </button>
  
            <button
              aria-label="Next slide"
              on:click={nextSlide}
              class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              ▶️
            </button>
          </div>
        </div>
  
        <div class="-mx-6 lg:col-span-2 lg:mx-0">
          <div bind:this={sliderRef} class="keen-slider">
            <div class="keen-slider__slide">
              <blockquote class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12">
                <p>⭐ ⭐ ⭐ ⭐ ⭐ "Excellent Service! Highly recommended."</p>
              </blockquote>
            </div>
  
            <div class="keen-slider__slide">
              <blockquote class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12">
                <p>⭐ ⭐ ⭐ ⭐ ⭐ "A fantastic experience! Great support."</p>
              </blockquote>
            </div>
  
            <div class="keen-slider__slide">
              <blockquote class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12">
                <p>⭐ ⭐ ⭐ ⭐ "Very good! Will use again."</p>
              </blockquote>
            </div>
          </div>
  
          <div class="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              on:click={prevSlide}
              class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              ◀️
            </button>
  
            <button
              aria-label="Next slide"
              on:click={nextSlide}
              class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              ▶️
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  