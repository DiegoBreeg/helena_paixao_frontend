import { ReactElement } from 'react'
import { ProductCard } from '../ProductCard'
import styles from './Main.module.css'

export function Main()
{
    const products: ReactElement[] =
        [
            <ProductCard />,
            <ProductCard />,           
            
        ]


    return (
        <main className={styles.main}>
            {products}
        </main>
    )
}