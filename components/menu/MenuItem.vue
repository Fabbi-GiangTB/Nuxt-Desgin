<script setup lang="ts">
import {ref} from "@vue/reactivity";
import {onMounted} from "@vue/runtime-core";


enum ExpandStyle {
  active = 'menu__item--active',
  inactive = 'menu__item--inactive',
  free = '',
}

interface MenuItem {
  class?: string;
  label?: string;
  hasChildren?: boolean;
  items?: MenuItem[];
}

const props = defineProps<MenuItem>();
const active = ref<boolean>(false);
const div = ref<HTMLDivElement>(null);
const style = ref<string>('');

function closeMenu(): void {
  if (active.value) {
    style.value = ExpandStyle.inactive;
    active.value = false;
  } else {
    style.value = ExpandStyle.free;
  }
}

function handleClick(): void {
  active.value = !active.value;
  style.value = active.value ? ExpandStyle.active : ExpandStyle.inactive;
}

</script>

<template>
  <li :class="`${props.class} ${style}`"
      @click="handleClick"
      ref="div"
      v-clickOutSide="closeMenu"
  >
    {{ props.label }}
    <slot/>
    <svg v-if="props.hasChildren" xmlns="http://www.w3.org/2000/svg" class="icon icon-active" fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
    </svg>
  </li>
  <template v-if="props.hasChildren&&active">
    <div class="block md:hidden pl-3">
      <ul class="menu">
        <MenuItem v-for="item in props.items" class="menu__item" :label="item.label">
        </MenuItem>
      </ul>
    </div>

  </template>


</template>
