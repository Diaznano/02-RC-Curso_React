import PropTypes from "prop-types";

export const TaskItem = ({ dataTaskItem, onDelete }) => {
  const { id, taskTitle } = dataTaskItem;
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div key={id} className="col-sm-3 gy-3 gx-3">
      <div className="card" style={{ width: "18rem;" }}>
        <div className="card-body">
          <h5 className="card-title ">Tarea N°: {id}</h5>
          <p className="card-text">{taskTitle}</p>
          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  dataTaskItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      taskTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
