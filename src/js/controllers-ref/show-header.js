import { ref } from 'vue'
const showHeader = ref(false)
const titleManga = ref('')
function handleShowHeader (value) {
  showHeader.value = value
}
export {
  showHeader,
  handleShowHeader,
  titleManga
}
