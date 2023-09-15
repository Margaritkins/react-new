import queryString from "query-string";
import { API } from "../constants";
/**
 *
 * @param {object} options
 * @param {number} options.results
 * @param {number} options.page
 * @returns {promise}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    results: API.RESULTS,
    page: API.PAGE,
    seed: API.KEY,
    nat: API.NAT,
  };
  const readyOptions = { ...defaultOptions, ...options };

  return fetch(`${API.URL}?${queryString.stringify(readyOptions)}`).then(
    (response) => response.json()
  );
};

export const getUsersJSON = () =>
  fetch("/data/users.json").then((responce) => responce.json());

export const getEventsJSON = () =>
  fetch("/data/events.json").then((responce) => responce.json());

export const getProductsJSON = () =>
  fetch("data/products.json").then((responce) => responce.json());
