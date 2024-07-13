import { useState } from "react";
import { AddTodoProps } from '../components/interface';


const CreateTodo = ({ addTodo }: AddTodoProps) => {
    const [text, SetText] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            addTodo(text)
            SetText('')
        }
    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                
                <input placeholder="Add Text"
                type="text"
                value={text}
                onChange={(e)=> SetText(e.target.value)}
                />
<button>ADD TODO</button>
            </form>

        </>
    )
}

export default CreateTodo