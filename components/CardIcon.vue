<template>
  <div
    class="w-full flex flex-row gap-3 sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 cursor-pointer"
  >
    <slot />
    <div class="text-left">
      <div class="-mt-1 font-sans text-sm font-semibold">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
