<template>
  <div class="container p-5   text-3xl">
      <div class=" mb-8">
    <h1 v-if="error.statusCode === 404">Sajnos az oldal nem található</h1>
    <h1 v-else>Sajnos az oldal nem található</h1>
    </div>
    <NuxtLink to="/" class="text-blue-500">Vissza a főoldalra</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>