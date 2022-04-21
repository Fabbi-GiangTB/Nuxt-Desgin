<template>
  <header class="bg-white md:bg-transparent w-full h-full">
    <div class="px-2">
      <ul class="w-full bg-white flex menu--collapsed justify-between md:hidden h-16 items-center ">
        <MenuItem class="menu__item  md:flex border-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"/>
          </svg>
        </MenuItem>
        <MenuItem class="menu__item  md:flex border-none">
          <img src="~assets/img/logo.svg" class="w-8 h-8">
        </MenuItem>
        <MenuItem class="menu__item  md:flex border-none">Sign In</MenuItem>
      </ul>
      <div class="max-w-[1200px]  md:h-[80px] bg-white md:bg-transparent mx-auto md:flex justify-between items-center ">

        <ul class="menu ">
          <MenuItem class="menu__item border-none menu__item--hidden md:flex">
            <img src="~assets/img/logo.svg" class="w-8 h-8">
          </MenuItem>
          <MenuItem class="menu__item">Design</MenuItem>
          <MenuItem class="menu__item">Collaborate</MenuItem>
          <MenuItem class="menu__item">Apps</MenuItem>
          <MenuItem class="menu__item" hasChildren :items="menuItems">Resources
          </MenuItem>
          <MenuItem class="menu__item">Pricing</MenuItem>
        </ul>
        <ul class="md:flex md:gap-4 text-base items-center">
          <MenuItem class="menu__item--hidden md:flex menu__item">Sign In</MenuItem>
          <MenuItem class="menu__item menu__item-button">
            <div class="w-full text-center bg-gray-900 text-white md:px-4 py-3 md:py-5 h-8 flex items-center justify-center rounded-md text-sm md:text-[15px]">
              Get started for free
            </div>
          </MenuItem>
        </ul>
      </div>
    </div>
  </header>
  <main class="home">
    <slot/>
  </main>
  <footer>

  </footer>
</template>

<script>
import MenuItem from "../components/menu/MenuItem";


export default {
  data() {
    return {
       menuItems: [{label: 'Get Help'},{label: 'Extensions'},{label: 'Event & Meetups'}, {label: 'Blog'}],
    }
  },
  components: {MenuItem}
}
</script>
