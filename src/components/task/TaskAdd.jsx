import PropTypes from "prop-types";
import { useState } from "react";

export const TaskAdd = ({ onClickAdd }) => {
  const [newTask, setNewTask] = useState("");
  const onChangeAddTask = (event) => {
    setNewTask(event.target.value);
  };

  const saveTask = () => {
    onClickAdd(newTask);
    setNewTask("");
  };

  return (
    <>
      <div className="mb-3 col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar una tarea"
          value={newTask}
          onChange={(event) => onChangeAddTask(event)}
        />
      </div>
      <div className="mb-3 col-5">
        <button className="btn btn-success" onClick={saveTask}>
          AGREGAR
        </button>
      </div>
    </>
  );
};

TaskAdd.propTypes = {
  onSetTask: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
  onClickAdd: PropTypes.func.isRequired,
};
