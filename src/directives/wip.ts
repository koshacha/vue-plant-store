import type { Directive } from 'vue'
import { useNotyf } from '~/composables/notyf'

const vWip: Directive = {
  mounted: (el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const { notyf } = useNotyf()

      notyf.dismissAll()
      notyf.error('Disabled in the Demo')

      return false
    })
  },
}

export default vWip
