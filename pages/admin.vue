<template>
  <div v-if="userData" class="lg:grid grid-cols-2 bg-green-100 bg-opacity-40 gap-8 px-10 py-8">
    <div class="flex gap-x-10">
      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" class="rounded-full w-1/2 h-1/2 lg:w-auto lg:h-auto">
      <div class="py-10">
        <h1 class="font-bold text-2xl">Welcome, {{ userData.username }}</h1>
        <button class="underline" @click="logout()">Logout</button>
      </div>
    </div>
    <div>
      <h1>Users</h1>
      <Chart :chart-options="usersOption" />
    </div>
    <div>
      <h1>Product</h1>
      <Chart :chart-options="produtcsOption" />
    </div>
    <div>
      <h1>Income and Outcome</h1>
      <Chart :chart-options="incomeOption" />
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    userData() {
      return this.$store.state.helper.user.userData
    },
    usersOption() {
      const users = this.$store.state.api.data.users
      return { series: users }
    },
    produtcsOption() {
      const products = this.$store.state.api.data.products
      return { series: products }
    },
    incomeOption() {
      const income = this.$store.state.api.data.income
      return { series: income }
    }
  },
  mounted() {
    const jwt = this.$store.state.api.user.jwt
    this.$store.dispatch('helper/user/decodeToken', jwt)
  },
  methods: {
    logout() {
      this.$store.commit('api/user/setToken', null)
      this.$router.push('/')
      this.$toast.success('Logged out')
    }
  }
}
</script>

<style>

</style>