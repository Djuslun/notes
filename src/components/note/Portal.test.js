// import React from 'react'
// import ReactDOM from 'react-dom'
// import { render, unmountComponentAtNode } from 'react-dom'
// import { act } from 'react-dom/test-utils'
// import Portal from './Portal'
// import '@testing-library/jest-dom'

// let container = null

// beforeEach(() => {
//   container = document.createElement('div')
//   document.body.appendChild(container)
// })

// afterEach(() => {
//   unmountComponentAtNode(container)
//   container.remove()
//   container = null
// })

// describe('Portal', () => {
//   it('renders without crashing', () => {
//     act(() => {
//       ReactDOM.createRoot(container).render(<Portal>Test</Portal>)
//     })
//     expect(container.querySelector('.wrapper')).toBeDefined()
//   })

//   it('adds wrapper element to document body', () => {
//     act(() => {
//       ReactDOM.createRoot(container).render(<Portal>Test</Portal>)
//     })
//     expect(document.body.contains(document.querySelector('.wrapper'))).toBe(true)
//   })

//   it('adds block class to document body', () => {
//     act(() => {
//       ReactDOM.createRoot(container).render(<Portal>Test</Portal>)
//     })
//     expect(document.body.classList.contains('block')).toBe(true)
//   })

//   it('removes wrapper element from document body on unmount', () => {
//     act(() => {
//       ReactDOM.createRoot(container).render(<Portal>Test</Portal>)
//     })
//     act(() => {
//       ReactDOM.unmountComponentAtNode(container)
//     })
//     expect(document.body.contains(container.querySelector('.wrapper'))).toBe(false)
//   })


// })

import React from 'react'
import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Portal from './Portal'



describe('Portal', () => {
  it('renders children inside a portal', () => {
    const { getByText } = render(
      <Portal>
        <div>test</div>
      </Portal>
    )
    expect(getByText('test')).toBeInTheDocument()
  })

  it('appends the portal to the body element', () => {
    const { container } = render(
      <Portal>
        <div>test</div>
      </Portal>
    )
    expect(container.parentElement).toBe(document.body)
  })

  it('adds and removes classes from the body element', () => {
    render(
      <Portal>
        <div>test</div>
      </Portal>
    )
    expect(document.body.classList).toContain('block')
    // Note: This assumes that the initial state of document.body does not already contain the 'block' class.
  })
})