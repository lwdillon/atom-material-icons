import { defineComponent, h } from 'vue'
import { getFileIconFromName, getFolderIconFromName } from '../associations'

export default defineComponent({
  name: 'AtomMaterialIcon',

  props: {
    name: {
      type: String,
      required: true
    },
    isFolder: {
      type: Boolean,
      default: false
    }
  },

  setup (props, { attrs }) {
    const { name, isFolder } = props

    const icon = isFolder ? getFolderIconFromName(name) : getFileIconFromName(name)

    return h(icon.tagName, {}, icon)
  }
})
