<template>
  <div>
    <div class="bg-green-200 text-center font-bold text-xl pb-4 pt-8 mb-10">  
      <h1>Register</h1>
    </div>
    <form class="flex flex-col w-full text-center lg:w-max h-[60vh] lg:h-auto justify-between lg:justify-start lg:gap-y-4 py-10 px-6">
      <div class="flex flex-col gap-x-1">
        <label for="email">Email:</label>
        <input v-model="email" class="border border-green-300 px-2 py-1 rounded-lg" type="email" name="email" placeholder="JohnDoe@example.com" @input="validateEmail(email)" >
        <p v-if="invalidEmail" class="text-red-500 text-left">Invalid email</p>
      </div>
      <div class="flex flex-col lg:flex-row gap-x-2">
        <div class="flex flex-col gap-x-1">
          <label for="firstName">First Name:</label>
          <input v-model="firstName" class="border border-green-300 px-2 py-1 rounded-lg" type="firstName" name="email" placeholder="John">
        </div>
        <div class="flex flex-col gap-x-1">
          <label for="lastName">Last Name:</label>
          <input v-model="lastName" class="border border-green-300 px-2 py-1 rounded-lg" type="lastName" name="email" placeholder="Doe">
        </div>
      </div>
      <div class="flex flex-col gap-x-1">
        <label for="username">Username:</label>
        <input v-model="username" class="border border-green-300 px-2 py-1 rounded-lg" type="username" name="email" placeholder="Username">
      </div>
      <div class="flex flex-col gap-x-1">
        <label for="password">Password:</label>
        <input v-model="password" class="border border-green-300 px-2 py-1 rounded-lg" type="password" name="password" placeholder="Password" @input="checkPass(password)">
        <p v-if="invalidPassword" class="text-red-500 text-left">Password must contain at least 8 characters</p>
      </div>
      <div class="w-full">
        <input class="w-full bg-green-400 text-white font-bold text-lg rounded-full py-2 cursor-pointer" type="submit" value="Register" @click.prevent="register(email, firstName, lastName, username, password)">
        <p class="text-sm">Already have account? <nuxt-link to="/login" class="underline">Login</nuxt-link></p>
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
      email: '',
      firstName: '',
      lastName: '',
      username: '',
      passwrod: '',
      invalidEmail: false,
      invalidPassword: false
    }
  },
  methods: {
    validateEmail(email) {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.invalidEmail = false
      } else {
        this.invalidEmail = true
      }
    },
    checkPass(password) {
      if(password.length < 8) {
        this.invalidPassword = true
      } else {
        this.invalidPassword = false
      }
    },
    register(email, firstName, lastName, username, password) {
      for(const key in arguments) {
        if(!arguments[key]) {
          return this.$toast.error('Please fill all fields')
        }
      }
      return this.$toast.success('Registered!')
    }
  }
}
</script>

<style>

</style>