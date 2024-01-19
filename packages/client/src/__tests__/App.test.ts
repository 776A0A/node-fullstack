import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import App from '../App.vue'

it('should work', () => {
  const app = mount(App)

  expect(app.text()).toContain('Hello World')
})