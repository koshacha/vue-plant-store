<script
  setup
  lang="ts"
>
import { useScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useScroll(window)

const styles = computed(() => {
  return y.value > 20 ? 'bg-white pt-5 pb-5 shadow-xl fixed' : 'bg-transparent'
})
</script>

<template>
  <header
    class="header"
    :class="styles"
    p="y-2 t-10"

    absolute top-0 z-1 w-full transition
  >
    <div
      class="container"
      flex
      items="center"
      justify="between"
    >
      <TheLogo />

      <div m="l-auto" space-x-10>
        <button>
          <div

            i-carbon:search size-5
          />
        </button>
        <button>
          <div

            i-carbon:shopping-cart size-5
          />
        </button>
      </div>
      <div>
        <TheButton theme="transparent">
          Sign Up
        </TheButton>
        <TheButton>Sign In</TheButton>
      </div>
    </div>
  </header>
</template>

<style
  scoped
></style>
