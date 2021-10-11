import {useState} from 'react'

const AddColumn = ({onAdd}) => {
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
                <input type = "text" placeholder = "Column Name" value = {name}  onChange = {(e) => setName(e.target.value)}/>
            </div>
        </form>
    )
}

export default AddColumn