import { use } from "react";
import Book from "../../components/Book/Book";

const Books = ({ booksPromise }) => {
  const booksData = use(booksPromise);
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 mb-20">
        {booksData.map((book) => (
          <Book key={book?.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
