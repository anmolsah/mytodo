import  { useState } from "react";

import Tag from "./Tag";
import '../styles/TaskForm.css';

const TaskForm = ({ setTasks }) => {
 const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  console.log("Task Data :", taskData);

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <div className="search_container">
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        </div>
        <div className="task_form_bottom_line">
          <div className="tag_select">
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
            <Tag
              tagName="PersonalDevelopment"
              selectTag={selectTag}
              selected={checkTag("PersonalDevelopment")}
            />
              <Tag
                  tagName="Work"
                  selectTag={selectTag}
                  selected={checkTag("Work")}
              />
                <Tag
                    tagName="Fitness"
                    selectTag={selectTag}
                    selected={checkTag("Fitness")}
                />
                <Tag
                    tagName="Household"
                    selectTag={selectTag}
                    selected={checkTag("Household")}
                />
                <Tag
                    tagName="Social"
                    selectTag={selectTag}
                    selected={checkTag("Social")}
                />
                <Tag
                    tagName="Hobbies"
                    selectTag={selectTag}
                    selected={checkTag("Hobbies")}
                />
                <Tag
                    tagName="Finance"
                    selectTag={selectTag}
                    selected={checkTag("Finance")}
                />
                <Tag
                    tagName="Travel"
                    selectTag={selectTag}
                    selected={checkTag("Travel")}
                />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
