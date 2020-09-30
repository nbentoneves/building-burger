import React from 'react';
import style from './Layout.module.css';
import Toolbar from "../Naviation/Toolbar/Toolbar";

const layout = (props) => (
    <React.Fragment>
        <Toolbar/>
        <main className={style.Content}>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;