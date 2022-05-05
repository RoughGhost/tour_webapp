import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const signin = (FormData) => API.post("/users/signin", FormData);
export const signup = (FormData) => API.post("/users/signup", FormData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);

export const createTour = (tourData) => API.post("/tour", tourData);
