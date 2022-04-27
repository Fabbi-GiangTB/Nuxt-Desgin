<script setup lang="ts">
import Carousel from "~/components/carousel/carousel.vue";
definePageMeta({
  middleware: 'named-test'
})
</script>

<template>
  <div class="max-w-[1200px] bg-transparent mx-auto">
    <div class="text-8xl font-black"> Everything you</div>
    <div class="text-8xl font-black"> need to</div>
    <div class="mr-96 text-2xl font-normal leading-7 my-4 text-gray-800">Sketch gives you all the tools you need for a
      truly collaborative design process. From early ideas to
      pixel-perfect artwork, playable prototypes and developer handoff. It all starts here.
    </div>
    <MenuItem class="menu__item menu__item-button">
      <div
          class="text-center tracking-wider bg-gray-900 text-white md:px-4 py-3 md:py-6 h-8 flex items-center justify-center rounded-md text-sm md:text-base">
        Get started for free
      </div>
    </MenuItem>
  </div>
  <div class="w-full pt-8">
    <Carousel/>
  </div>
  <div class="pl-10 z-[9999] fixed">
    <NuxtLink to="/home">Home Page</NuxtLink>
  </div>
</template>
