<script lang="ts" setup>
import { defineModel, defineProps, type InputHTMLAttributes } from 'vue'

const props = defineProps<{
  class?: InputHTMLAttributes['class']
}>()

const model = defineModel()
</script>

<template>
  <input
    v-model="model"
    m="b-3.5"
    w-full
    border="~ #F2F2F2 rounded"
    outline="none"
    ring="~ transparent focus:primary/30"
    p="y-2 x-3.5"
  >
</template>
