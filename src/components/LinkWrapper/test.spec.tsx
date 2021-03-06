import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/link">Link</LinkWrapper>)

    const children = screen.getByText('Link')

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/link')
  })
})
