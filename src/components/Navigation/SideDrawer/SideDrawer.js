import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import CssSideDrawer from './SideDrawer.module.css'
import Aux from '../../../hoc/Auxiliary'
import BackDrop from '../../UI/Backdrop/BackDrop'

const SideDrawer=(props)=>{

    let attachedCssClass=[CssSideDrawer.SideDrawer, CssSideDrawer.Close];
    if(props.open){
        attachedCssClass=[CssSideDrawer.SideDrawer, CssSideDrawer.Open];
    }

    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedCssClass.join(' ')}>
                <div className={CssSideDrawer.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
};

export default SideDrawer;