import "../styles/TodoList.css";
import { useState } from "react";
import TaskList from "./TaskList";
import Icon from "@mdi/react";
import { mdiHelpBoxOutline } from "@mdi/js";

const TodoList = () => {
  const [value, setValue] = useState("Criar uma nova tarefa");
  const [tasks, setTasks] = useState([]);
  const [showHelp, setShowHelp] = useState(false);

  const handleAddTask = () => {
    if (value.trim() !== "" && value !== "Criar uma nova tarefa") {
      const newTask = {
        text: value,
        status: "pendente",
      };
      setTasks([...tasks, newTask]);
      setValue("Criar uma nova tarefa");
    }
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="container">
      <h1>Minha lista de tarefas</h1>
      <div className="box">
        <input
          className="todo-input"
          value={value}
          maxLength={90}
          onFocus={() => value === "Criar uma nova tarefa" && setValue("")}
          onChange={(element) => setValue(element.target.value)}
        />
        <button className="todo-button" onClick={handleAddTask}>
          <span className="todo-button-text">Criar</span>
        </button>
        <button className="todo-button-help" onClick={toggleHelp}>
          Ajuda
          <Icon path={mdiHelpBoxOutline} size={1} />
        </button>
      </div>
      {showHelp && (
        <div className="help-card">
          <button onClick={toggleHelp}>Fechar</button>
        </div>
      )}
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TodoList;
