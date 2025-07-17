import { useState } from "react";

import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import data from "./data";
import MenuList from "./components/MenuList";

// ["breakfast", "dinner", "shakes"];
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menus, setMenus] = useState(data);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenus(data);
    } else {
      const newItems = data.filter((item) => item.category === category);
      setMenus(newItems);
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <section className="w-[90vw] max-w-5xl mx-auto">
        <Header />
        <CategoryList categories={categories} onFilterItems={filterItems} />
        <MenuList menus={menus} />
      </section>
    </main>
  );
}

export default App;
