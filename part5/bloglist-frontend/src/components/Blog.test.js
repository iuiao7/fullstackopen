import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('renders blog\'s title and author', () => {
  const blog = {
    title: 'Test',
    author: 'Alice',
    url: 'http://localhost:3000',
    likes: 10,
    user: {
      id: '123',
      name: 'test',
      username: 'test'
    }
  }

  const component = render(
    <Blog blog={blog}/>
  )
  expect(component.container.querySelector('.blog')).toBeDefined()
  expect(component.container).toHaveTextContent('Alice')
})

test('It should show url and likes after clicking the button', () => {
  const blog = {
    title: 'Test',
    author: 'Alice',
    url: 'http://localhost:3000',
    likes: 10,
    user: {
      id: '123',
      name: 'test',
      username: 'test'
    }
  }

  const component = render(
    <Blog blog={blog}/>
  )

  expect(component.container).not.toHaveTextContent('likes')
  const button = component.getByText('view')
  fireEvent.click(button)

  expect(component.container).toHaveTextContent('http://localhost:3000')
  expect(component.container).toHaveTextContent('likes')
})
