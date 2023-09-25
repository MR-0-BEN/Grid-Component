const Grid = () => {
  return (
    <div className="flex h-[100vh] content-center justify-center">
      <section className=" mx-auto grid drop-shadow-2xl max-lg:my-[3%] max-lg:w-[350px] max-lg:grid-rows-[0.8fr_0.6fr_0.6fr]   lg:my-auto  lg:w-[750px] lg:grid-cols-2 lg:content-center lg:justify-center ">
        <div className=" w-full rounded-t-lg bg-white pr-6 py-10 pl-6 max-lg:row-start-1 max-lg:w-full max-lg:py-8 lg:col-start-1 lg:col-end-3 ">
          <h2 className="mb-6 text-2xl font-bold text-[#29b3b0]">
            Join our community
          </h2>
          <p className=" mb-3 text-lg font-semibold text-[#bfdf32]">
            30-day, hassle-free money back guarantee
          </p>
          <p className="text-[#a4a9af]">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className=" bg-[#2bb3b1] px-12 py-10 pl-6 text-white  max-lg:row-start-2 max-lg:w-full max-lg:px-8 max-lg:py-6 max-lg:pt-3 lg:col-start-1 lg:rounded-bl-lg">
          <h3 className="font- mb-4 text-lg font-medium">
            Monthly Subscription
          </h3>
          <h4 className="relative mb-2 text-3xl font-bold">
            $29
            <span className="absolute  left-[30%] top-[20%] text-sm font-light opacity-60 ">
              per month
            </span>
          </h4>
          <p className="mb-8 text-[15px]">Full access for less than $1 a day</p>
          <button className="block w-full rounded-md bg-[#bfdf32] py-3 text-center font-bold">
            Sign Up
          </button>
        </div>
        <div className=" bg-[#4abebd] px-12 py-10 pl-6 font-semibold text-white max-lg:row-start-3 max-lg:mb-5 max-lg:w-full max-lg:rounded-b-lg max-lg:pt-3 lg:col-start-2 lg:rounded-br-lg">
          <h3 className="mb-4 text-lg capitalize">why us</h3>
          <p className="text-sm font-light opacity-70">
            Tutorials by industry experts <br />
            Peer & expert code review <br />
            Coding exercises <br />
            Access to our GitHub repos <br />
            Community forum <br />
            Flashcard decks <br />
            New videos every week <br />
          </p>
        </div>
      </section>
    </div>
  );
};
export default Grid;
