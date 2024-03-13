import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App/>', () => {
  it('should work', () => {
    const sum = 1 + 1
    expect(sum).toBe(2)
  })
  it('should display elements', () => {
    render(<App/>)

    screen.debug()
    expect(
      screen.getByText(/vite \+ react/i)
    ).toBeInTheDocument()
  })
})