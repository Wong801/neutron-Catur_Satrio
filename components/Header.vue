<template>
  <header v-if="!userData" class="w-full text-sm lg:text-base text-white bg-green-500 flex justify-between px-4 lg:px-10 fixed top-0 z-20 items-center">
    <div>
      <h1>Logo</h1>
    </div>
    <ul class="flex gap-x-4 w-auto lg:w-3/4">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
    <div class="flex gap-x-1 lg:gap-x-4">
      <nuxt-link to="/login" class="hover:bg-green-400 px-2 lg:px-4 py-2">
        Login
      </nuxt-link>
      <nuxt-link to="/register" class="hover:bg-green-400 px-2 lg:px-4 py-2 hidden lg:block">
        Register
      </nuxt-link>
    </div>
  </header>
  <header v-else class="w-full text-sm lg:text-base text-white bg-green-500 flex justify-end px-4 lg:px-10 sticky z-20 items-center">
    <div class="py-2 flex gap-x-4">
      <h4>Welcome, {{ userData.username }}</h4>
      <button class="underline" @click="logout()">Logout</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.state.helper.user.userData
    }
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

<style scoped>
.nuxt-link-exact-active {
  color: rgb(167, 243, 208);
}
</style>