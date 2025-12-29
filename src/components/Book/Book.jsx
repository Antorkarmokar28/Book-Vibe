import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    image,
    category,
    publisher,
    rating,
    tags,
    yearOfPublishing,
  } = book;

  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure className="bg-slate-100 h-80">
          <img className="w-48 h-64" src={image} alt="Books" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            {tags.map((tag, index) => (
              <p key={index} className="text-green-500 font-bold">
                {tag}
              </p>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge bg-green-500 text-gray-200">
              {yearOfPublishing}
            </div>
          </h2>
          <p>Book by: {publisher}</p>
          <div className="card-actions justify-end border-t border-dashed mt-4">
            <div className="mt-4 flex gap-4">
              <div className="badge badge-outline text-green-500">
                {category}
              </div>
              <div className="badge badge-outline text-green-500">
                {rating}
                <Star />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
