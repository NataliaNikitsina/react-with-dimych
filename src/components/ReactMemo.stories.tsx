import {memo, useState} from "react";

export default {
    title: 'React.memo demo',
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Dimych', 'Valery', 'Artem'])

    const addUser = () => {
        const newUsers = [...users,'Sveta' + new Date().getTime() ]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={addUser}>Add user</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}