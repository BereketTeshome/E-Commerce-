<template>
  <div class="flex gap-20 items-center px-6">
    <div>
      <h2>Welcome To Our E-Commerce Website</h2>
      <p class="text-gray-600 italic">
        We believe in bringing you the best in quality, variety, and value.
        Whether you're looking for the latest fashion trends, must-have gadgets,
        or home essentials, we've got you covered. Our curated collections are
        designed to inspire and delight, making your shopping experience both
        enjoyable and effortless.
      </p>
      <NuxtLink to="/products"><button class="btn">Shop Now!</button></NuxtLink>
    </div>
    <img src="/home.png" alt="home page image" />
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
