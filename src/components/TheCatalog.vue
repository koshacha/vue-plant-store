<script lang="ts" setup>
import { computed, ref } from 'vue'
import plant1 from '~/assets/plant-1.png'
import plant2 from '~/assets/plant-2.png'
import plant3 from '~/assets/plant-3.png'
import plant4 from '~/assets/plant-4.png'
import plant5 from '~/assets/plant-5.png'
import TheSelect from './TheSelect.vue'

interface Product {
  id: string
  name: string
  image: string
  price: number
  out_of_stock?: boolean
};

const items: Product[] = [
  {
    id: '1',
    name: 'Kaktus Plants',
    image: plant1,
    price: 80,
  },
  {
    id: '2',
    name: 'Landak Plants',
    image: plant2,
    price: 120,
  },
  {
    id: '3',
    name: 'Kecubung Plants',
    image: plant3,
    price: 200,
  },
  {
    id: '4',
    name: 'Kecubung Plants',
    image: plant4,
    price: 50,
  },
  {
    id: '5',
    name: 'Kembang Flower',
    image: plant5,
    price: 50,
    out_of_stock: true,
  },
]

const sorts = [
  {
    text: 'Cheaper First',
    code: 'CHEAP',
  },
  {
    text: 'Expensive First',
    code: 'EXPENSIVE',
  },
  {
    text: 'Alphabetical: A-Z',
    code: 'ALPHABETICAL',
  },
  {
    text: 'Alphabetical: Z-A',
    code: 'ALPHABETICAL_R',
  },
]

const sort = ref<string>('CHEAP')

const products = computed<Product[]>(() => {
  let sortCb: (a: Product, b: Product) => number

  switch (sort.value) {
    case 'EXPENSIVE':
      sortCb = (a, b) => b.price - a.price
      break
    case 'ALPHABETICAL':
      sortCb = (a, b) => a.name.localeCompare(b.name)
      break
    case 'ALPHABETICAL_R':
      sortCb = (a, b) => b.name.localeCompare(a.name)
      break
    default:
      sortCb = (a, b) => a.price - b.price
      break
  };

  return items.toSorted(sortCb).toSorted((a, b) => a.out_of_stock === b.out_of_stock ? 0 : a.out_of_stock ? 1 : -1)
})
</script>

<template>
  <section m="b-20">
    <div container>
      <div flex items="center" justify="between" p="b-4" m="b-6" border="b #E0E0E0">
        <h2 text="xl" font="500">
          Featured Plants
        </h2>
        <TheSelect v-model="sort" :items="sorts" />
      </div>
      <div grid="~ cols-2 sm:cols-3 lg:cols-5" gap="5">
        <div v-for="item in products" :key="item.id" :class="[{ grayscale: item.out_of_stock }, { group: !item.out_of_stock }]">
          <div relative overflow-hidden m="b-4">
            <RouterLink v-if="!item.out_of_stock" v-wip :to="`catalog/${item.id}`" absolute inset-0 z-1 />
            <img :src="item.image" alt="" aspect-ratio-1 w-full transition ease-in-out transform="origin-top group-hover:scale-110">
          </div>
          <RouterLink v-wip :to="`catalog/${item.id}`" block text-center text-balance m="b-2">
            {{ item.name }}
          </RouterLink>
          <div text="center" font="600">
            {{ item.out_of_stock ? 'Out of Stock' : Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>
