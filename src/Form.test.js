import React from 'react'
import Form from './Form'
import { shallow, mount } from 'enzyme'
import './setupTests'

describe('<Form /> component', () => {
  it('Smoke test', () => {
    shallow(<Form />)
  })

  it('Calls a prop handleClick on button click', () => {
    const callback = jest.fn()
    const wrapper = mount(<Form handleClick={callback} />)
    wrapper.find('.clicker').simulate('click')
    expect(callback).toHaveBeenCalled()
  })
})
