import {memo, useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultExample2 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultB = 1

    const resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => {
            setA(+e.currentTarget.value)
        }}/>
        <input value={b} onChange={(e) => {
            setB(+e.currentTarget.value)
        }}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Dimych', 'Valery', 'Artem'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    const newArray = useMemo(() => {
        return users.filter(o => o.toLowerCase().indexOf('a'))
    }, [users])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={addUser}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


const BooksSecret = (props: { addBook: () => void }) => {
    console.log('books secret')
    return <div>
        <button onClick={props.addBook}>Add book</button>
    </div>
}

const Book = memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(['React', 'JS', 'HTML', 'CSS'])

    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         console.log(books)
    //         const newBooks = [...books, 'Angular' + new Date().getTime()]
    //         setBooks(newBooks)
    //     }
    // }, [books])


    const memoizedAddBook = useCallback(() => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}