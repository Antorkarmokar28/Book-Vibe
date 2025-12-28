const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    category,
    publisher,
    rating,
    totalPages,
  } = book;
  console.log(book);
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="bg-slate-100 h-80">
        <img className="w-48 h-64" src={image} alt="Books" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
