export default function Todo() {
  return (
    <div>
      <div className="  mt-20  ">
        <div className="flex justify-center">
          <p className="  text-lg text-black font-bold"> TODO LIST</p>
        </div>
        <div className="flex justify-center">
          <input
            className=" border-2 rounded-lg border-black   px-10 py-5"
            type="text"
            id="text"
            placeholder="add text"
          />
          <button className="border-2 border-black  ml-3 rounded-lg">
            {" "}
            ADD{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
const vs = [1, 2, 3, 4, 5, 6];
console.log(vs);
