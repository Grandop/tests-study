import { useState } from "react";
import { Button } from "../Button";
import axios from "axios";

type Task = {
  id: string;
  title: string;
}

export const Tasks = () => {
  const [ tasks, setTasks ] = useState<Task[]>()

  const getTasks = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    )
    setTasks(data)
  }

  return(
    <>
      <h1>Tasks from API</h1>
      <Button
        disabled={false}
        onClick={getTasks}
      >
        Get Tasks from API
      </Button>
      {tasks?.map((tasks) => (
        <p key={tasks.id}>{tasks.title}</p>
      ))}
    </>
  );
}