import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { TaskAdd } from "./TaskAdd";
import PropTypes from "prop-types";

export const Task = ({ taskData }) => {
  const [addDataCard, setAddDataCard] = useState(taskData);

  const onClickAdd = (newTask) => {
    const newTaskObj = {
      id: addDataCard[addDataCard.length - 1].id + 1,
      taskTitle: newTask,
    };

    setAddDataCard([...addDataCard, newTaskObj]);
  };

  const onDeleteTask = (taskId) => {
    const updatedTasks = addDataCard.filter((task) => task.id !== taskId);
    setAddDataCard(updatedTasks);
  };

  return (
    <div className="container py-5" id="featured-3">
      <h2 className="border-bottom text-white">MIS TAREAS</h2>
      <TaskAdd onClickAdd={onClickAdd} />
      <div className="row">
        {addDataCard.map((data) => (
          <TaskItem key={data.id} dataTaskItem={data} onDelete={onDeleteTask} />
        ))}
      </div>
    </div>
  );
};

Task.propTypes = {
  taskData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      taskTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};
