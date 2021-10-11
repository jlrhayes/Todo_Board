import {useState} from 'react'

const AddBoard = ({onAdd}) => {
    const [name,setName] = useState('')
    
    const onSubmit = (e) =>{
        e.preventDefault()
        if (!name){
            alert('Please type text')
            return
        }
        onAdd({name})

        setName('')
    }


    return (
        <form onSubmit = {onSubmit}>
            <div>
                <input type = "text" placeholder = "Board Name" value = {name}  onChange = {(e) => setName(e.target.value)}/>
            </div>
        </form>
    )
}

export default AddBoard