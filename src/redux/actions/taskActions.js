export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const moveTask = (id, status) => ({
  type: "MOVE_TASK",
  payload: { id, status },
});

