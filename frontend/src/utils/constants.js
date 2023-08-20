export const apiConfig = {
  baseUrl: 'http://backmesto.nomoreparties.co/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ localStorage.getItem("token") }`,
  }
};

export const authConfig = {
  baseUrl: 'http://backmesto.nomoreparties.co/',
  headers: {
    'Content-Type': 'application/json'
  }
};