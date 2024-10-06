import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'center',
    y: 'bottom',
  },
  ripple: true,
  dismissible: false,
})

export function useNotyf() {
  return { notyf }
}
