export const apiConfig = {
  baseUrl: 'https://backmesto.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ localStorage.getItem("token") }`,
  }
};

export const authConfig = {
  baseUrl: 'https://backmesto.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
};