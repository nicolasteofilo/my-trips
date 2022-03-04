import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /openstreetmap/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Rib. Preto',
      slug: 'rib-preto',
      location: {
        lat: 0,
        lng: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Rib. Vermelho',
      slug: 'rib-vermelho',
      location: {
        lat: 129,
        lng: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/Rib. Preto/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Rib. Vermelho/i)).toBeInTheDocument()
  })
})
