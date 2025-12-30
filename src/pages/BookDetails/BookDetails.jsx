import { useLoaderData, useParams } from "react-router";
import { addStoredData } from "../../utilities/utilities";
import { addStoredWishListData } from "../../utilities/addBookWish";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const booksData = useLoaderData();
  const book = booksData.find((singleBook) => singleBook?.bookId === bookId);

  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleSubmit = (id) => {
    addStoredData(id);
  };

  const handleWishList = (id) => {
    addStoredWishListData(id);
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="md:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="text-sm font-bold mt-4">By: {author}</p>
            <div className="text-slate-200 space-y-4 mt-6">
              <hr />
              <p className="text-slate-600">{category}</p>
              <hr />
            </div>
            <p className="py-6">
              <span className="font-bold">Review:</span> {review}
            </p>
            <div className="flex justify-between w-1/3 mb-4">
              <h4 className="text-slate-600 font-bold">Tag</h4>
              {tags.map((tag, index) => (
                <p key={index} className="text-slate-600">
                  <span className="text-green-500">{tag}</span>
                </p>
              ))}
            </div>
            <hr className="text-slate-200" />
            <div className="mt-4 space-y-3">
              <p className="text-slate-600 font-bold">
                Number of Pages: {totalPages}
              </p>
              <p className="text-slate-600 font-bold">Publisher: {publisher}</p>
              <p className="text-slate-600 font-bold">
                Year of Publishing: {yearOfPublishing}
              </p>
              <p className="text-slate-600 font-bold">
                Number of Pages: {rating}
              </p>
            </div>
            {/* button inner */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleSubmit(id)}
                className="btn duration-200 hover:bg-green-500 hover:text-gray-200"
              >
                Read
              </button>
              <button
                onClick={() => handleWishList(id)}
                className="btn bg-green-500 text-gray-200"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
