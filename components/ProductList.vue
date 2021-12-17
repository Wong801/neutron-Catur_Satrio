<template>
  <div class="flex flex-col lg:flex-row gap-y-6 justify-evenly my-8 lg:my-20 px-8 lg:p-0">
    <ProductDetail v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters['api/product/products'] 
    }
  }
}
</script>

<style>

</style>