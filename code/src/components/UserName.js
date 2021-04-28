import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const UserName = () => {
    const [inputValue, setInputValue] = useState('')
    
    const dispatch = useDispatch()

    const OnUserNameSet = () => {
        console.log(inputValue)
    }

    return (
        <div>
            <p>Welcome our amazing game!</p>
            <input 
            type="text"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            />
            <button onClick={OnUserNameSet}>Enter name</button>
        </div>
    )
}

export default UserName
