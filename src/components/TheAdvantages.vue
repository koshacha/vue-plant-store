<script
  setup
  lang="ts"
>
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
  <section>
    <div>
      <div>
        <div
          v-for="(
            item,
            i
          ) in items"
          :key="
            i
          "
        >
          <div>
            icon
          </div>
          <h5>
            {{
              item.title
            }}
          </h5>
          <p>
            {{
              item.text
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style
  scoped
></style>
