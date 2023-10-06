import axios from "axios";

export const getAllContacts = async (params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://contact.mediusware.com/api/contacts/?search=${params}`)
      .then(resolve)
      .catch(reject);
  });
};

export const getUSAContacts = async (params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://contact.mediusware.com/api/country-contacts/United%20States/?search=${params}`
      )
      .then(resolve)
      .catch(reject);
  });
};
