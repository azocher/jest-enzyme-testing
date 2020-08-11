import React from 'react'
import { shallow } from 'enzyme'

import Counter from './Counter'

// describe my testing block
describe('Counter component', () => {
    // check for component shallow rendering
    let component
    beforeEach(() => {
        component = shallow(<Counter />)
    })

    // header that says counter
    it('should have a header that says "Counter"', () => {
        expect(component.contains(<h1>Counter</h1>)).toBe(true)
    })

    // state initializing counter to 0
    it('should have a state attribute called initialized to zero', () => {
        expect(component.state('number')).toEqual(0)
    })

    // that current value of count displays in element
    it('should display the current number in an element called className number', () => {
        expect(component.find('.number').text()).toEqual("0")
    })
})


// button that adds 1 on click to count
// button that subtract 1 on click to count