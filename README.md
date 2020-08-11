# **Optional Jest To Do List Lab**:

## Setup:
Let's now create a To Do list app using test driven development. First let's create our files.

We will have two components -- a ToDos.js component which will hold individual Todo.js components.

```
$ mkdir src/components/ToDos
$ touch src/components/ToDos/ToDos.test.js
```


Now let's scaffold the configuration for our testing file.

*ToDos.test.js*
```
import React from 'react'
import { mount } from 'enzyme'

import ToDos from './ToDos'
import ToDo from './ToDo'

describe('ToDos Component', () => {
  const listItems = [
    { task: 'create lesson', done: false },
    { task: 'clean apartment', done: false }
  ]

  let component
  // called before every test
  beforeEach(() => {
    // this time, mount instead of shallow because we will have subcomponents within our ToDos component
    component = mount(<ToDos tasks={listItems} />)
  })

  // add tests here

})
```

This looks pretty similar to our other testing blocks, but this time in beforeEach() we will use mount instead of shallow since we are going to have subcomponents within our parent component.

Let's add our first test:
```
  it('Should contain two todo subcomponents', () => {
    expect(component.find(ToDo).length).toBe(2)
  })
```

Let's write the minimum amount of code to make this test pass:

*ToDos.js*
```
import React, { Component } from 'react'

import ToDo from './ToDo'

class ToDos extends Component {
  render () {
    return (
      <div>
        {this.props.tasks.map((task, idx) => 
          <ToDo task={task} key={idx} />
        )}
      </div>
    )
  }
}
ToDo.js

import React from 'react'

const ToDo = ({ task }) => {
  return (
    <div>
      <div></div>
    </div>
  )
}
Now that we made that one pass, let's add another.

  it('Should render the todo list tasks', () => {
    component.find(ToDo).forEach((todo, idx) => {
      expect(todo.find('.task-name').text()).toBe(listItems[idx].task)
    })
  })
The code to pass this one is pretty minimal! ToDo.js

import React from 'react'

const ToDo = ({ task }) => {
  return (
    <div>
+      <div className='task-name'>{task.task}</div>
    </div>
  )
}
```

Now let's create functionality for making a new list item.

```
  it(`Should have have a state attribute for the new todo that should update 
      when the user types in an input`, () => {
    expect(component.state('newTodo')).toBe('')
    component.find('input').simulate('change', {target: {value: 'hello'}})
    expect(component.state('newTodo')).toBe('hello')
  })
```
Note that we can mock events by adding targets and values to the simulate method! We normally access e.target.value, so we create a similar structure when we mock the event!

*ToDos.js*
```
class ToDos extends Component {
  constructor (props) {
    super(props)

    this.state = {
+      newTodo: '',
    }
  }

+  handleChange = e => {
+    this.setState({
+      newTodo: e.target.value
+    })
+  }

  render () {
    return (
      <div>
+        <input onChange={this.handleChange}/>
...
```

## You Do: Finish To Do App
Write the following tests. After writing a test, implement the React code to pass that test.

```
Should create a new todo on the click of a button and update the UI with it

Should mark todos as done on the click of a button

Should have todos with the class checked if they are done and unchecked if they are not done
```

*Bonus*: look at the completed application using `npm start` or and then style the application accordingly.