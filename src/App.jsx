import { useEffect } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { useTelegram } from './hooks/useTelegram'


export default function App() {
    const { tg, onToggleButton } = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div>
            <h1>react</h1>
            <Header />
            <button onClick={onToggleButton}>toggle</button>
        </div> 
    )
}
