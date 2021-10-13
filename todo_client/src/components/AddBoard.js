import React,{useState} from 'react'
import ModalComponent from './ModalComponent'
import Modal from 'react-modal';

const AddBoard = ({onAdd}) => {
    const [title,setTitle] = useState('')

      
    
    const onSubmit = (e) =>{
        e.preventDefault()
        if (!title){
            alert('Please type text')
            return
        }
        onAdd({title})

        setTitle('')
    }

    const updateTitle = (e) => {
        setTitle(e.target.value)
    }


    return (
            <div>
                <ModalComponent input = {{ type : 'text', placeholder : 'Board Name', value : {title}, onChange : {updateTitle}}}  onSubmit = {onSubmit}/>
                    <form onSubmit = {onSubmit} >
                        <input type = "text" placeholder = "Board Name" value = {title}  onChange = {(e) => setTitle(e.target.value)}/>
                    </form>
            </div>
    )
}

export default AddBoard