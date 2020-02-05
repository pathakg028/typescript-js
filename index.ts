import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    userId: number
    title: string
    completed: boolean
}

axios.get(url).then(response => {
    const Todo = response.data as Todo

    const userId = Todo.userId
    const title = Todo.title

    const completed = Todo.completed
    myFunc(userId, title, completed)

    // console.log(`${userId}, ${title}, ${completed}`)

})

const myFunc = (userId: number, title: string, completed: boolean) => {
    console.log(`${userId}, ${title}, ${completed}`)

}
