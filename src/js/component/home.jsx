import React, { useState } from "react";



//create your first component
const Home = () => {
	const [inputValue, setInputValue,] = useState("");
	const [tareas, setTareas] = useState([]);
	return (
		<div className="container">
			<h1 className="text-center mt-5">Mis Tareas</h1>
			<ul>
			<li><input type="text" 
			onChange={(e) => setInputValue(e.target.value)}
			value={inputValue}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					setTareas(tareas.concat(inputValue));
					setInputValue("")
				}
			}}
			placeholder="Escribe aquí tu tarea"></input></li>
				{tareas.map((item, index) => (
					<li>
						{item} <i class="fas fa-trash-alt" onClick={() => setTareas(tareas.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>
				))}
			</ul>
			<div>{tareas.length} tareas</div>
		</div>
	);
};

export default Home;
