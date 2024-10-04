<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import type { AnchorHTMLAttributes } from 'vue'

const props = withDefaults(defineProps<{
  theme?: 'primary' | 'transparent'
  class?: AnchorHTMLAttributes['class']
}>(), {
  theme: 'primary',
})

const stylesProps = props.theme === 'primary'
  ? 'text-white bg-primary hover:bg-primary/90'
  : 'text-primary bg-transparent'
</script>

<template>
  <button font="bold nunito" p="y-2 x-10" :class="[stylesProps, props.class]">
    <slot />
  </button>
</template>

<style>

</style>
