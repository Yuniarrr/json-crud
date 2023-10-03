<template>
  <div class="m-5 flex flex-col gap-5">
    <p>Template Refs</p>
    <div class="border-y-2">
      <div class="my-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your Name</label
        >
        <div class="flex flex-row justify-center items-center gap-5 lg:w-1/3 w-full">
          <input
            type="text"
            id="email"
            ref="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your name"
          />
          <button
            @click="focusInput"
            type="button"
            class="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
          >
            Focus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // template refs
    focusInput() {
      this.$refs.name.focus();
    },
  },
};
</script>
