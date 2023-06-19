<template>
    <div class="flex-col container">



      <h1>This is Dashboard page </h1>
  <button type="button" class="bg-indigo-800 text-white py-2.5 px-4" @click="logout">Logout</button>
    <router-link to="/" class="ml-2 bg-emerald-500 text-white py-2.5 px-4">Home</router-link>
    </div>
</template>

<script>
import useAuth from "@/composables/auth";

const { logout } = useAuth()

import axios from 'axios';

export default {
  data() {
    return {
      responseData: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.post('https://blog.test/api/login')
          .then(response => {
            this.responseData = response.data;
            console.log(this.responseData);
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
}

</script>