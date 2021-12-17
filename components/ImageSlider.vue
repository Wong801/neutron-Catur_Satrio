<template>
  <div class="h-[15rem] lg:h-[40rem]">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i" class="image-container bg-no-repeat relative" :style="{backgroundImage: `url(${currentItem.img})`}">
        <div class="absolute px-4 lg:px-8 py-2 lg:py-6 bottom-0 text-white w-full bg-gradient-to-t from-black bg-opacity-60">
          <h1 class="text-lg lg:text-2xl">{{ currentItem.title }}</h1>
          <p class="text-xs lg:text-lg">{{ currentItem.desc }}</p>
        </div>
      </div>
    </transition-group>
    <a class="absolute left-0 top-0 h-[15rem] lg:h-[40rem] flex items-center px-6 text-white text-xl" href="#" @click="prev" >&#10094;</a>
    <a class="absolute right-0 top-0 h-[15rem] lg:h-[40rem] flex items-center px-6 text-white text-xl" href="#" @click="next" >&#10095;</a>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  data() {
    return {
      timer: null,
      currentIndex: 0
    };
  },

  computed: {
    items() {
      return this.$store.state.api.content.banners
    },
    currentItem() {
      return this.items[Math.abs(this.currentIndex) % this.items.length];
    }
  },

  mounted() {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },

    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
  z-index: 0;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.image-container {
  height:15rem;
  width:100%;
  background-size: 100% 15rem;
}

@media only screen and (min-width: 1024px) {
  .image-container {
    height:40rem;
    width:100%;
    background-size: 100% 40rem;
  }
}
</style>