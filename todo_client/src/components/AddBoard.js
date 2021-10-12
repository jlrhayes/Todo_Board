import {useState} from 'react'

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


    return (
        <form onSubmit = {onSubmit}>
            <div>
                <input type = "text" placeholder = "Board Name" value = {title}  onChange = {(e) => setTitle(e.target.value)}/>
            </div>
        </form>
    )
}

export default AddBoard