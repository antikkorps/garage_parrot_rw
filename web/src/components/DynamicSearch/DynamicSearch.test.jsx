import { render } from '@redwoodjs/testing/web'

import DynamicSearch from './DynamicSearch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DynamicSearch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DynamicSearch />)
    }).not.toThrow()
  })
})
