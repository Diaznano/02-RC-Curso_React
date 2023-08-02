import "./styles/features.css";
import { NavBar } from "./components/navbar/NavBar";
import { Task } from "./components/task/Task";

const dataTask = [
  {
    id: 1,
    taskTitle: "tarea Default 1",
  },
  {
    id: 2,
    taskTitle: "tarea Default 2",
  },
  {
    id: 3,
    taskTitle: "tarea Default 3",
  },
];

export const TaskHead = () => {
  return (
    <>
      <NavBar />
      <Task taskData={dataTask} />
    </>
  );
};
