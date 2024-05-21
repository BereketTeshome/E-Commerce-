<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <NuxtLink class="font-bold text-xl text-[#12B488]">AMBC</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #fff;
  background: #12b488;
  padding: 8px 12px;
  border-radius: 6px;
}
</style>
