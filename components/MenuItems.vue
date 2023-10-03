<template>
  <NuxtLink
    :to="href"
    class="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-green-500 md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700"
    :class="isActive() ? 'text-green-500' : 'text-slate-700'"
    >{{ title }}</NuxtLink
  >
</template>

<script>
// :class="isActive() ? 'text-green-500' : 'text-slate-700'"
// :class="isActive"
// :class="{
//       'text-green-500': isActive(),
//       'text-slate-700': !isActive(),
//     }"

export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
  methods: {
    isActive() {
      return this.href == this.route.path ? true : false;
    },
  },
  computed: {
    // Computed Properties
    // isActive() {
    //   return this.href == this.route.path ? "text-green-500" : "text-slate-700";
    // },
  },
};
</script>
