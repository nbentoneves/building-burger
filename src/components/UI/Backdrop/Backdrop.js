import React from "react";
import style from './Backdrop.module.css'

const backdrop = (props) => {

    console.log("backdrop props", props.show)

    return (
        props.show ?
            <div
                className={style.Backdrop}
                onClick={props.clicked}/>
            : null
    );
}

export default backdrop;