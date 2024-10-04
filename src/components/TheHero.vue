<script setup lang="ts">
import heroImage from '~/assets/hero-bg.png'
</script>

<template>
  <section>
    <div grid="~ cols-2">
      <div>
        <img :src="heroImage" alt="hero image">
      </div>
      <div flex="~ col">
        <div grid items-center flex="1" text-balance>
          <div>
            <h1 text="5xl primary bold" m="b-6">
              Kembang Flower Mantap
            </h1>
            <p text="0.5xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
        <div flex="~ row">
          <div p="x-12 y-10">
            <div text="2xl" color="#f2f2f2" m="b-3">
              &lt;
              Previous
            </div>
            <div color="primary" text="3xl">
              Kaktus
              Plant
            </div>
          </div>
          <div bg="primary" color="white" p="x-12 y-10">
            <div text="2xl" color="#f2f2f2" m="b-3">
              Next
              &gt;
            </div>
            <div text="3xl">
              Rahasia
              Plant
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
