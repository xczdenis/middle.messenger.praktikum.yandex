import Requests from '../../engine/shared/Requests'
import { TApiClientParameters } from '../../engine/shared/types'

const options: TApiClientParameters = {
  baseURL: 'https://ya-praktikum.tech/api/v2',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

if (options.headers) {
  const csrfTokenDOM = document.querySelector('[name=csrfmiddlewaretoken]')
  if (csrfTokenDOM) {
    const csrfToken = csrfTokenDOM.getAttribute('value')
    if (csrfToken) {
      options.headers['X-CSRFToken'] = ''
    }
  }
}

const service = new Requests(options)

export default service
