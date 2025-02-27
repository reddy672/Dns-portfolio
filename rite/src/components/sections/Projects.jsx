import { RevealOnScroll } from "../RevealOnScroll";
import React, { useState } from "react";

// Calculator Component
const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);
  const clear = () => setInput("");
  const calculate = () => {
    try {
      setInput(eval(input));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-gray-200 rounded-md">
      <input className="w-full mb-2 p-2 bg-gray-800" value={input} readOnly />
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"].map(
          (btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === "C") clear();
                else if (btn === "=") calculate();
                else handleClick(btn);
              }}
              className="p-2 bg-pink-700 hover:bg-pink-600 rounded-md"
            >
              {btn}
            </button>
          )
        )}
      </div>
    </div>
  );
};

// To-Do List Component
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-gray-200 rounded-md">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
        className="w-full p-2 bg-gray-800 mb-2"
      />
      <button onClick={addTask} className="p-2 bg-pink-700 rounded-md mb-2">
        Add Task
      </button>
      <ul>
        {tasks.map((t, idx) => (
          <li key={idx} className="bg-gray-800 p-2 my-1 rounded-md">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Tic-Tac-Toe Component
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => (
    <button
      className="w-16 h-16 bg-gray-800 text-2xl"
      onClick={() => handleClick(i)}
    >
      {board[i]}
    </button>
  );

  return (
    <div className="p-4 bg-gray-900 text-gray-200 rounded-md">
      <div className="grid grid-cols-3 gap-1">{Array.from({ length: 9 }, (_, i) => renderSquare(i))}</div>
    </div>
  );
};

// Weather App Component (Simple Example)
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="p-4 bg-gray-900 text-gray-200 rounded-md">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
        className="w-full p-2 bg-gray-800 mb-2"
      />
      <button onClick={fetchWeather} className="p-2 bg-pink-700 rounded-md">
        Get Weather
      </button>
      {weather && (
        <div className="mt-2">
          <p>Temperature: {weather.main?.temp}°C</p>
          <p>Condition: {weather.weather?.[0].description}</p>
        </div>
      )}
    </div>
  );
};

export const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const projects = [
    { title: "Calculator", tech: ["HTML", "CSS", "JavaScript"], component: <Calculator /> },
    { title: "To-Do List", tech: ["React", "CSS"], component: <TodoList /> },
    { title: "Tic-Tac-Toe", tech: ["React", "JavaScript"], component: <TicTacToe /> },
    { title: "Weather App", tech: ["React", "API", "Tailwind"], component: <WeatherApp /> },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#0a0a0a] text-gray-200 py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-400">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-800 bg-white/5 backdrop-blur-md hover:-translate-y-1 hover:border-pink-400/30 transition-all">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span key={key} className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setOpenProject(openProject === index ? null : index)}
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  {openProject === index ? "Close" : "Launch"}
                </button>
                {openProject === index && <div className="mt-4">{project.component}</div>}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
