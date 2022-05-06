var API_URL: string = "";

if (process.env.NODE_ENV === "development") {
  API_URL = "https://api.justcookindia.com/api";
}

if (process.env.NODE_ENV === "production") {
  API_URL = "https://api.justcookindia.com/api";
}
export { API_URL };
