<script
  setup
  lang="ts"
>
import { useScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useScroll(window)

const styles = computed(() => {
  return y.value > 20 ? 'bg-white md:pt-5 md:pb-5 shadow-xl fixed' : 'bg-transparent'
})
</script>

<template>
  <header
    class="max-md:fixed max-md:bg-white"
    :class="styles"
    p="y-2 md:t-10"

    absolute top-0 z-1 w-full transition
  >
    <div
      class="container"
      flex
      items="center"
      justify="between"
    >
      <TheLogo />

      <div m="l-auto" flex="~ row" items="center" space-x-10>
        <button v-wip>
          <div

            i-carbon:search size-5
          />
        </button>
        <button v-wip>
          <div

            i-carbon:shopping-cart size-5
          />
        </button>
      </div>
      <div class="max-md:hidden">
        <TheButton  v-wip theme="transparent">
          Sign Up
        </TheButton>
        <TheButton  v-wip>Sign In</TheButton>
      </div>
    </div>
  </header>
</template>

<style
  scoped
></style>
