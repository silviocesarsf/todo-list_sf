import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CardComp from "./Components/CardComp/CardComp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hero from "./assets/undraw_healthy_habit_kwe6.svg";

function App() {
	const [text, setText] = useState("");
	const [list, setList] = useState([]);
	const [id, setId] = useState(0);

	const handleCreateTodo = () => {
		if (!text) {
			return toast.warn("Digite alguma tarefa", {
				position: "top-right",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
		let objTodo = {
			text: text,
			id: id,
		};
		setId(id + 1);
		setList([...list, objTodo]);
		setText("");
		console.log(list);
	};

	const handleDeleteItem = (id) => {
		let filtered = list.filter((item) => item.id != id);
		setList(filtered);
		console.log(filtered);
	};

	const listLength = list.length;

	return (
		<div className="wrapper">
			<ToastContainer />
			<div className="title-todo">
				<h1>
					Todo<span>List</span>
				</h1>
			</div>
			<div className="form-todo">
				<input
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button onClick={handleCreateTodo}>Add</button>
			</div>
			<div className="list-todo">
				{list.length > 0 && `${listLength} tarefas criadas.`}
				{list.length === 0 && (
					<div className="empty">
						<p>Crie alguma tarefa !</p>
						<img
							src={hero}
							alt=""
						/>
					</div>
				)}
				{list.length > 0 &&
					list.map((todo) => (
						<CardComp
							key={todo.id}
							todo={todo}
							handleDeleteItem={handleDeleteItem}
						/>
					))}
			</div>
		</div>
	);
}

export default App;
