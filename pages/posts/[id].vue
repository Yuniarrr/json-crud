<template>
  <div class="flex flex-col items-start justify-center gap-5 m-5">
    <NuxtLayout name="breadcrumb" />

    <!-- card start -->
    <div
      class="self-center w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow lg:w-1/3 sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {{ post.title }}
      </h5>
      <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        {{ post.body }}
      </p>
      <div
        class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"
      >
        <!-- edit button -->
        <card-icon title="Edit" @click="store.editContentAlert(post.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </card-icon>

        <!-- delete button -->
        <card-icon title="Delete" @click="store.deleteAlert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </card-icon>
      </div>
    </div>
    <!-- card end -->
  </div>
</template>

<script>
import CardIcon from "~/components/CardIcon.vue";
import { useStore } from "~/stores/store";

export default {
  components: { CardIcon },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  computed: {
    // Computed Properties
    post() {
      return this.store.posts.find((post) => post.id == this.$route.params.id);
    },
  },
  mounted() {
    if (this.store.posts.length === 0) {
      this.store.getPosts();
    }
  },
};
</script>
