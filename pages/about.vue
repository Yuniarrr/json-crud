<template>
  <div class="m-5 flex flex-col items-center justify-center gap-5">
    <div
      class="block p-6 lg:w-1/2 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Asisten</th>
              <th scope="col" class="px-6 py-3">NRP</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="(item, index) in store.asist"
              :key="index"
              ref="asist"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ item.name }}
              </th>
              <td class="px-6 py-4">{{ item.nrp }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
  // template refs
  mounted() {
    console.log(this.$refs.asist);
  },
};
</script>
