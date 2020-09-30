import React from 'react';
import style from './Layout.module.css';

const layout = (props) => (
    <React.Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={style.Content}>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;