import { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'

export const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')
    const { tg } = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [])

    const onChangeCounty = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input 
                className={'input'} 
                type="text" 
                placeholder={'Страна'}
                onChange={onChangeCounty}
                value={country}
            />
            <input 
                className={'input'}
                type="text" 
                placeholder={'Улица'}
                onChange={onChangeStreet}
                value={street}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'select'}></option>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal '}>Юр. лицо</option>
            </select>
        </div>
    )
}