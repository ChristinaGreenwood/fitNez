import React, { useEffect, useState } from "react";

function Food() {
  const [food, setFood] = useState([]);
  console.log("first", food);
  useEffect(() => {
    fetch("https://6l91j.wiremockapi.cloud/thing/8")
      .then((res) => res.json())
      .then((data) => setFood(data));
    //   .then((data) => console.log(data));
  }, []);

  return (
    <div>
      Food
      {/* <div>{food.map((el) =>)}</div> */}
    </div>
  );
}
export default Food;
