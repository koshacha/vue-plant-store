<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import type { AnchorHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ AnchorHTMLAttributes {
  theme?: 'primary' | 'transparent'
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'primary',
})

const stylesProps = props.theme === 'primary'
  ? 'text-white bg-primary hover:bg-primary/90'
  : 'text-primary bg-transparent'
</script>

<template>
  <button font="bold nunito" p="y-2 x-10" :class="stylesProps">
    <slot />
  </button>
</template>

<style>

</style>
