import './App.css'
import { Header } from './components/Header/Header'
const tg = window.Telegram.WebApp


export default function App() {
    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div>
            <h1>react</h1>
            <Header />
        </div> 
    )
}
