import { useEffect } from 'react'
import './App.css'
const tg = window.Telegram.WebApp

export default function App() {
    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return (
        <div>
            <h1>react</h1>

            <button onClick={onClose}>Close</button>
        </div>
    )
}
