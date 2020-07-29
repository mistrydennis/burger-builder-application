import React,{Component} from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';

import classes from './Layout.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer : false
    }
    slideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }
    slideDrawerToggleHandler = () =>{
        this.setState( ( prevState ) => {
            return {showSideDrawer: !prevState.showSideDrawer };
        }  );
    }

    render() {
        return (
            <Auxiliary>
            <Toolbar drawerToggleClicked={this.slideDrawerToggleHandler}/>
            <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.slideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            
            </Auxiliary>
            )
        }
    
};

export default Layout;