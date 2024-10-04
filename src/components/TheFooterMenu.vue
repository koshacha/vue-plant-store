<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: string
  items: {
    title: string
    href: string
  }[]
}>()
</script>

<template>
  <div>
    <h5 font="500" m="b-5">
      {{ title }}
    </h5>
    <ul>
      <li v-for="item in items" :key="item.href" m="b-3.5">
        <RouterLink to="item.href">
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
