import React, { useState } from "react";
import { Map, FormFooter } from "../";


function GetLocation() {
  const [address, setAddress] = useState("");

  const handleAddressChange = (address) => {
    setAddress(address);
  };

  return (
    <div className="lg:h-screen">
      <div className="text-center lg:pt-[7vw] pt-[20vw]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full lg:w-1/2 pr-2">
            <div className="flex flex-col items-center justify-center ">
              <h2 className="text-3xl lg:text-4xl font-semibold text-primary-black p-2">
                Location
              </h2>
              <p className="text-xl text-gray-700">
                Enter the exact address on the map to your
                spot's location.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full">
            <div className="w-full h-full relative ">
              <Map onAddressChange={handleAddressChange} className="absolute top-0 left-0 w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        text="Start Sharing Your Space: Step 1"
        to="/become-a-host/spot-details"
        // disabledCondition={!address}
      />
    </div>
  );
}

export default GetLocation;
