import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "."

describe('Button Component', () => {
  it('should render with gray background if disabled', () => {
    render(
      <Button disabled onClick={() => {}}>
        Clique
      </Button>
    )

    const button = screen.getByRole('button', {name: 'Clique'})

    expect(button).toHaveStyle({backgroundColor: 'gray'})
  })

  it('should call onClick prop on click', () => {
    const onClick = jest.fn();

    render(
      <Button disabled onClick={onClick}>
        Clique aqui
      </Button>
    )

    const button = screen.getByRole('button', {name: 'Clique aqui'})
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledWith(10);
  })  
})