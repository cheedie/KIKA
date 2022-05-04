const createToken = async () => {
  const token = localStorage.getItem("currentUser");
  if (!token) return null;
  else {
    const retrieveToken = await JSON.parse(token);
    //console.log("Retrieved", retrieveToken)
    return retrieveToken.token;
  }
};

export default createToken;
