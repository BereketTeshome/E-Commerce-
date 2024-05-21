<template>
  <div>
    <Head>
      <Title>Nuxt | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products";

const { data: product } = await useFetch(uri + "/" + id);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found!",
    fatal: true,
  });
}
</script>

<style scoped></style>
