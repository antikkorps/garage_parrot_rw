import { render } from '@redwoodjs/testing/web'

import CookiesPage from './CookiesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CookiesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CookiesPage />)
    }).not.toThrow()
  })
})
