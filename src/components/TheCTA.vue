<script lang="ts" setup>
import ctaBg from '~/assets/cta-bg.png'
</script>

<template>
  <section m="b-20" bg="#F3F4F6" p="t-22">
    <div grid="~ cols-2" container>
      <div>
        <h2 text="4xl balance" m="b-8" font="700">
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
