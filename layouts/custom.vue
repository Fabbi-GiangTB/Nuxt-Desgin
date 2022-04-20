<template>
  <header>
    <ul class="w-full bg-white flex justify-between md:hidden">
      <li class="">a</li>
      <li class="">b</li>
      <li class="">c</li>
    </ul>
    <div class="max-w-[1200px]  md:h-[80px] bg-white md:bg-transparent mx-auto md:flex justify-between items-center ">

      <ul class="menu ">
        <li class="menu__item border-none menu__item--hidden md:block">icon</li>
        <li class="menu__item">Design</li>
        <li class="menu__item">Collaborate</li>
        <li class="menu__item">Apps</li>
        <li class="menu__item">Resources
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-active" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </li>
        <li class="menu__item">Pricing</li>
        <li class="menu__item md:hidden">
          <div class="">
            Get started for free
          </div>
        </li>
      </ul>
      <ul class="menu">
        <li class="menu__item">Sign In</li>
        <li class="menu__item menu__item--hidden md:flex">
          <div class="">
            Get started for free
          </div>
        </li>
      </ul>
    </div>
  </header>
  <main class="home">
  <slot/>
  </main>
  <footer>

  </footer>
</template>

<script>

</script>
