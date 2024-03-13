import { fireEvent, render, screen } from "@testing-library/react"
import { Counter } from "./index"

describe('<Counter/>', () => {
  it('should init with counter zero', () => {
    render(<Counter initialCount={0}/>)
    const value = screen.getByTestId('countNumber').textContent
    expect(value).toEqual('0')
  })

  it('should increment when button is clicked', () => {
    render(<Counter initialCount={0}/>)

    const buttonIncrement = screen.getByRole('button', {name: 'Increment'})
    expect(buttonIncrement).toBeEnabled()

    fireEvent.click(buttonIncrement)
    expect(screen.getByTestId('countNumber').textContent).toEqual('1')
  })

  it('should change message on button click', () => {
    render(<Counter initialCount={0}/>)
    screen.getByText('Mensagem inicial')

    const changeMessageButton = screen.getByText(/change text/i)
    fireEvent.click(changeMessageButton)

    screen.getByText('Nova mensagem')
    const oldMessage = screen.queryByText('Mensagem inicial')
    expect(oldMessage).not.toBeInTheDocument();
  })
})