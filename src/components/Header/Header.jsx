import "./Header.scss";
import React, { useEffect, useState } from 'react'
import { TbSearch } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import Cart from "../Cart/Cart";

function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if( offset > 200){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    useEffect(()=>{// when we execute the program useeeffect will render first
        window.addEventListener("scroll", handleScroll)
    }, [])
    return (
        <>
        <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
            <div className="header-context">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">ZainSTORE.</div>
                <div className="right">
                    <TbSearch />
                    <AiOutlineHeart />
                    <span className="cart-icon" onClick={()=>setShowCart(true)}>
                        <CgShoppingCart />
                        <span>5</span>
                    </span>
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart}/>}
        </>
    )
}

export default Header

