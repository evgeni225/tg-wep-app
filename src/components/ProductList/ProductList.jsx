import { useCallback, useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import { ProductItem } from '../ProductItem/ProductItem'
import './ProductList.css'

const products = [
    {id: 1, title: 'Джинсы1', price: 5000, description: 'Синего цвета'},
    {id: 2, title: 'Джинсы2', price: 4000, description: 'Синего цвета1'},
    {id: 3, title: 'Джинсы3', price: 15000, description: 'Синего цвета2'},
    {id: 4, title: 'Джинсы4', price: 2000, description: 'Синего цвета3'},
    {id: 5, title: 'Джинсы5', price: 9000, description: 'Синего цвета4'},
    {id: 6, title: 'Джинсы6', price: 1000, description: 'Синего цвета5'},
]

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

export const ProductList = () => {
    const [addedItems, setAddedItems] = useState([])
    const { tg } = useTelegram()

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems)
        }
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content Type': 'application/json',

            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [tg, onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = []

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => {
                return <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            })}            
        </div>
    )
}