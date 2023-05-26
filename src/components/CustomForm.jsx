import { useState } from 'react';

// library import
import { PlusIcon } from '@heroicons/react/24/solid'

const CostumForm = ({addTask}) => {
    const[task, setTask] = useState("");

    const handleFormSumit = (e) =>{
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }

    return(
        <form 
            className="todo" 
            onSubmit={handleFormSumit}
            >
            <div className="wrapper">
                <input 
                type="text" 
                id="task"
                className="input"
                value={task}
                onInput={(e) => setTask(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder="Enter Task"
                />
                <label 
                htmlFor="task"
                className="label"
                >Enter Task</label>
            </div>
            <button 
            className="btn"
            aria-label="Add Task"
            type="submit"

            >
            <PlusIcon width={25} height={45}/>
            </button>
        </form>
    )
}
export default CostumForm