<script
  setup
  lang="ts"
>
import TheFooterMenu from './TheFooterMenu.vue'
import TheMailingForm from './TheMailingForm.vue'
</script>

<template>
  <footer text="#333333" font="work" p="t-15 b-17" border="t primary/10">
    <div class="container/small" flex="~ col md:row" justify="between">
      <div class="lg:max-w-1/5">
        <div font="nunito bold" text="primary xl" m="b-6" uppercase>
          Plants
        </div>
        <p font="500" m="b-2.5">
          Vue
          Plant
          Store
        </p>
        <p text="balance #4F4F4F sm0.5">
          Suite 932 9538 Reynolds Expressway, Pollichchester, OH 98889-3830
        </p>
      </div>
      <TheFooterMenu class="max-lg:hidden" title="Company" :items="[{ title: 'About', href: '/about' }, { title: 'Blog', href: '/blog' }, { title: 'Careers', href: '/careers' }]" />
      <TheFooterMenu class="max-lg:hidden" title="Help" :items="[{ title: 'FAQ', href: '/faq' }, { title: 'Shipping', href: '/shipping' }, { title: 'Returns', href: '/returns' }]" />
      <TheMailingForm class="max-md:hidden" />
    </div>
  </footer>
</template>

<style
  scoped
></style>
