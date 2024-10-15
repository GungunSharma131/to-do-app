import React, {useState} from "react";

function ToDolist(){
    const [task, settask] = useState([]);
    const [newtask , setnewtask] = useState("");
    const addTask = ()=> {
        if(newtask !== ''){
           settask([...task, {Text : newtask, completed: false}]);
           setnewtask('');
        }
    };

   
    const deleteTask = (index) =>{
    const updatedTask = task.filter((_, i) =>  i !== index);
    settask(updatedTask);
    }

    const toggleTaskCompletion = (index) => {
    const updatedTask = task.map((task, i) => i === index ? {...task, completed: !task.completed} : task);
    settask(updatedTask);
  }

    return(
        <>
        <div className="list-box">
            <div className="list-box2">
                <input 
                type="text" 
                className="box-1"
                value={newtask}
                onChange={(e) => setnewtask(e.target.value)}
                />
                </div>
                <button 
                className="btn-box" 
                type="add"
                onClick={addTask}
                >ADD TASK</button>
                <ul className="list-1">
                {task.map((task, index) => (
                <li 
                className =  {task.completed ? 'completed' : ''}
                key={index}
                    
                >
                <span onClick={() => toggleTaskCompletion(index)}>
                {task.Text}
                </span>
                <button className="btn btn-danger btn-box1" 
                onClick={() => 
                deleteTask
                (index)}>
                &#10060;
                </button>
                </li>
               ) )}
            </ul>

        </div>
        </>
    )
}
export default ToDolist