const getStoredData = () => {
  const storedData = localStorage.getItem("booksList");
  if (storedData) {
    const getLocalStoredData = JSON.parse(storedData);
    return getLocalStoredData;
  } else {
    return [];
  }
};

const addStoredData = (id) => {
  const bookStoredData = getStoredData();
  if (bookStoredData.includes(id)) {
    alert("This book is already exist!");
  } else {
    bookStoredData.push(id);
    const data = JSON.stringify(bookStoredData);
    localStorage.setItem("booksList", data);
  }
};

export { addStoredData, getStoredData };
