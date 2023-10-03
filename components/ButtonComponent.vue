<template>
  <button
    @click="clickHandler"
    :disabled="disabledHandler"
    class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    clickHandler: {
      type: Function,
      required: true,
    },
    disabledHandler: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
