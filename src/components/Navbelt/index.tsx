import styles from "./Navbelt.module.css"
import { NavLeft } from "../NavLeft"
import { NavSearch } from "../NavSearch"
import { NavRight } from "../NavRight"


export function Navbelt()
{
    return (
        <div className={styles.navbelt}>
            <NavLeft />
            <NavSearch />
            <NavRight />
        </div>
    )
}