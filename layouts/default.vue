<template>
  <div class="container flex flex-col justify-between items-center min-h-screen">
    <nav class="bg-white border-gray-200 shadow-md dark:bg-gray-900 w-full">
      <div
        class="flex flex-wrap items-center justify-between max-w-screen-xl p-5 mx-auto"
      >
        <NuxtLink to="/" class="flex items-center font-semibold"
          >Pemrograman Web</NuxtLink
        >
        <div
          id="mega-menu"
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <MenuItems href="/" title="Home" />
            </li>
            <li>
              <MenuItems href="/refs" title="Refs" />
            </li>
            <li>
              <MenuItems href="/about" title="About" />
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="w-full flex-1">
      <!-- <Loader v-if="store.loading" /> -->
      <slot />
    </div>

    <footer class="bottom-0 w-full bg-white rounded-lg shadow dark:bg-gray-900">
      <div class="w-full max-w-screen-xl px-4 pb-6 mx-auto">
        <hr class="py-3 border-gray-300 sm:mx-auto dark:border-gray-700" />
        <span class="block text-sm text-center text-gray-500 dark:text-gray-400"
          >© 2023 <NuxtLink to="/" class="hover:underline">Pemrograman Web</NuxtLink>.
          Teknologi Informasi ITS.</span
        >
      </div>
    </footer>
  </div>
</template>

<script>
import { useStore } from "~/stores/store";

export default {
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
};
</script>
