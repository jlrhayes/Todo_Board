import React,{useState} from 'react'
import ModalComponent from './ModalComponent'

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
            <div>
                <ModalComponent inputs = {[
                    { type : 'text', placeholder : 'Board Name' , onChange : function (e){setTitle(e)}},
                    ]}  
                    onSubmit = {onSubmit} modalText = 'Add a new Board'/> 
            </div>
    )
}

export default AddBoard