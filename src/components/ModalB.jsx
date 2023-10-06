import React, { useEffect, useState } from "react";
import { getUSAContacts } from "../api/fetchData";
import { useNavigate } from "react-router-dom";

const ModalB = () => {
  const [usaContacts, setUsaContacts] = useState([]);
  const [params, setParams] = useState("");
  const navigate = useNavigate();

  const onSubmitSearch = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    getUSAContacts(params).then(({ data }) => {
      setUsaContacts(data.results);
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
            navigate("/all-contacts");
          }}
          className="btn btn-primary"
        >
          All Contacts
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
          {usaContacts.length ?
            usaContacts.map((data) => (
              <tr key={data.id}>
                <td scope="col">{data.phone}</td>
                <td scope="col">{data.country.name}</td>
              </tr>
            )): "Loading..."}
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

export default ModalB;
