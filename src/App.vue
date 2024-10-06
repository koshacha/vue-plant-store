<template>
  <main
    font="montserrat"
  >
    <TheHeader />
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
        <template #fallback>
          <div h-dhv grid place-content-center bg-white>
            Loading...
          </div>
        </template>
      </Suspense>
      <TheFooter />
    </routerview>
  </main>
</template>
