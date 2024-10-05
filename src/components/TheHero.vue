<script setup lang="ts">
import heroImage from '~/assets/hero-bg.png'
</script>

<template>
  <section m="b-10 md:b-35">
    <div class="container/big px-0">
      <div relative class="h-dvh lg:grid lg:grid-cols-2" gap="5">
        <div>
          <img :src="heroImage" alt="hero image" m="l-auto" class="inset-0 w-full object-cover h-dvh max-md:absolute">
          <div m="l-auto" class="absolute inset-0 bg-white/60 lg:hidden" />
        </div>
        <div class="w-full max-lg:absolute max-lg:bottom-0 max-lg:top-0" flex="~ col">
          <div grid items-center flex="1" text-balance>
            <div class="xl:max-w-2xl max-md:px-2.5">
              <h1 font="max-md:bold" text="3xl md:5xl primary bold max-lg:center" m="b-4 md:b-6">
                Kembang Flower Mantap
              </h1>
              <p text="md:0.5xl max-lg:center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
          <div flex="~ row" font="500">
            <div bg="white" flex-1 p="x-6 y-5 md:x-12 md:y-10">
              <div text="md:2xl" color="#333333" m="b-3" flex gap="3.5" items="center">
                <div i-carbon:arrow-left size-5 />
                Previous
              </div>
              <div color="primary" text="xl md:3xl">
                Kaktus
                Plant
              </div>
            </div>
            <div bg="primary" flex-1 color="white" p="x-6 y-5 md:x-12 md:y-10">
              <div text="md:2xl" color="#f2f2f2" m="b-3" flex gap="3.5" items="center">
                Next
                <div i-carbon:arrow-right size-5 />
              </div>
              <div text="xl md:3xl">
                Rahasia
                Plant
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
