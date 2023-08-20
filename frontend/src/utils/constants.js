export const apiConfig = {
  baseUrl: 'https://localhost:3300',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ localStorage.getItem("token") }`,
  }
};

export const authConfig = {
  baseUrl: 'https://localhost:3300',
  headers: {
    'Content-Type': 'application/json'
  }
};