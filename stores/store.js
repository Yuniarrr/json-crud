import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    loading: false,
    posts: [],
    asist: [
      {
        name: 'Midyanisa Yuniar',
        nrp: '5027211025',
      },
      {
        name: 'Reynold Putra Merdeka',
        nrp: '5027211034',
      },
      {
        name: 'Rifqi Akhmad Maulana',
        nrp: '5027211035',
      },
      {
        name: 'Wisnuyasha Faizal',
        nrp: '5027211036',
      },
      {
        name: 'Ahnaf Musyaffa',
        nrp: '5027211038',
      },
      {
        name: 'Moh. Sulthan Arief Rahmatullah',
        nrp: '5027211045',
      },
    ],
  }),
  getters: {},
  actions: {
    async getPosts() {
      this.loading = true;
      const posts = await $fetch(`${BASE_URL}/posts`, {
        lazy: true,
      }).catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: `${error.message}`,
          icon: 'error',
        });
      });
      this.posts = posts;
      this.loading = false;
    },
    deleteAlert() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this post!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'Your post is safe :)', 'error');
        }
      });
    },
    editAlert(id_post, id_item) {
      const title = this.posts[id_item].title;
      Swal.fire({
        title: `${title}`,
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          return fetch(`${BASE_URL}/posts/${id_post}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`);
            });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
          });
        }
      });
    },
  },
});
