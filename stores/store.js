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
    deleteAlert(id_post, id_item) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this post!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it!',
        preConfirm: async () => {
          return fetch(`${BASE_URL}/posts/${id_post}`, {
            method: 'DELETE',
          })
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
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
          this.posts.splice(id_item, 1);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'Your post is safe :)', 'error');
        }
      });
    },
    editTitleAlert(id_post, id_item) {
      const title = this.posts[id_item].title;
      Swal.fire({
        title: `${title}`,
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Save',
        showLoaderOnConfirm: true,
        preConfirm: async (data) => {
          return fetch(`${BASE_URL}/posts/${id_post}`, {
            method: 'PATCH',
            body: JSON.stringify({
              title: data,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
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
            title: `${result.value.title}`,
            icon: 'success',
          });
          this.posts[id_item].title = result.value.title;
        }
      });
    },
    editContentAlert(id_post) {
      const post = this.posts.find((post) => post.id === id_post);
      Swal.fire({
        title: 'Edit Post',
        html: `
          <label for="title">Title</label>
          <br/>
          <input id="title" class="swal2-input" value="${post.title}">
          <br/>
          <label for="body">Body</label>
          <br/>
          <input id="body" class="swal2-input" value="${post.body}">
        `,
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Save',
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const title = Swal.getPopup().querySelector('#title').value;
          const body = Swal.getPopup().querySelector('#body').value;

          return fetch(`${BASE_URL}/posts/${id_post}`, {
            method: 'PATCH',
            body: JSON.stringify({
              title: title,
              body: body,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
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
            title: `${result.value.body}`,
            icon: 'success',
          });
          this.posts.find((post) => post.id === id_post).title =
            result.value.title;
          this.posts.find((post) => post.id === id_post).body =
            result.value.body;
        }
      });
    },
  },
});
