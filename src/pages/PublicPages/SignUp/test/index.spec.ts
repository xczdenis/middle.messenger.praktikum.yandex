import { expect } from 'chai'
import { SignUp } from '../index'
import { ComponentSignUp } from '../component'
import { ComponentInput } from '../../../../components/Input/component'
import { ComponentButton } from '../../../../components/Button/component'
import { ComponentText } from '../../../../components/Text/component'

describe('Test instance of component "ComponentSignUp"', () => {
  let instance: ComponentSignUp

  beforeEach(() => {
    instance = SignUp()
  })

  describe('Required attributes', () => {
    it('attribute "first_name" is instance of class ComponentInput', () => {
      const expected = instance.first_name instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('attribute "second_name" is instance of class ComponentInput', () => {
      const expected = instance.second_name instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('attribute "login" is instance of class ComponentInput', () => {
      const expected = instance.login instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('attribute "email" is instance of class ComponentInput', () => {
      const expected = instance.email instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('attribute "password" is instance of class ComponentInput', () => {
      const expected = instance.password instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('attribute "password2" is instance of class ComponentInput', () => {
      const expected = instance.password2 instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('attribute "phone" is instance of class ComponentInput', () => {
      const expected = instance.phone instanceof ComponentInput
      expect(expected).to.equal(true)
    })
    it('attribute "btnSignUp" is instance of class ComponentInput', () => {
      const expected = instance.btnSignUp instanceof ComponentButton
      expect(expected).to.equal(true)
    })
    it('attribute "btnSignIn" is instance of class ComponentInput', () => {
      const expected = instance.btnSignIn instanceof ComponentButton
      expect(expected).to.equal(true)
    })
    it('attribute "errorText" is instance of class ComponentInput', () => {
      const expected = instance.errorText instanceof ComponentText
      expect(expected).to.equal(true)
    })
  })
})
