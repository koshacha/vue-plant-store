<template>
  <main
    font="montserrat"
  >
    <TheHeader />
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
    <TheFooter />
  </main>
</template>
