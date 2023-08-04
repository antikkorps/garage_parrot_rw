import { render } from '@redwoodjs/testing/web'

import AnnonceDetailPage from './AnnonceDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AnnonceDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnnonceDetailPage />)
    }).not.toThrow()
  })
})
