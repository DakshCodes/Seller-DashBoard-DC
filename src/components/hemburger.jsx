import React from 'react'
import { useState } from 'react'
import "./hemburger.css"
import Burgerbar from './burgerbar'

const Hemburger = () => {


    const [menu, setMenu] = useState(false);
    const [burger, setBurger] = useState("");
    const updateMenu = () => {
        if (!menu) {
            setBurger("burger");
        }
        else {
            setBurger("");
        }
    }
    const menuupdate = () => {
        setMenu(false);
        if (!menu) {
            setBurger("burger");
        }
        else {
            setBurger("");
        }
    }

    return (

        <div className='hemburger' >
            <div className={` ${menu ? "start" : "inactive"}`} onClick={() => { setMenu(!menu); updateMenu() }} >
                <div className={`${burger} css`}></div>
                <div className={`${burger} css`}></div>
                <div className={`${burger} css`}></div>
            </div>

            {/* <div hidden={!menu ? true: false} className='burgerbar' ><Sidebar/></div> */}

            {menu && <Burgerbar menuUpdate={menuupdate} />}
        </div>
    )
}




export default Hemburger
