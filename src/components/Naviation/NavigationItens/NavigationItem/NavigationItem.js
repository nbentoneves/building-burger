import React from "react";
import style from "./NavigationItem.module.css";

const navigationItem = (props) => {
    return (
        <li className={style.NavigationItem}>
            <a
                className={props.active ? style.active : null}
                href={props.link}>{props.children}</a>
        </li>
    )
}

export default navigationItem;