import React, { useState } from "react";
import { Slider } from "antd";
import router, { Router } from "next/router";
import { carData } from "../../data/index";
import Searchbar from "../global/Searchbar";



const index = () => {
  

  return (
    <div>
      <div className="flex h-[30vh] justify-center items-center">
        <Searchbar />
      </div>
      <div className="text-2xl font-bold text-blue-600 mb-5">Ferarri</div>
      <hr />
      <div className="grid grid-cols-4 gap-5 my-5">
        {carData.map(
          (item) =>
            item.brand.includes("ferrari") && (
              <div className="border border-gray-300 rounded-md">
                <img className="w-full h-[200px]" src={item.url} />
                <div className="px-2 py-1">
                  <div className="font-semibold text-xl">{item.name}</div>
                </div>
              </div>
            )
        )}
      </div>

      <div className="text-2xl font-bold mt-20 text-blue-600 mb-5">Lamborgini</div>
      <hr />
      <div className="grid grid-cols-4 gap-5 my-5">
        {carData.map(
          (item) =>
            item.brand.includes("lamborgini") && (
              <div className="border border-gray-300 rounded-md">
                <img className="w-full h-[200px]" src={item.url} />
                <div className="px-2 py-1">
                  <div className="font-semibold text-xl">{item.name}</div>
                </div>
              </div>
            )
        )}
      </div>
      {/* <p>BudgetSlug : {budgetSlug}</p>
      <p>CarBrand : {carBrand}</p> */}
    </div>
  );
};

export default index;
