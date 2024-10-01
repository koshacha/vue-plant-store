<script lang="ts" setup>
interface Product {
  id: string
  name: string
  image: string
  price: number
};

const items: Product[] = [
  {
    id: '1',
    name: 'Kembang Flower Mantap',
    image: 'https://source.unsplash.com/random',
    price: 10000,
  },
  {
    id: '2',
    name: 'Kembang Flower Mantap',
    image: 'https://source.unsplash.com/random',
    price: 10000,
  },
  {
    id: '3',
    name: 'Kembang Flower Mantap',
    image: 'https://source.unsplash.com/random',
    price: 10000,
  },
  {
    id: '4',
    name: 'Kembang Flower Mantap',
    image: 'https://source.unsplash.com/random',
    price: 10000,
  },
]
</script>

<template>
  <section>
    <div>
      <div>
        <h2>Featured Plants</h2>
        <div>
          <select>
            <option>Cheaper First</option>
          </select>
        </div>
      </div>
      <div>
        <div v-for="item in items" :key="item.id">
          <img :src="item.image" alt="">
          <div>{{ item.name }}</div>
          <div>IDR {{ item.price }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>
