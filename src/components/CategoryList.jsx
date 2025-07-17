import { useState } from "react";

const CategoryList = ({ categories, onFilterItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  console.log("selectedCategory:----", selectedCategory);

  return (
    <div
      className=" flex flex-wrap justify-center
        gap-1.5 sm:gap-2.5 md:gap-4 lg:gap-6 xl:gap-8
        mb-4 sm:mb-6 md:mb-8 lg:mb-10
        mx-auto max-w-6xl"
    >
      {categories.map((category, index) => (
        <button
          // onClick={() => onFilterItems(category)}
          key={index}
          className={`px-3 sm:px-4 md:px-5 py-1 sm:py-1.5
              text-sm sm:text-base md:text-lg
              rounded-full capitalize transition-colors duration-200 ${
                category === selectedCategory
                  ? "underline text-amber-500 font-bold"
                  : ""
              }`}
          onClick={() => {
            onFilterItems(category);
            setSelectedCategory(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
