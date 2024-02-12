import searchIcon from "../../assets/images/search.png";
import mic from "../../assets/images/mic.png";
import { useEffect } from "react";

const namesOfNumbers = [
  { name: "Amr Mohamed" },
  { name: "Mohamed Ahmed " },
  { name: "Belal Ahmed" },
  { name: "Ahmed Islam" },
  { name: "Eman Basem" },
  { name: "Basel Sayed" },
  { name: "Selem Bobo" },
  { name: "Marwa" },
  { name: "Maged" },
  { name: "Magdy" },
  { name: "Mazen" },
  { name: "Nour" },
  { name: "Nady" },
  { name: "Nadia" },
  { name: "Tarek" },
  { name: "Serag" },
  { name: "Messi" },
  { name: "Ronaldo" },
  { name: "Zidan" },
  { name: "Zaha" },
  { name: "Saka" },
  { name: "Esraa" },
  { name: "Esam" },
];

const enLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const kk = () => {
  const letters = new Set();

  for (const koko of namesOfNumbers) {
    console.log(koko.name.toUpperCase().slice(0, 1), "char");
    letters.add(koko.name.toUpperCase().slice(0, 1));
    // const char = koko.name.toUpperCase().slice(0, 1);
    // if (!temp_array.includes(char)) temp_array.push(char);
  }

  const arr = [];
  for (const char of letters.values()) {
    arr.push(char);
  }

  const sortedArr = arr.sort();

  const result = [];

  for (const letter of sortedArr) {
    console.log(letter, "koko");

    result.push(
      <>
        <div
          key={letter}
          style={{ backgroundColor: "#2C2C2E" }}
          className="w-full px-2"
        >
          {letter}
        </div>
        {namesOfNumbers.map((name) => {
          if (name.name.toLowerCase().startsWith(letter.toLowerCase())) {
            return (
              <p
                key={name.name}
                style={{ borderColor: "#2C2C2E" }}
                className="border border-b-1 border-t-0 border-r-0 border-l-0  ml-2"
              >
                {name.name}
              </p>
            );
          }
        })}
      </>
    );
  }

  return result;
};

const Contacts = () => {
  useEffect(() => {
    kk();
  }, []);
  return (
    <div className="relative text-white flex flex-col justify-start items-start h-[80vh] mt-[50px]">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <button className="text-sm text-blue-500">Groups</button>
          <button className="text-sm text-blue-500">Add</button>
        </div>
        <div className="mt-3">
          {/* <!--Search button--> */}
          <div className="mb-3 ">
            <div className="relative flex justify-between items-center mb-4 px-2 w-full flex-wrap">
              <div color="light " className="flex justify-center items-center ">
                <button className="py-3" type="button" id="button-addon1">
                  <img src={searchIcon} alt="" className="w-full " />
                </button>
                <input
                  type="search"
                  className=" rounded-l bg-transparent pl-1 text-base font-normal outline-none dark:placeholder:text-neutral-700 "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />
              </div>
              <div>
                <img src={mic} alt="" className="w-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="allnum w-full overflow-y-auto noScroll">{kk()}</div>
      <div className="absolute right-0 top-[20%] text-[10px] text-blue-500">
        {enLetters.map((letter) => {
          return (
            <span className="block" key={letter}>
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
