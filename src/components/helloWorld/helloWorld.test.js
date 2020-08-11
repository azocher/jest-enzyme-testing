import React from 'react'
import { shallow } from 'enzyme'

import HelloWorld from './helloWorld'

// describe a block of tests
describe('Hello world component', () => {
    // write a test for should render as expected
    it('should render as expected', () => {
         // check for shallow rendering of component (without rendering any of the children)
         const component = shallow(<HelloWorld name={'Your name'} />)
        // create an assertion within the test to check if our component is rendering our name prop
        expect(component.contains('Your name')).toBe(true)
    })
   
})
