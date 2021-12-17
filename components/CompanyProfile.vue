<template>
  <div class="bg-green-100 bg-opacity-50 py-8 px-6 lg:px-8">
    <h4 class="text-xl font-bold capitalize text-center pb-4">Tentang Kami</h4>
    <div v-for="(content, i) in contents" :key="i" class="my-12">
      <div :class="content.img && i % 2 === 0 ? 'flex flex-col lg:flex-row-reverse gap-x-8' : content.img ? 'flex flex-col lg:flex-row gap-x-8': ''">
        <img v-if="content.img" :src="content.img" alt="" class="mx-auto lg:mx-0">
        <p class="text-lg leading-relaxed">{{ content.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contents() {
      return this.$store.state.api.content.about
    }
  }
}
</script>

<style>

</style>