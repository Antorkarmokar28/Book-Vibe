/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredData } from "../../utilities/utilities";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBook from "../../components/ReadBook/ReadBook";
import WishListBook from "../../components/WishListBook/WishListBook";
import { getStoredWishListData } from "../../utilities/addBookWish";
import { ArrowDown } from "lucide-react";
const ReadList = () => {
  const readListBookData = useLoaderData();
  const [readList, setBookList] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    //get readlist data from to local sotrage
    const getReadListData = getStoredData();
    const readBook = getReadListData.map((id) => parseInt(id));
    const myReadBook = readListBookData.filter((book) =>
      readBook.includes(book.bookId)
    );
    setBookList(myReadBook);
  }, [readListBookData]);

  useEffect(() => {
    const getWishListData = getStoredWishListData();
    const wishListBook = getWishListData.map((id) => parseInt(id));
    const myWishListBook = readListBookData.filter((book) =>
      wishListBook.includes(book?.bookId)
    );
    setWishList(myWishListBook);
  }, [readListBookData]);

  return (
    <div className="container mx-auto px-4 mt-20 mb-20">
      <div className="bg-gray-200 p-6 rounded-2xl text-center mb-20">
        <h1 className="text-4xl font-bold">Books</h1>
        {/* short button with dropdown */}
        <div className="dropdown dropdown-bottom dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-600 text-gray-200 duration-300 hover:bg-green-500"
          >
            Short By <ArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Short by:Pages</a>
            </li>
            <li>
              <a>Short by:Review</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read book list</Tab>
          <Tab>My wish book list</Tab>
        </TabList>
        <TabPanel>
          {readList.map((singleBook) => (
            <ReadBook key={singleBook?.bookId} singleBook={singleBook} />
          ))}
        </TabPanel>
        <TabPanel>
          {wishList.map((singleBook) => (
            <WishListBook key={singleBook?.bookId} singleBook={singleBook} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
