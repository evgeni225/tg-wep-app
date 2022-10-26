import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Form } from './components/Form/Form'
import { Header } from './components/Header/Header'
import { ProductList } from './components/ProductList/ProductList'
import { useTelegram } from './hooks/useTelegram'


export default function App() {
    const { tg, onToggleButton } = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [tg])

    return (
        <div>
            <Routes>
                <Route index element={<ProductList />} />
                <Route path={'form'} element={<Form />} />
            </Routes>
        </div> 
    )
}
