import React, { useState } from "react";



//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [tareas, setTareas] = useState([]);

	return (
		<div className="container">
			<h1 className="text-center mt-5">Mis Tareas</h1>
			<ul className="list-group">
				<li>
					<input 
						type="text" 
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === "Enter" && inputValue.trim() !== "") {
								// Usamos .concat() para añadir la nueva tarea
								setTareas(tareas.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="Escribe aquí tu tarea"
					/>
				</li>
				{tareas.length === 0 ? (
					<li className="list-group-item text-center text-muted">No hay tareas pendientes</li>
				) : (
					tareas.map((item, index) => (
						<li key={index} className="list-group-item d-flex justify-content-between">
							<span>{item}</span>
							<i 
								className="fas fa-trash-alt eliminar"
								onClick={() => setTareas(tareas.filter((_, currentIndex) => index !== currentIndex))}
							></i>
						</li>
					))
				)}
			</ul>
			{tareas.length > 0 && (
				<div className="text-center mt-2">{tareas.length} {tareas.length === 1 ? "tarea" : "tareas"}</div>
			)}
		</div>
	);
};



export default Home;
