<script lang="ts" setup>
import plant1 from '~/assets/plant-1.png'
import plant2 from '~/assets/plant-2.png'
import plant3 from '~/assets/plant-3.png'
import plant4 from '~/assets/plant-4.png'
import plant5 from '~/assets/plant-5.png'

interface Product {
  id: string
  name: string
  image: string
  price: number
};

const items: Product[] = [
  {
    id: '1',
    name: 'Kaktus Plants',
    image: plant1,
    price: 10000,
  },
  {
    id: '2',
    name: 'Landak Plants',
    image: plant2,
    price: 10000,
  },
  {
    id: '3',
    name: 'Kecubung Plants',
    image: plant3,
    price: 10000,
  },
  {
    id: '4',
    name: 'Kecubung Plants',
    image: plant4,
    price: 10000,
  },
  {
    id: '5',
    name: 'Kembang Flower Mantap Kembang',
    image: plant5,
    price: 10000,
  },
]
</script>

<template>
  <section m="b-20">
    <div container>
      <div flex items="center" justify="between" p="b-4" m="b-6" border="b #E0E0E0">
        <h2 text="xl" font="500">
          Featured Plants
        </h2>
        <div>
          <select>
            <option>Cheaper First</option>
          </select>
        </div>
      </div>
      <div grid="~ cols-5" gap="5">
        <div v-for="item in items" :key="item.id" class="group">
          <div overflow-hidden m="b-4">
            <img :src="item.image" alt="" aspect-ratio-1 w-full transition transform="origin-top group-hover:scale-120">
          </div>
          <div text="center balance" m="b-2">
            {{ item.name }}
          </div>
          <div text="center" font="600">
            IDR {{ item.price }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>
