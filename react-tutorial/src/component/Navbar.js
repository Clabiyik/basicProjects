import React from "react";
import PropTypes from "prop-types";

function Navbar(props){
    return(
        <div>
            <h3 className="text-center">{props.title}</h3>
        </div>
    )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:"Default App"
}
export default Navbar;