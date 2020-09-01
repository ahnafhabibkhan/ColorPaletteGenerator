import React from "react";

const Button = ({children, type, onClick, className})=>{
    return (
        <button onClick={onClick} className={`${className}`} type={type}>
            {children}
        </button>
    )    
};


export default Button;