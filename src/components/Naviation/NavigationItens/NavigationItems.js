import React from "react";
import style from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
    return (
        <ul className={style.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    )
}

export default navigationItems;