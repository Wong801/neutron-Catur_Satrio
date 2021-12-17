<template>
  <div>
    <div class="bg-green-200 text-center font-bold text-xl pb-4 pt-8 mb-10">  
      <h1>Login</h1>
    </div>
    <form class="flex flex-col w-full text-center lg:w-1/4 h-[60vh] lg:h-auto justify-between lg:justify-start lg:gap-y-4 py-10 px-6">
      <div class="flex flex-col gap-x-1">
        <label for="username">Email or Username:</label>
        <input v-model="username" class="border border-green-300 px-2 py-1 rounded-lg" type="text" name="username" placeholder="JohnDoe@example.com">
      </div>
      <div class="flex flex-col gap-x-1">
        <label for="password">Password:</label>
        <input v-model="password" class="border border-green-300 px-2 py-1 rounded-lg" type="password" name="password" placeholder="Password">
      </div>
      <div class="w-full">
        <input class="w-full bg-green-400 text-white font-bold text-lg rounded-full py-2 cursor-pointer" type="submit" value="Login" @click.prevent="login(username, password)">
        <p class="text-sm">Don't have account? <nuxt-link to="/register" class="underline">Register</nuxt-link></p>
        <p class="text-sm">Back to <nuxt-link to="/" class="underline">Home</nuxt-link></p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: "empty",
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.api.user.jwt) {
      return redirect('/admin')
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login(username, password) {
      if(!username) {
        return this.$toast.error('Please fill username field')
      }
      if(!password) {
        return this.$toast.error('Please fill password field')
      }
      const payload = {
        username, 
        password
      }
      this.$store.dispatch('api/user/login', payload)
      const jwt = this.$store.state.api.user.jwt
      this.$cookies.set('jwt', jwt)
      this.$router.push('/admin')
      this.$toast.success('Successfully logged in')
    }
  }
}
</script>

<style>

</style>