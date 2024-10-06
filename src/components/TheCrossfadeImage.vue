<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  src: string
  alt: string
  class: string
}>()

const prevSrc = ref('')
const toggle = ref(false)

watch(() => props.src, (value, prev) => {
  prevSrc.value = prev
  toggle.value = !toggle.value
})
</script>

<template>
  <Transition
    mode="in-out"
    enter-active-class="transition-all duration-500 absolute inset-0"
    leave-active-class="transition-none absolute hidden"
    enter-from-class="opacity-0"
  >
    <img v-if="toggle" key="image-1" :src="src" :alt="alt" :class="props.class">
    <img v-else key="image-2" :src="src" :alt="alt" :class="props.class">
  </Transition>
</template>
