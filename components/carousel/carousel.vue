<template>
  <div class="flex items-center justify-center relative">
    <div class="w-full mx-auto">
      <div v-for="(item, index) in images"
           :class="`absolute w-full flex left-1/2 -translate-x-1/2`"
           :style="`z-index: ${(5-Math.abs(index-currentIndex))*10}`">
        <div class="relative mx-auto my-auto" :style="`filter:blur(${Math.abs(index-currentIndex)*2}px);`">
          <img :class="`bg-cover relative w-[1000px] shadow-2xl transition-all ease-in-out duration-300`"
               :style="`transform: translateX(${(index-currentIndex)*120*(100-Math.abs(currentIndex- index)*12)/100}px) scaleY(${1- Math.abs(index-currentIndex)*0.2})`"
               :key="index" :src="item">
        </div>

      </div>
      <!--      <img src="assets/img/handoff-visual-2@2x.png">-->
    </div>
    <div class="absolute z-[60] flex w-[1200px] justify-between top-[300px]">
      <div @click="prev" class="w-16 h-16 flex bg-gray-900 cursor-pointer rounded-full">
        <button class="m-auto text-white">prev</button>
      </div>
      <div @click="next" class="w-16 h-16 flex bg-gray-900 cursor-pointer rounded-full">
        <button class="m-auto text-white">next</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";

export interface CarouselProps {
  images?: string[]
}

const images = [
  'assets/img/carousel3.png',
  'assets/img/carousel4.png',
  'assets/img/carousel3.png',
  'assets/img/carousel4.png',
]

const currentIndex = ref(0);
const props = defineProps<CarouselProps>();
const next = () => {
  if (currentIndex.value === images.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
  console.log('curent index', currentIndex);

}
const prev = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = images.length - 1;
  } else {
    currentIndex.value--;
  }
  console.log('curent index', currentIndex);
}
</script>

