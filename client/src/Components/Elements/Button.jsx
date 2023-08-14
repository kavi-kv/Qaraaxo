import React from "react";


const Button = ({styles,label,onClick}) => {
    return(
        <>
            <button className={styles} onClick={onClick}>{label}</button>
        </>
    )
}
export default Button