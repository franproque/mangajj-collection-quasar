import { MangaApi } from '../repository/manga-api.repository'
import { CacheService } from './cache.service'
import { useRouter } from 'vue-router'
const router = useRouter()
export class MangaApiService {
  constructor () {
    this.mangaApi = new MangaApi()
    this.cacheService = new CacheService()
  }

  async login (username, password) {
    const response = await this.mangaApi.login(username, password)
    if (response.success) {
      this.cacheService.set('token', response.data.token)
    }
    return response
  }

  async createUser (name, email, password) {
    const response = await this.mangaApi.createUser(name, email, password)

    return response
  }

  async getMangaList (page, limit, search) {
    console.log(localStorage.getItem('token'))
    return await this.mangaApi.getMangaList(localStorage.getItem('token'), page, limit, search)
  }

  async getCollection (page, limit, search) {
    return await this.mangaApi.getCollection(await this.cacheService.get('token'), page, limit, search, false)
  }

  async getCollectionDetail (id) {
    return await this.mangaApi.getCollectionDetail(await this.cacheService.get('token'), id)
  }

  async getMangaDetail (id) {
    return await this.mangaApi.getMangaDetail(await this.cacheService.get('token'), id)
  }

  async cadastrar (email, password, name) {
    return await this.mangaApi.cadastrar(email, password, name)
  }

  async adicionarMangaCollection (volume, mangaId, collectionId) {
    return await this.mangaApi.adicionarMangaCollection(await this.cacheService.get('token'), volume, mangaId, collectionId)
  }

  async atualizarQuantiadeDeVolumesDoManga (mangaId, quantidadeVolumes) {
    return await this.mangaApi.atualizarQuantiadeDeVolumesDoManga(await this.cacheService.get('token'), mangaId, quantidadeVolumes)
  }

  async loggout () {
    this.cacheService.clear()
    router.push({ name: 'login-usuario' })
  }
}
