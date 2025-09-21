import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (!title) return;
    dispatch(
      addTask({ id: Date.now(), title, description, status: "todo" })
    );
    setTitle("");
    setDescription("");
  };

  const renderColumn = (status, label) => (
    <div style={{ flex: 1, margin: "0 10px" }}>
      <h2>{label}</h2>
      {tasks
        .filter((t) => t.status === status)
        .map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
    </div>
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Creative Upaay Dashboard</h1>
      <div>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div style={{ display: "flex", marginTop: 20 }}>
        {renderColumn("todo", "To Do")}
        {renderColumn("inprogress", "In Progress")}
        {renderColumn("done", "Done")}
      </div>
    </div>
  );
};

export default Dashboard;

