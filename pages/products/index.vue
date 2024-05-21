<template>
  <div>
    <Head>
      <Title>Nuxt | Products</Title>
    </Head>
    <div>
      <select
        v-model="selectedCategory"
        class="px-2 py-4 outline-none rounded-md border-green-600 border-solid border-2 overflow-hidden"
      >
        <option value="">All Categories</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
      <div class="custom-slider">
        <label>Min Price:</label>
        <input v-model="minPrice" type="number" class="input" />
        <label>Max Price:</label>
        <input v-model="maxPrice" type="number" class="input" />
        <input
          v-model="minPrice"
          type="range"
          min="0"
          :max="maxPrice"
          class="slider"
        />
        <input
          v-model="maxPrice"
          type="range"
          :min="minPrice"
          max="1000"
          class="slider"
        />
      </div>
    </div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in filteredProducts" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import ProductCard from "~/components/ProductCard.vue";

const products = ref([]);
const categories = ref([]);

const selectedCategory = ref("");
const minPrice = ref(0);
const maxPrice = ref(1000);

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  products.value = await res.json();
};

const fetchCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  categories.value = await res.json();
};

onMounted(() => {
  fetchProducts();
  fetchCategories();
});

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const inCategory =
      selectedCategory.value === "" ||
      product.category === selectedCategory.value;
    const inPriceRange =
      product.price >= minPrice.value && product.price <= maxPrice.value;

    return inCategory && inPriceRange;
  });
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
select,
.custom-slider {
  margin: 20px 0;
  display: block;
  background-color: #e6e2e2c9;
  border-radius: 10px;
  padding: 10px;
  margin-right: 30px;
}
.input {
  background: #12b488;
  color: #fff;
  padding: 5px 15px;
  border-radius: 7px;
  margin: 3px;
  margin-right: 15px;
}
.slider {
  -webkit-appearance: none;
  /* width: 100%; */
  height: 8px;
  border-radius: 5px;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #12b488;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #12b488;
  cursor: pointer;
}
</style>
