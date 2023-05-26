import styles from './TaskItem.module.css'; 
 
// styles 
import { useState } from 'react';

// library imports
import { CheckIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'

const TaskItem = ({task, deleteTask, toggleTask, enterEditMode}) => {
    const [isChecked, setIsChecked] = useState(task.checked)

    const handleCheckboxChange = (e) =>{
        setIsChecked(!isChecked);
        toggleTask(task.id)
    }

    return(
        <li className={styles.task}>
            <div className={styles["task-group"]}>
                <input 
                type="checkbox" 
                className={styles.checkbox}
                checked={isChecked}
                onChange={handleCheckboxChange}
                name={task.name}
                id={task.id}
                />
                <label 
                htmlFor={task.id}
                className={styles.label}
                >
                    {task.name}
                    <p className={styles.checkmark}>
                        <CheckIcon strokeWidth={8} width={20} height={40}/>
                    </p>
                </label>
            </div>
            <div className={styles["task-group"]}>
                <button
                className='btn'
                aria-label={'Update ${task.name} Task'}
                onClick={() => enterEditMode(task)}
                >
                    <PencilSquareIcon width={20} height={40}/>
                </button>

                <button
                className={'btn ${styles.delete}'} 
                aria-label={'Delete ${task.name} Task'}
                onClick={() => deleteTask(task.id)}
                >
                    <TrashIcon width={20} height={40}/>
                </button>
            </div>
        </li>
    )
}
export default TaskItem