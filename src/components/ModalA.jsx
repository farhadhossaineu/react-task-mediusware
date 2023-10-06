import React, { useEffect, useState } from "react";
import { getAllContacts } from "../api/fetchData";
import { useNavigate } from "react-router-dom";

const ModalA = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [params, setParams] = useState("");
  const navigate = useNavigate();

  const onSubmitSearch = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getAllContacts(params).then(({ data }) => {
      setAllContacts(data.results);
    });
  }, [params]);
  return (
    <div className="container">
      <div
        className="input-group"
        style={{
          marginBottom: "2rem",
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <form onSubmit={(e) => onSubmitSearch(e)}>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="search-button"
            onChange={(e) => setParams(e.target.value)}
          />
        </form>
        <button
          onClick={() => {
            navigate("/usa-contacts");
          }}
          className="btn btn-primary"
        >
          USA Contacts
        </button>
      </div>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Phone number</th>
          </tr>
        </thead>
        <tbody>
          {allContacts.length > 0 &&
            allContacts.map((data) => (
              <tr key={data.id}>
                <td scope="col">{data.phone}</td>
                <td scope="col">{data.country.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <button
          onClick={() => {
            navigate("/problem-2");
          }}
          className="btn btn-danger"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalA;
