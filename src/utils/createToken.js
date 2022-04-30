const createToken = () => {
  const token = localStorage.getItem("currentUser");
  if (!token) return null;
  else {
    const retrieveToken = JSON.parse(token);
    console.log("Retrieved",retrieveToken.role)
    return retrieveToken //.token;
  }
};

export default createToken;
