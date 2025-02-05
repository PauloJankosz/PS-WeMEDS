import "../styles/TodoList.css";
import { useState } from "react";
import TaskList from "./TaskList";

const TodoList = () => {
  const [value, setValue] = useState("Adicionar uma nova tarefa");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (value.trim() !== "" && value !== "Adicionar uma nova tarefa") {
      const newTask = {
        text: value,
        status: "pendente",
      };
      setTasks([...tasks, newTask]);
      setValue("Adicionar uma nova tarefa");
    }
  };

  return (
    <div className="container">
      <h1>Minha lista de tarefas</h1>
      <div className="box">
        <input
          className="todo-input"
          value={value}
          onFocus={() => value === "Adicionar uma nova tarefa" && setValue("")}
          onChange={(element) => setValue(element.target.value)}
        />
        <button className="todo-button" onClick={handleAddTask}>
          <span className="todo-button-text">Enviar</span>
        </button>
      </div>

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TodoList;
