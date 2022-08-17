import React, { useContext } from 'react'
import { Context } from '../Context';

function Task({ task, style }) {

    const { setTask } = useContext(Context);

    return (
        <p style={style} onClick={() => { setTask(task) }}>{task.name}</p>
    )
}

export default Task
