import { BookOpenText, MapPin, UserPen } from "lucide-react";
import { Link } from "react-router";

const WishListBook = ({ singleBook }) => {
  const {
    bookId,
    bookName,
    image,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;
  return (
    <div className="md:flex gap-4 items-center border border-slate-200 rounded-2xl p-4 mb-4">
      <figure className="p-8 bg-gray-200 rounded-2xl">
        <img className="h-60" src={image} alt="Book" />
      </figure>
      <div className="">
        <h2 className="text-3xl font-bold">{bookName}</h2>
        <p className="text-sm mt-5">
          <span className="font-bold">By:</span> {author}
        </p>
        <div className="md:flex gap-6 mt-5">
          <p className="text-sm font-bold">Tag</p>
          {tags.map((tag, i) => (
            <div key={i} className="badge badge-soft badge-success">
              {tag}
            </div>
          ))}
          <p className="flex gap-2 items-center">
            <MapPin />
            Year of Publishing {yearOfPublishing}
          </p>
        </div>
        <div className="flex gap-6 mt-5">
          <p className="flex text-slate-600 items-center font-bold gap-3">
            <UserPen /> Publisher: {publisher}
          </p>
          <p className="flex text-slate-600 items-center font-bold gap-3">
            <BookOpenText /> Page: {totalPages}
          </p>
        </div>
        <div className="flex gap-4 items-center pt-4 border-t border-slate-300 mt-5">
          <div className="badge badge-dash badge-info">
            Category: {category}
          </div>
          <div className="badge badge-dash badge-warning">Rating: {rating}</div>
          <Link to={`/bookDetails/${bookId}`}>
            <button className="btn bg-green-600 hover:bg-green-500 text-gray-200 rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishListBook;
