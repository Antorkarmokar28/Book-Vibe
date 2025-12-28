import heroImage from "../../../public/images/book_banner.png";
const Hero = () => {
  return (
    <div>
      <div className="container mx-auto bg-base-200 px-8 py-10 rounded-2xl">
        <div className="flex justify-between flex-row-reverse items-center">
          <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
              <br /> In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
