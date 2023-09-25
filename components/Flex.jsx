const Flex = () => {
  return (
    <section className="mx-auto flex h-[100vh] w-[35%] flex-wrap content-center justify-between drop-shadow-2xl ">
      <div className="w-full rounded-t-lg bg-white py-10 pl-12">
        <h2 className="mb-6 text-2xl font-bold text-[#29b3b0]">
          Join our community
        </h2>
        <p className="mb-3 text-lg font-semibold text-[#bfdf32]">
          30-day, hassle-free money back guarantee
        </p>
        <p className="text-[#a4a9af]">
          Gain access to our full library of tutorials along with expert code
          reviews.
        </p>
        <p className="text-[#a4a9af]">
          Perfect for any developers who are serious about honing their skills.
        </p>
      </div>
      <div className="w-1/2 rounded-bl-lg bg-[#2bb3b1] px-12 py-10 text-white">
        <h3 className="font- mb-4 text-lg font-medium">Monthly Subscription</h3>
        <h4 className="relative mb-2 text-3xl font-bold">
          $29
          <span className="absolute left-[35%] top-[20%] text-sm font-light opacity-60">
            per month
          </span>
        </h4>
        <p className="mb-8 text-[15px]">Full access for less than $1 a day</p>
        <button className="block w-full rounded-md bg-[#bfdf32] py-3 text-center font-bold">
          Sign Up
        </button>
      </div>
      <div className="w-1/2 rounded-br-lg bg-[#4abebd] px-12 py-10 font-semibold text-white">
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
  );
};
export default Flex;
