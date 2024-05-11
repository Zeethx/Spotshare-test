import React, { useState } from "react";
import { FormFooter, Button } from "..";
import "..";

function SetPricing() {
  const [hourlyPrice, setHourlyPrice] = useState(5);
  const [dailyPrice, setDailyPrice] = useState(20);
  const [monthlyPrice, setMonthlyPrice] = useState(150);

  return (
    <div className="lg:pt-[7vw] pb-[10vw] h:screen py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-primary-black p-2 text-center">
          Set Pricing
        </h2>
        <p className="text-center pb-20 lg:text-xl text-wrap ">Set hourly, daily, or monthly rates to suit various needs. For unavailable options, simply set the price to $0 to exclude them.</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        {[
          { label: "Hourly", price: hourlyPrice, setter: setHourlyPrice },
          { label: "Daily", price: dailyPrice, setter: setDailyPrice },
          { label: "Monthly", price: monthlyPrice, setter: setMonthlyPrice },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl lg:text-5xl text-primary-black p-2 pb-6 ">
              {item.label}
            </h2>
            <div className="flex items-center justify-center text-6xl lg:text-[8vw]">
              <span className=" text-4xl lg:text-[6vw]">$</span>
              <input
                type="number"
                value={item.price}
                onChange={(e) => item.setter(parseInt(e.target.value))}
                className="w-1/3 md:w-1/5 lg:w-1/2 appearance-none border-none  bg-transparent outline-none"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                  appearance: "none",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <FormFooter text="Set Availability and Pricing: Step 2" to="*" />
    </div>
  );
}

export default SetPricing;
