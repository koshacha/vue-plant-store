<script lang="ts" setup>
import about1 from '~/assets/about-1.png'
import about2 from '~/assets/about-2.png'
</script>

<template>
  <section m="b-5 md:b-20">
    <div container>
      <div class="md:grid lg:grid-rows-2 md:grid-cols-2" gap="10 md:21">
        <div class="max-md:mb-5">
          <h2 text="3xl md:4xl balance" m="b-4" font="700">
            Buy more plants, it helps you to be relaxed
          </h2>
          <p font-base text-base>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.
          </p>
        </div>
        <div class="lg:row-span-2">
          <img :src="about2" alt="">
        </div>
        <div class="max-lg:hidden" place-content-end>
          <img :src="about1" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>
