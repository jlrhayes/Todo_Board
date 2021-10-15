import React,{useState} from 'react'
import ModalComponent from './ModalComponent'
import './Add.css';


/** 
 * An AddBoard component that refers to ModalComponent in its output.
 * @param {function} onAdd - A callback to run upon form submit.
 * @returns {element} ModalComponent
 */
const AddBoard = ({onAdd}) => {
    const [title,setTitle] = useState('')

    const onSubmit = (e) =>{
        console.log(e)
        e.preventDefault()
        if (!title){
            alert('Please type text')
            return
        }
        onAdd({title})

        setTitle('')
    }
    //inputs takes an array of objects for each input for the modal 
    //{type : {input type}, placeholder: {placeholder} , onChange : {function to change value}}
    return (
            <div className="add-button">
                <ModalComponent
                inputs = {[
                    { type : 'text', placeholder : 'Board Name' , onChange : function (e){setTitle(e)}},
                    ]}  
                    onSubmit = {onSubmit} modalText = 'Add a new Board'/> 
            </div>
    )
}

export default AddBoard
