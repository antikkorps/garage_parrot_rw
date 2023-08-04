import { render } from '@redwoodjs/testing/web'

import AnnonceSingle from './AnnonceSingle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnnonceSingle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnnonceSingle />)
    }).not.toThrow()
  })
})
