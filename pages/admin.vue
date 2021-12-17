<template>
  <div class="grid grid-cols-2 bg-green-100 bg-opacity-40 gap-8 px-10 py-8">
    <div>
      <h1>Admin</h1>
      <p>Welcome, <button>Logout</button></p>
      
    </div>
    <div>
      <h1>Users</h1>
      <Chart :chartOptions="usersOption" />
    </div>
    <div>
      <h1>Product</h1>
      <Chart :chartOptions="produtcsOption" />
    </div>
    <div>
      <h1>Income and Outcome</h1>
      <Chart :chartOptions="incomeOption" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
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
}
</script>

<style>

</style>