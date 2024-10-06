<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <div>
    <h5 font="500" m="b-5">
      Subscribe to our newsletter
    </h5>
    <form>
      <TheInput v-model="email" type="email" name="email" placeholder="john@mail.com" />
      <TheButton v-wip type="submit">
        Submit
      </TheButton>
    </form>
  </div>
</template>
