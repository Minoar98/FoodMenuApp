const SingleMenu = ({ title, price, desc, img }) => {
  return (
    <article
      className="
        flex flex-col md:flex-row
        gap-4 md:gap-6
        items-start md:items-center
        p-4
        rounded-lg
        bg-white shadow-sm
        transition-all
      
      "
    >
      <img
        src={img}
        alt="title"
        className="
         w-full sm:w-52 md:w-44
          h-40 md:h-36
          object-cover
          rounded-md
          border-2 border-amber-500
          flex-shrink-0
        "
      />
      <main className="flex-1">
        <div className="flex justify-between items-center border-b border-dotted border-gray-400 pb-1 mb-2">
          <h4 className="text-base md:text-lg font-semibold text-gray-800">
            {title}
          </h4>
          <span className="text-amber-500 font-bold text-sm md:text-base">
            ${price}
          </span>
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {desc}
        </p>
      </main>
    </article>
  );
};

export default SingleMenu;
