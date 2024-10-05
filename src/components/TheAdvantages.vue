<script setup lang="ts">
const items: {
  title: string
  text: string
  icon: string
}[]
  = [
    {
      title:
        'Fast Delivery',
      text: 'We offer convenient delivery options to ensure your order arrives promptly, no matter your location.',
      icon: 'i-carbon:delivery',
    },
    {
      title:
        'Great Customer Service',
      text: 'Our customer support team is always ready to assist you with any questions or issues you may have.',
      icon: 'i-carbon:headset',
    },
    {
      title:
        'Original Plants',
      text: 'All our plants are grown with love and care, ensuring they are healthy and beautiful, allowing you to enjoy their beauty for years to come.',
      icon: 'i-carbon:tree',
    },
    {
      title:
        'Affordable Price',
      text: 'We offer high-quality products at affordable prices, so everyone can enjoy our products.',
      icon: 'i-carbon:pricing-consumption',
    },
  ]
</script>

<template>
  <section m="b-20">
    <div container>
      <div grid="~ cols-4" gap="8">
        <div v-for="(item, i) in items" :key="i" border="~ #E0E0E0" p="x-4 y-5">
          <div flex="~ row" items="center" m="b-4">
            <div size-12 :class="item.icon" color="primary" m="r-4" />
            <h5 text="primary" font="700">
              {{
                item.title
              }}
            </h5>
          </div>
          <p text="sm">
            {{
              item.text
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
