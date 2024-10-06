<script setup lang="ts">
import { computed, ref } from 'vue'
import cactusImage from '~/assets/cactus.jpg'
import heroImage from '~/assets/hero-bg.png'
import kecubungImage from '~/assets/kecubung.jpg'
import latviaImage from '~/assets/latvia.jpg'
import TheCrossfadeImage from './TheCrossfadeImage.vue'

const items = [
  {
    title: 'Kembang Flower',
    description: 'Potted plants add a touch of nature and life to any home.',
    image: heroImage,
  },
  {
    title: 'Cactus Charm',
    description: 'Succulents like cacti are a great option for those who want to add greenery to their homes but don\'t have a green thumb.',
    image: cactusImage,
  },
  {
    title: 'Breathe Easy',
    description: 'Houseplants can improve air quality, reduce stress, and even boost your mood.',
    image: kecubungImage,
  },
  {
    title: 'Green Beauty',
    description: 'Houseplants add a touch of nature and beauty to any room, creating a welcoming and vibrant atmosphere.',
    image: latviaImage,
  },
]

const current = ref(0)

const data = computed(() => items[current.value])

const neighbors = computed(() => {
  const next = (current.value + 1) % items.length
  const prev = (current.value - 1 + items.length) % items.length
  return { next: items[next], prev: items[prev] }
})

watch(current, () => {
  [neighbors.value.prev, neighbors.value.next].map(({ image }) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = image
      img.onload = resolve
      img.onerror = reject
    })
  })
}, { immediate: true })
</script>

<template>
  <section m="b-10 md:b-35">
    <div class="container/big px-0">
      <div relative class="max-h-[1080px] h-dvh lg:grid lg:grid-cols-2" gap="5">
        <div relative h-full overflow-hidden>
          <TheCrossfadeImage :src="data.image" :alt="data.title" class="inset-0 ml-auto h-full w-full object-cover max-md:absolute" />
          <div m="l-auto" class="absolute inset-0 bg-white/60 lg:hidden" />
        </div>
        <div class="w-full max-lg:absolute max-lg:bottom-0 max-lg:top-0" flex="~ col">
          <div grid items-center flex="1" text-balance>
            <div class="xl:ml-6 xl:max-w-2xl max-md:px-2.5">
              <h1 font="max-md:bold" text="3xl md:5xl primary bold max-lg:center" m="b-4 md:b-6">
                {{ data.title }}
              </h1>
              <p text="md:0.5xl max-lg:center">
                {{ data.description }}
              </p>
            </div>
          </div>
          <div flex="~ row" font="500">
            <div bg="white" flex-1 cursor-pointer p="x-6 y-5 md:x-12 md:y-10" @click="current = (current - 1 + items.length) % items.length">
              <div text="md:2xl" color="#333333" m="b-3" flex gap="3.5" items="center">
                <div i-carbon:arrow-left size-5 />
                Previous
              </div>
              <div color="primary" text="xl md:3xl">
                {{ neighbors.prev.title }}
              </div>
            </div>
            <div bg="primary" flex-1 cursor-pointer color="white" p="x-6 y-5 md:x-12 md:y-10" @click="current = (current + 1) % items.length">
              <div text="md:2xl" color="#f2f2f2" m="b-3" flex gap="3.5" items="center">
                Next
                <div i-carbon:arrow-right size-5 />
              </div>
              <div text="xl md:3xl">
                {{ neighbors.next.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style
  scoped
></style>
