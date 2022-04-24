<script setup lang="ts">
interface MenuMoreProps {
  label: string;
  img: string;
  description: string;
}

const props = defineProps<MenuMoreProps>();


</script>

<template>
  <div class="flex pt-8">
    <div class="w-[44px] h-[44px] flex">
      <img :src="props.img" alt="" class="w-8 h-8 mx-auto my-auto">
    </div>
    <div class="flex-1 tracking-wide">
      <div class="font-medium text-gray-700 flex ">
        <span class="my-auto flex items-center">{{ props.label }}</span>
        <span class="mt-1 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
</svg></span>
      </div>
      <div class="font-normal text-sm text-gray-500">{{ props.description }}</div>
    </div>
  </div>

</template>
