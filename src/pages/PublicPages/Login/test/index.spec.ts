import { expect } from 'chai'
import { Login } from '../index'
import { ComponentLogin } from '../component'
import { ComponentInput } from '../../../../components/Input/component'
import { ComponentButton } from '../../../../components/Button/component'
import { ComponentText } from '../../../../components/Text/component'

describe('Test instance of component "ComponentLogin"', () => {
  let instance: ComponentLogin

  beforeEach(() => {
    instance = Login()
  })

  describe('Required attributes', () => {
    it('attribute "login" is instance of class ComponentInput', () => {
      const expected = instance.login instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('attribute "password" is instance of class ComponentInput', () => {
      const expected = instance.password instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('attribute "btnSignIn" is instance of class ComponentInput', () => {
      const expected = instance.btnSignIn instanceof ComponentButton
      expect(expected).to.equal(true)
    })
    it('attribute "btnSignUp" is instance of class ComponentInput', () => {
      const expected = instance.btnSignUp instanceof ComponentButton
      expect(expected).to.equal(true)
    })
    it('attribute "errorText" is instance of class ComponentText', () => {
      const expected = instance.errorText instanceof ComponentText
      expect(expected).to.equal(true)
    })
  })
})
