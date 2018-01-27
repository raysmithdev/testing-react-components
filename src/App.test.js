import React from 'react'
import App from './App'
import { shallow, mount } from 'enzyme'
import './setupTests'

describe('<App /> component', () => {
  it('Smoke Test', () => {
    shallow(<App />)
  })

  it('Renders ray as the name state property initially', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state('name')).toEqual('ray')
  })
  
  it('Changes name in state on execution of changeName func', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().changeName('jim')
    expect(wrapper.state('name')).toEqual('jim')
  })

  it('Should render author as a prop', () => {
    const wrapper = shallow(<App author="james" />)
    expect(wrapper.find('p.author').text()).toEqual('james')
  })
})
