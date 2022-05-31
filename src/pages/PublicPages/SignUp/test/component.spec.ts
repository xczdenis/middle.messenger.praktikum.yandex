import { expect } from 'chai'
import { ComponentSignUp } from '../component'
import { ComponentInput } from '../../../../components/Input/component'
import { ComponentButton } from '../../../../components/Button/component'
import { ComponentText } from '../../../../components/Text/component'

describe('Test class "ComponentSignUp"', () => {
  let dataResult: Record<string, any>

  beforeEach(() => {
    const instance = new ComponentSignUp()
    dataResult = instance.data()
  })

  describe('Test function data()', () => {
    it('Result of data() contains the key "first_name" - instance of ComponentInput', () => {
      const expected = dataResult.first_name instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "second_name" - instance of ComponentInput', () => {
      const expected = dataResult.second_name instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "login" - instance of ComponentInput', () => {
      const expected = dataResult.login instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "email" - instance of ComponentInput', () => {
      const expected = dataResult.email instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "password" - instance of ComponentInput', () => {
      const expected = dataResult.password instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "password2" - instance of ComponentInput', () => {
      const expected = dataResult.password2 instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "phone" - instance of ComponentInput', () => {
      const expected = dataResult.phone instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "btnSignUp" - instance of ComponentButton', () => {
      const expected = dataResult.btnSignUp instanceof ComponentButton
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "btnSignIn" - instance of ComponentButton', () => {
      const expected = dataResult.btnSignIn instanceof ComponentButton
      expect(expected).to.equal(true)
    })
    it('Result of data() contains the key "errorText" - instance of ComponentText', () => {
      const expected = dataResult.errorText instanceof ComponentText
      expect(expected).to.equal(true)
    })
  })
})
