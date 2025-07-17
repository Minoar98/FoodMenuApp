import SingleMenu from "./SingleMenu";

const MenuList = ({ menus }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {menus.map((menu) => (
        <SingleMenu key={menu.id} {...menu} />
      ))}
    </div>
  );
};

export default MenuList;
