import { useEffect } from 'react'
import { Button } from "../Button/Button"
import './Header.css'
const tg = window.Telegram.WebApp


export const Header = () => {
    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>

        </div>
    )
}