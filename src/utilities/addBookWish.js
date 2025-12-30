const getStoredWishListData = () => {
  const storedData = localStorage.getItem("wishList");
  if (storedData) {
    const getLocalStoredData = JSON.parse(storedData);
    return getLocalStoredData;
  } else {
    return [];
  }
};

const addStoredWishListData = (id) => {
  const bookStoredData = getStoredWishListData();
  if (bookStoredData.includes(id)) {
    alert("This book is already exist!");
  } else {
    bookStoredData.push(id);
    const data = JSON.stringify(bookStoredData);
    localStorage.setItem("wishList", data);
  }
};

export { addStoredWishListData, getStoredWishListData };
