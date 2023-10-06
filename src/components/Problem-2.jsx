import React from "react";
import { useNavigate } from "react-router-dom";

const Problem2 = () => {
  const navigate = useNavigate();
  const onChangeContactListType = (name) => {
    if (name === "allContacts") {
      navigate("/all-contacts");
    } else if (name === "usaContacts") {
      navigate("/usa-contacts");
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            name="allContacts"
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => onChangeContactListType("allContacts")}
          >
            All Contacts
          </button>
          <button
            name="usaContacts"
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => onChangeContactListType("usaContacts")}
          >
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
