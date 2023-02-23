import { ref } from 'vue'
import { MangaApiService } from '../services/manga-api.service'

const mangaApiService = new MangaApiService()

const collections = ref([])
const totalMangas = ref(0)
const loadCollections = async (page, limit, search) => {
  const response = await mangaApiService.getCollection(page, limit, search)
  if (response.success) {
    console.log(response.data.data.data.data)
    totalMangas.value = response.data.data.data.total
    collections.value = response.data.data.data.data
  }
}
async function onLoad (index, done) {
  if (index > 1) {
    await loadCollections(index, 4, '').then(() => {
      done()
    })
  }
  console.log('onLoad', index)
}
export {
  collections,
  loadCollections,
  totalMangas,
  onLoad
}
