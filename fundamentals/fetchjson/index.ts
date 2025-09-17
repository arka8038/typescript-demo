import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(todo);
  logTodoWithTypes(id, title, completed);
});

const logTodo = (todo: Todo) => {
  console.log(`
        The Todo with Id: ${todo.id}
        Has a title of: ${todo.title}
        Is it finished? ${todo.completed}
    `);
};

const logTodoWithTypes = (id: number, title: string, completed: boolean) => {
  console.log(`
          The Todo with Id: ${id}
          Has a title of: ${title}
          Is it finished? ${completed}
      `);
};
