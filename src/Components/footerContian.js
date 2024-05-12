import React from "react";
export default function FooterContian({ name, data }) {
  return (
    <>
      <div className="Flex text-black mt-20">
        <p className="text-xl">{name}</p>
        <div className="  text-black mt-5">
          {data && data.map((element) => <p className="p-1">{element}</p>)}
        </div>
      </div>
    </>
  );
}
