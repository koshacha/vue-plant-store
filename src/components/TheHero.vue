<script setup lang="ts">
import heroImage from '~/assets/hero-bg.png'
</script>

<template>
  <section m="b-35">
    <div class="container/big">
      <div grid="~ cols-2" gap="19">
        <div>
          <img :src="heroImage" alt="hero image" m="l-auto" class="max-h-3xl">
        </div>
        <div flex="~ col">
          <div grid items-center flex="1" text-balance>
            <div class="max-w-2xl">
              <h1 text="5xl primary bold" m="b-6">
                Kembang Flower Mantap
              </h1>
              <p text="0.5xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
          <div flex="~ row" font="500">
            <div p="x-12 y-10">
              <div text="2xl" color="#333333" m="b-3" flex gap="3.5" items="center">
                <div i-carbon:arrow-left size-5 />
                Previous
              </div>
              <div color="primary" text="3xl">
                Kaktus
                Plant
              </div>
            </div>
            <div bg="primary" color="white" p="x-12 y-10">
              <div text="2xl" color="#f2f2f2" m="b-3" flex gap="3.5" items="center">
                Next
                <div i-carbon:arrow-right size-5 />
              </div>
              <div text="3xl">
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
