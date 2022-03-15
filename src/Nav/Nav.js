import React from "react";
import './Nav.scss' ;

class Nav extends React.Component{
    render(){
        return(
            <div>
                <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">List Member</a>
                <a href="#contact">Form Add</a>
                <a href="#about">Form Edit</a>
</div>
            </div>
        )
    }
}
export default Nav;