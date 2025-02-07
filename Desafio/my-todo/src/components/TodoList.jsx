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
    <div className="todo-container">
      <h1>Minha lista de tarefas</h1>
      <div className="todo-box">
        <input
          className="todo-input"
          value={value}
          maxLength={70}
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
        <div className="todo-help-card">
          <p>
            A criação de tarefa tem o limite de 90 caractéres, e irá criar uma
            tarefa pendente
          </p>
          <p>
            Dentro do bloco de tarefas, existe o filtro de tarefas selecionadas,
            exibindo todas as tarefas, as pendentes e as concluídas
          </p>
          <p>Ao concluir uma tarefa, mude seu status</p>
          <p>
            Caso a tarefa tenha sido concluída, e não seja mais necessária,
            utilize a ação de excluir
          </p>
          <button onClick={toggleHelp} class="todo-close-help-card">
            Fechar
          </button>
        </div>
      )}
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TodoList;
