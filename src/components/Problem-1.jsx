import React, { useState } from "react";
import { getAllContacts, getUSAContacts } from "../api/fetchData";

const whenShowIs = (show, taskType) => {
  if (show === "active" && (taskType === "Active" || taskType === "active"))
    return true;
  else if (
    show === "completed" &&
    (taskType === "Completed" || taskType === "completed")
  )
    return true;
  else if (show === "all") return true;
};

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState();

  const handleClick = (val) => {
    setShow(val);
  };

  const onFormDataChange = (name, value) => {
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, task]);
    setTask(undefined);
  };

  const sortTasks = () => {
    return tasks.sort((a, b) => {
      const statusOrder = { active: 1, Active: 1, complete: 2, Complete: 2 };

      const statusA = statusOrder[a.status] || 3;
      const statusB = statusOrder[b.status] || 3;

      return statusA - statusB;
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={(e) => onSubmitForm(e)}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                onChange={(e) => onFormDataChange("name", e.target.value)}
                type="text"
                className="form-control"
                placeholder="Name"
                required
                value={task?.name || ""}
              />
            </div>
            <div className="col-auto">
              <input
                onChange={(e) => onFormDataChange("status", e.target.value)}
                type="text"
                className="form-control"
                placeholder="Status"
                required
                value={task?.status || ""}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortTasks().map(
                (data, key) =>
                  whenShowIs(show, data.status) && (
                    <tr key={key}>
                      <th scope="col">{data.name}</th>
                      <th scope="col">{data.status}</th>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
