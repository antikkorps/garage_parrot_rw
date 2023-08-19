import { render } from '@redwoodjs/testing/web'

import HoraireComponent from './HoraireComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HoraireComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HoraireComponent />)
    }).not.toThrow()
  })
})
