import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const booksData = useLoaderData();
  const book = booksData.find((singleBook) => singleBook?.bookId === bookId);
  const { bookName, image, author, category, review, tags } = book;
  console.log(book);
  return (
    <div className="container mx-auto mt-20 mb-20">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
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
            {tags.map((tag) => (
              <p className="flex text-slate-600">
                Tag <span className="text-green-500">{tag}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
