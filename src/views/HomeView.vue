<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {Navbar},
  data() {
    return {
      currentUser: {},
      token: localStorage.getItem('token')
    }
  },
  methods: {

  },
  mounted() {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
    this.getEmployees()
    axios.get('api/user').then((response) => {
      this.currentUser = response.data
    }).catch((errors) => {
      console.log(errors)
    })
  }
}
</script>

<template>
  <main>
    <Navbar/>
    <div class="flex flex-col container sm:flex-row mt-2">
      <h1>This is home page {{ currentUser.first_name}}</h1>
    </div>
  </main>
</template>
