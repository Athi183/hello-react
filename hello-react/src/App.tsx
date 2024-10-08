import './index.css';
import TaskCard from './TaskCard';
import React from 'react';
interface Task {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const App: React.FC = () => {
  const pendingTasks: Task[] = [
    { title: "Build the website with static content", dueDate: "10th April", assigneeName: "Rohit S" },
    { title: "Add a blog", dueDate: "22nd March", assigneeName: "Rohit M" },
  ];

  const doneTasks: Task[] = [
    { title: "Design the mockup", completedAtDate: "10th April", assigneeName: "Rohit M" },
    { title: "Get the approval from principal", completedAtDate: "20th April", assigneeName: "Ajay S" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold">Smarter Tasks</h1>
          <input
            type="text"
            className="border rounded px-2 py-1"
            placeholder="Search..."
          />
        </div>

        {/* Project Title */}
        <h2 className="text-2xl font-semibold mb-6">
          Project: Graduation Final Year Project (Revamp College Website)
        </h2>

        {/* Task Sections */}
        <div className="grid grid-cols-2 gap-8">
          {/* Pending Tasks */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Pending</h3>
            {pendingTasks.map((task, index) => (
              <TaskCard
                key={index}
                title={task.title}
                dueDate={task.dueDate}
                assigneeName={task.assigneeName}
              />
            ))}
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              + New Task
            </button>
          </div>

          {/* Done Tasks */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Done</h3>
            {doneTasks.map((task, index) => (
              <TaskCard
                key={index}
                title={task.title}
                completedAtDate={task.completedAtDate}
                assigneeName={task.assigneeName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
