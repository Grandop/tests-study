import { fireEvent, render, screen } from "@testing-library/react";
import { Tasks } from ".";

describe('Tasks Component', () => {
  
  it('should fetch and show tasks on button click', async () => {
    render(<Tasks />)

    const button = screen.getByText(/get tasks from api/i)
    fireEvent.click(button);

    await screen.findByText('delectus aut autem')
  })
})

// const handler = http.get(
//   'https://jsonplaceholder.typicode.com/todos?_limit=10',
//   async () => {
//     return HttpResponse.json([
//       {
//         userId: 1,
//         id: 1,
//         title: 'delectus aut autem',
//         completed: false,
//       }
//     ])
//   }
// )
// const server = setupServer(handler)

// beforeAll(() => {
//   server.listen()
// }) 