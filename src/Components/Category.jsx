import React from "react";
import CategoryCard from "./CategoryCard";
import category1 from "../assets/category__1.png";
import category4 from "../assets/category__4.webp";
import category8 from "../assets/category__8.webp";
import category7 from "../assets/category__7.webp";
import category2 from "../assets/category__2.webp";
import category5 from "../assets/category__5.webp";
function Category() {
  const data = [
    {
      id: 0,
      title: "Fast Food",
      count: "9 Products",
      image: category1,
    },
    {
      id: 1,
      title: "Bakery",
      count: "7 Products",
      image: category4,
    },
    {
      id: 2,
      title: "Fresh Fruits",
      count: "18 Products",
      image: category8,
    },
    {
      id: 3,
      title: "Soft Drinks",
      count: "9 Products",
      image: category7,
    },
    {
      id: 4,
      title: "Vegitables",
      count: "14 Products",
      image: category2,
    },
    {
      id: 5,
      title: "Sea Food",
      count: "4 Products",
      image: category5,
    },
  ];
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard
            key={el.id}
            title={el.title}
            count={el.count}
            img={el.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
