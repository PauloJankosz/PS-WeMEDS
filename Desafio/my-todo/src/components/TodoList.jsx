import "../styles/TodoList.css";

const TodoList = () => (
  <div className="container">
    <h1>Minha lista de tarefas</h1>
    <div className="retangulo">
      <input className="todo-input" defaultValue="Adicione uma nova tarefa" />
      <button className="todo-button">
        <span class="todo-button-text">Enviar</span>
      </button>
    </div>
  </div>
);

export default TodoList;
