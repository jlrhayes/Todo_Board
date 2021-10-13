import React,{useState} from 'react'
import ModalComponent from './ModalComponent'
import Modal from 'react-modal';

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

    return (
            <div>
                <ModalComponent input = {{ type : 'text', placeholder : 'Board Name' , onChange : function (e){setTitle(e)}}}  onSubmit = {onSubmit} modalText = 'Add a new Board'/>
            </div>
    )
}

export default AddBoard