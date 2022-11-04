import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Task } from "./utils/Interface";
import Views from "./Components/Views/Views";
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyles from "./Components/Styles/Global";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [selectedTasks, setSelectedTasks] = useState<Array<string>>([]);

  const createNewTask: any = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const addSelectedTask: any = (id: string) =>
    setSelectedTasks([...selectedTasks, id]);

  const removeSelectedTask: any = (id: string) => {
    const newArr: string[] = selectedTasks.filter(
      (selected) => selected !== id
    );
    setSelectedTasks([...newArr]);
  };

  const deleteTasks: any = () => {
    const newTasks: Task[] = tasks.filter(
      (task) => !selectedTasks.includes(task.id)
    );
    setTasks([...newTasks]);
    setSelectedTasks([]);
  };

  return (
    <BrowserRouter>
      <GlobalStyles />
      <div style={{ minHeight: "100vh", width: "100%" }}>
        <Navbar />
        <Views
          tasks={tasks}
          setTasks={createNewTask}
          selectedTasks={selectedTasks}
          addSelectedTask={addSelectedTask}
          removeSelectedTask={removeSelectedTask}
          deleteTasks={deleteTasks}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
