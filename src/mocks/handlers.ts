import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'https://jsonplaceholder.typicode.com/todos?_limit=10',
    async () => {
      return HttpResponse.json([
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        }
      ])
    }
  )
]