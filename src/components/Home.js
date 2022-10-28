import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./swiper.css";
import "./home.css";
import { Cart } from "./Cart";
import { useState } from "react";
import Categories from "./Categories";
// import one from "./images/one.jpg";

const carts = [
  {
    id: 1,
    image: "./images/nine.jpg",
    title: "sandles lady",
    color: "green",
    price: "$20",
    Category_name:"lady",
  },
  {
    id: 2,
    image: "./images/one.jpg",
    title: "shoes men",
    color: "brown",
    price: "$40",
    Category_name:"men",

  },
  {
    id: 3,
    image: "./images/eight.jpg",
    title: "crocs",
    color: "Orange",
    price: "$15",
    Category_name:"men",

  },
  {
    id: 4,
    image: "./images/four.jpg",
    title: "shoe lady",
    color: "white",
    price: "$10",
    Category_name:"lady",

  },
  {
    id: 5,
    image: "./images/one.jpg",
    title: "sandles",
    color: "white",
    price: "$20",
    Category_name:"crocs",
  },
  {
    id: 6,
    image: "./images/ten.jpg",
    title: "Lady Shoe",
    color: "white",
    price: "$50",
    Category_name:"lady",
  },
  {
    id: 7,
    image: "./images/cr.jpg",
    title: "Crocs",
    color: "blue",
    price: "$40",
    Category_name:"crocs",
  },
  {
    id: 8,
    image: "./images/three.jpg",
    title: "crocs",
    color: "green",
    price: "$15",
    Category_name:"crocs",
  },
  {
    id: 9,
    image: "./images/five.jpg",
    title: "sandles",
    color: "white",
    price: "$10",
    Category_name:"crocs",
  },
  {
    id: 10,
    image: "./images/seven.jpg",
    title: "Sports Shoes",
    color: "white",
    price: "$20",
    Category_name:"sports",
  },
  {
    id: 11,
    image: "./images/nine.jpg",
    title: "Lady Shoe",
    color: "white",
    price: "$50",
    Category_name:"lady",
  },
  {
    id: 12,
    image: "./images/two.jpg",
    title: "Sports Shoes",
    color: "white",
    price: "$50",
    Category_name:"sports",
  },
];

const Home = () => {
  // console.log(carts);
  const [cartItems, setCartItems] =useState(carts)
  
  const filterItems =(Category_name)=>{
    const results = carts.filter((item) => {
      return item.Category_name === Category_name
    })
    setCartItems(results)
  }
  return (
    <>
      <div className="container  my-5">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./images/one.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/two.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/three.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/five.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/five.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/six.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/seven.jpg" alt="" />
          </SwiperSlide>
          {/* <SwiperSlide><img src="./images/eight.jpg" alt=""/></SwiperSlide> */}
          {/* <SwiperSlide><img src="./images/nine.jpg" alt=""/></SwiperSlide> */}
        </Swiper>

        <h3 className="text-warning">Categories</h3>
        <Categories filterItems={filterItems} />

        <div>
          <h2>
            <span className="text-warning">Popular </span>
            <br /> <span className="mx-5">sales</span>
          </h2>
          <div className="cardcontainer">
            {cartItems.map((cart) => (
              <Cart key={cart.id} cart={cart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
