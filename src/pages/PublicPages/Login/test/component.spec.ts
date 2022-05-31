import { expect } from 'chai'
import { ComponentLogin } from '../component'
import { ComponentInput } from '../../../../components/Input/component'
import { ComponentButton } from '../../../../components/Button/component'
import { ComponentText } from '../../../../components/Text/component'

describe('Test class "ComponentLogin"', () => {
  let dataResult: Record<string, any>

  beforeEach(() => {
    const instance = new ComponentLogin()
    dataResult = instance.data()
  })

  describe('Test function data()', () => {
    it('Result of data() contains the key "title" type of string', () => {
      expect(typeof dataResult.title).to.equal(typeof '')
    })
    it('Result of data() contains the key "login" - instance of ComponentInput', () => {
      const expected = dataResult.login instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "password" - instance of ComponentInput', () => {
      const expected = dataResult.password instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "btnSignIn" - instance of ComponentButton', () => {
      const expected = dataResult.btnSignIn instanceof ComponentButton
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "btnSignUp" - instance of ComponentButton', () => {
      const expected = dataResult.btnSignUp instanceof ComponentButton
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "errorText" - instance of ComponentText', () => {
      const expected = dataResult.errorText instanceof ComponentText
      expect(expected).to.equal(true)
    })
  })
})
