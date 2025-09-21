import React from "react";
import { useDispatch } from "react-redux";
import { moveTask } from "../redux/actions/taskActions";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-3 rounded mb-2">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <select
        value={task.status}
        onChange={(e) => dispatch(moveTask(task.id, e.target.value))}
      >
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default TaskCard;
