<script
  setup
  lang="ts"
>
import TheLogo from './TheLogo.vue'
</script>

<template>
  <header
    class="header"
    p="y-2"
    m="t-10"
    fixed
    top-0
    w-full
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
