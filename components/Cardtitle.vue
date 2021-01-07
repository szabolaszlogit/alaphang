<template>
<h2 class="p-4 text-2xl md:text-4xl">
 <slot></slot>
</h2> 
</template>
 
<script>
  export default {
    data() {
      return {
        title: 'Alaphang'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    }
  }
</script>