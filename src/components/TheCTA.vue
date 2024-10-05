<script lang="ts" setup>
import ctaBg from '~/assets/cta-bg.png'
</script>

<template>
  <section m="lg:b-20" bg="#F3F4F6" p="t-11 lg:t-22">
    <div grid="~ lg:cols-2" container>
      <div class="max-lg:mb-5">
        <h2 text="2xl lg:4xl balance" m="b-4 lg:b-8" font="700">
          Get your favourites plant on our shop now
        </h2>
        <TheButton>Visit Shop</TheButton>
      </div>
      <div>
        <img m="l-auto" :src="ctaBg" alt="">
      </div>
    </div>
  </section>
</template>

<style>

</style>
