import React,{useState,useEffect} from "react";
import styles from '../../Styles/select.module.css'

const SelectCategory = (props) => {
    const [selectCategory,setSelectCategory] = useState(props.data)

    const handleCategoryChange = (event) => {
        const value = event.target.value
        if(value === "Choose Category")
        {
            setSelectCategory("Please choose a value")
        }
        setSelectCategory(value)
        props.onData(selectCategory)
    }
 
    return(
        <div className={styles.select_container}>
            <select onChange={handleCategoryChange} value={selectCategory}>
                <option value="Choose Category" >Choose Category</option>
                <option value="Quotes">Quotes</option>
                <option value="Short Story">Short Story</option>
                <option value="Memes">Memes</option>
            </select>
            {/* <h1>Selected category is : {selectCategory}</h1> */}
        </div>
    )
}

export default SelectCategory