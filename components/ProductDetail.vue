<template>
  <div>
    <div>
      <div class="rounded-t-lg text-xl font-bold px-8 py-6 bg-green-200 text-center">
        <h1>{{ product.title }}</h1>
      </div>
    </div>
    <div class="border rounded-b-xl px-8 pb-6">
      <ul class="my-6 leading-loose" v-for="(item, index) in product.desc" :key="index">
        <li>{{ item }}</li>
      </ul>
      <button class="bg-green-400 text-white text-center w-full rounded-full py-1 font-bold">
        Buy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {
          title: '',
          desc: []
        }
      }
    }
  }
}
</script>

<style>

</style>