import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import { fetchApi } from './functions/api'

const App = () => {
    const [text, setText] = useState('')

    const handleText = (text) => {
        fetchApi("POST", `/${window.location.href.split('/')?.[3]}`, {text: text})
        setText(text)
    }

    useEffect(() => {
        (async () => {
            const url = window.location.href.split('/')
            if(url?.[3] && url?.[3] != '' ){
                const data = await fetchApi("GET", `/get/${window.location.href.split('/')?.[3]}`)
                setText(data.data.data)
            }
        })()
    },[window.location.hash])

    if(window.location.href.split('/')?.[3] == '') return <Home />
    return (
        <div>
            <textarea 
                value={text} 
                onChange={(e) => handleText(e.target.value)}
            />
        </div>
    )
}

export default App;