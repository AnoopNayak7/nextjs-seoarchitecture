import { Slider } from "antd";
import router from "next/router";
import React, { useState } from "react";

const Searchbar = () => {
  const [isDroped, setDroped] = useState(false);
  const [carBrand, setCarBrand] = useState("Ferrari");
  const [budgetOptions, setbudgetOptions] = useState([0, 0]);
  let budgetSlug = "";

  const handleBudgetSlider = (budget: [number, number]) => {
    setbudgetOptions(budget);
  };

  const carBrandnames = [
    {
      id: 1,
      name: "Ferrari",
    },
    {
      id: 2,
      name: "Lamborgini",
    },
    {
      id: 3,
      name: "Rolls Royce",
    },
    {
      id: 4,
      name: "Bugati",
    },
  ];

  console.log("Car brand===>", carBrand);

  if (budgetOptions[0] === 0) {
    console.log("Budget 0 wala", budgetOptions[0]);
    budgetSlug = `below-${budgetOptions[1]}`;
    console.log("Budget Slug", budgetSlug);
  } else if (budgetOptions[0] !== 0) {
    console.log("Budget 0 wala", budgetOptions[0]);
    budgetSlug = `${budgetOptions[0]}-lakhs-to-${budgetOptions[1]}-lakhs`;
    console.log("Budget Slug", budgetSlug);
  }

  const handleCarBrand = (value:any) => {
    setCarBrand(value)
  }
  return (
    <div>
      <form className="flex bxsdw pl-5 space-x-10 items-center rounded relative">
        <div className="px-10">
          <select defaultValue="ferrari" className="border-none outline-none" onChange={handleCarBrand}>
            {carBrandnames?.map((car) => (
              <option value={car?.name} key={car?.id}>
                {car?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="px-5" onClick={() => setDroped(true)}>
          <div>
            {budgetOptions[0]}lakhs - {budgetOptions[1]}lakhs
          </div>
        </div>
        <div className="absolute -bottom-20 left-32 py-5 px-5 w-[200px]">
          {isDroped && (
            <Slider
              range={{ draggableTrack: true }}
              defaultValue={[20, 50]}
              onChange={handleBudgetSlider}
            />
          )}
        </div>
        <div>
          <select className="border-none outline-none" name="hand" id="hand">
            <option value="volvo">3rd hand</option>
            <option value="saab">2nd hand</option>
            <option value="opel">1st hand</option>
          </select>
        </div>

        <button
          className="bg-orange-500 text-white px-3 py-3 rounded-r"
          onClick={() =>
            router.push(
              `/filter/${carBrand}/${budgetSlug}/`
            )
          }
        >
          Search
        </button>
      </form>
      <p>BudgetSlug : {budgetSlug}</p>
      <p>CarBrand : {carBrand}</p>
    </div>
  );
};

export default Searchbar;

