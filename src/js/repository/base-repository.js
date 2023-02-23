import axios from 'axios'
import { Loading, QSpinnerFacebook, Notify } from 'quasar'
export class BaseRepository {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  async requestApi (method, url, headers, data, showLoading = true) {
    if (showLoading) {
      Loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: 'yellow',
        spinnerSize: 140,
        backgroundColor: 'grey-9',
        message: 'Carregando...'
      })
    }
    return await axios({
      method,
      url: this.baseUrl + url,
      headers,
      data
    }).catch(error => {
      if (showLoading) {
        Loading.hide()
      }
      console.log(error.message)
      Notify.create(
        { message: error.response.data.message, icon: 'warning', color: 'red' }
      )
      return {
        status: error.response.status,
        data: error.response.data,
        success: false
      }
    }).then(response => {
      Loading.hide()
      return {
        status: response.status,
        data: response.data,
        success: true
      }
    })
  }
}
