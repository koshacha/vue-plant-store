<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { computed, defineModel, defineProps, ref } from 'vue'

const props = defineProps<{
  items: {
    text: string
    code: string
  }[]
}>()

const model = defineModel<string>()

const opened = ref(false)
const target = ref(null)

onClickOutside(target, () => {
  opened.value = false
})

const selectedValue = computed(() => {
  return props.items.find(item => item.code === model.value)
})
</script>

<template>
  <div relative>
    <div ref="target" cursor="pointer" flex items="center" gap="3" border="~ #E0E0E0" p="x-3 y-2" @click="opened = !opened">
      <span font="500" text="sm0.5">{{ selectedValue!.text }}</span>
      <div i-carbon:chevron-down size-4 :class="{ 'rotate-180': opened }" />
    </div>
    <div v-if="opened" absolute z-20 bg="white" w-full border="~ #E0E0E0 t-transparent" shadow-sm>
      <div
        v-for="item in items"
        :key="item.code"
        cursor="pointer"
        p="x-3 y-2"
        font="500" text="sm0.5"
        bg="hover:#E0E0E0/30"
        @click="model = item.code; opened = false"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
