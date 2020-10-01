import React from "react";
import NavigationItems from "../NavigationItens/NavigationItems";
import Logo from "../../Logo/Logo";
import style from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {

    let attachedStyle = [style.SideDrawer, style.Close];

    if(props.open){
        attachedStyle = [style.SideDrawer, style.Open];
    }

    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedStyle.join(' ')}>
                <div className={style.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default sideDrawer;