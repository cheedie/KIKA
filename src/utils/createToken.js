const createToken = () => {
  const token = localStorage.getItem("currentUser");
  if (!token) return null;
  else {
    const retrieveToken = JSON.parse(token);
    return retrieveToken //.token;
  }
};

export default createToken;
