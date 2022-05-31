import { expect } from 'chai'
import Requests from '../Requests'
import { TApiClientParameters } from '../types'

describe('Test class Requests', () => {
  let service: Requests

  beforeEach(() => {
    const options: TApiClientParameters = {
      baseURL: 'https://ya-praktikum.tech/api/v2',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    service = new Requests(options)
  })

  it('should return xhr', async () => {
    const response = await service.get('')
    expect(response instanceof XMLHttpRequest).to.equal(true)
  })
})
