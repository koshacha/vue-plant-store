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
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit.',
      icon: 'i-carbon:delivery',
    },
    {
      title:
        'Great Customer Service',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit.',
      icon: 'i-carbon:headset',
    },
    {
      title:
        'Original Plants',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit.',
      icon: 'i-carbon:tree',
    },
    {
      title:
        'Affordable Price',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit.',
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
