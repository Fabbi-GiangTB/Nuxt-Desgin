<template>
  <header :class="`relative bg-white z-20 md:bg-transparent  w-full h-full ${showResource?'md:bg-white':''}`">
    <div class="px-2">
      <ul class="w-full bg-white flex menu--collapsed justify-between md:hidden h-16 items-center ">
        <MenuItem class="menu__item  md:flex border-none">
          <svg @click="expanded=!expanded" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"/>
          </svg>
        </MenuItem>
        <MenuItem class="menu__item  md:flex border-none">
          <img src="~assets/img/logo.svg" class="w-8 h-8" alt="">
        </MenuItem>
        <MenuItem class="menu__item  md:flex border-none">Sign In</MenuItem>
      </ul>
      <div
          :class="`${expanded?'':'hidden'} max-w-[1200px] md:h-[80px] bg-white md:bg-transparent mx-auto md:flex justify-between items-center`">
        <ul class="menu ">
          <MenuItem class="menu__item border-none menu__item--hidden md:flex">
            <img src="~assets/img/logo.svg" class="w-8 h-8" alt="">
          </MenuItem>
          <MenuItem class="menu__item">Design</MenuItem>
          <MenuItem class="menu__item">Collaborate</MenuItem>
          <MenuItem class="menu__item">Apps</MenuItem>
          <MenuItem class="menu__item" hasChildren :items="menuItems" :handle="handle">Resources</MenuItem>
          <MenuItem class="menu__item">Pricing</MenuItem>
        </ul>
        <ul class="md:flex md:gap-4 text-base items-center">
          <MenuItem class="menu__item--hidden md:flex menu__item">Sign In</MenuItem>
          <MenuItem class="menu__item menu__item-button">
            <div
                class="w-full text-center bg-gray-900 text-white md:px-4 py-3 md:py-5 h-8 flex items-center justify-center rounded-md text-sm md:text-[15px]">
              Get started for free
            </div>
          </MenuItem>
        </ul>
      </div>
    </div>
    <div v-if="showResource"
         class="hidden md:block menuAnimation bg-transparent w-full absolute left-1/2 -translate-x-1/2">
      <div class="w-full bg-white">
        <div class="h-[1px] max-w-[1200px] mx-auto bg-gray-200"></div>
        <div class="max-w-[1200px]  bg-white md:bg-transparent mx-auto md:flex justify-between items-center">
          <div class="grid grid-cols-2 w-full">
            <MenuMore label="Get Help" img="assets/img/chat.png"
                      description="Read our documentation and FAQs, or get in touch."/>
            <MenuMore label="Extensions" img="assets/img/giftbox.png"
                      description="Do even more with Assistants, plugins and integrations."/>
            <MenuMore label="Events & Meetups" img="assets/img/event.png"
                      description="Discover and join your local Sketch community."/>
            <MenuMore label="Blog" img="assets/img/blog.png"
                      description="Get updates, articles and insights from the team."/>
            <div class="mx-8 mr-16 bg-gray-100 py-8 px-16 my-4 rounded-lg text-gray-500 font-sm">
              <div class="mx-auto text-center"> There are no upcoming events.</div>
              <div class="mx-auto text-center">Want to host your own event? Get in touch.</div>
            </div>
            <div class="ml-8 font-normal py-4 my-4 rounded-lg">
              <ul>
                <li> Introducing Appibilities: How Marianka Cilliers of Glucode is helping ..</li>
                <li> New in the Mac app: Quality of life improvements and bug fixes</li>
                <li> How to design eye-catching widget backgrounds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="home"></div>
    <div>
      <NuxtPage/>
    </div>
  </main>
  <footer>

  </footer>
  <div v-if="showResource||expanded"
       class="fixed z-10 top-0 left-0 w-full h-[100vh] bg-[(255,255,255,0.55)] backdrop-blur-md"></div>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";

const menuItems = [{label: 'Get Help'}, {label: 'Extensions'}, {label: 'Event & Meetups'}, {label: 'Blog'}];
const showResource = ref(false);
const handle = (resource) => {
  showResource.value = resource;
}

const expanded = ref<boolean>(false);

</script>
