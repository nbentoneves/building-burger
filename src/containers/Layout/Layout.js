import React, {Component} from 'react';
import style from './Layout.module.css';
import Toolbar from "../../components/Naviation/Toolbar/Toolbar";
import SideDrawer from "../../components/Naviation/SideDrawer/SideDrawer";

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={style.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}


export default Layout;