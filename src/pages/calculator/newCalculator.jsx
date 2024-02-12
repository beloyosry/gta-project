import { useState } from "react";
import "./Calculator.css";
const NewCalculator = () => {
  // const [input, setInput] = useState("0");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [opr, setOpr] = useState("");
  const [oprClicked, setOprClicked] = useState(false);
  const [result, setResult] = useState("");

  const handleNumbers = (value) => {
    if (!oprClicked && opr === "") {
      // false
      // set num1
      setNum1((prevInput) =>
        prevInput === "0" || prevInput === "" ? value : prevInput + value
      );
    } else {
      // true
      // set num2
      setNum2((prevInput) =>
        prevInput === "0" || prevInput === "" ? value : prevInput + value
      );
    }
  };

  const handleOperator = (value) => {
    setOprClicked(true);
    setOpr(value);

    if (opr !== "") {
      switch (opr) {
        case "/":
          setResult(Number(num1) / Number(num2));
          break;
        case "*":
          setResult(Number(num1) * Number(num2));
          break;
        case "+":
          setResult(Number(num1) + Number(num2));
          break;
        case "-":
          setResult(Number(num1) - Number(num2));
          break;
        case "%":
          setResult(Number(num1) % Number(num2));
          break;

        default:
          setResult("0");
          break;
      }
    }

    if (opr !== "" && num1 === "") {
      switch (opr) {
        case "/":
          setResult(Number(result) / Number(num2));
          break;
        case "*":
          setResult(Number(result) * Number(num2));
          break;
        case "+":
          setResult(Number(result) + Number(num2));
          break;
        case "-":
          setResult(Number(result) - Number(num2));
          break;
        case "%":
          setResult(Number(result) % Number(num2));
          break;

        default:
          setResult("0");
          break;
      }
    }
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setOpr("");
    setOprClicked(false);
    setResult("");
  };

  const handleEqualBtn = () => {
    // try {
    //   setInput(eval(input).toString());
    // } catch (error) {
    //   setInput("Error");
    // }
    setOprClicked(false);

    switch (opr) {
      case "/":
        setResult(Number(num1) / Number(num2));
        break;
      case "*":
        setResult(Number(num1) * Number(num2));
        break;
      case "+":
        setResult(Number(num1) + Number(num2));
        break;
      case "-":
        setResult(Number(num1) - Number(num2));
        break;
      case "%":
        setResult(Number(num1) % Number(num2));
        break;

      default:
        setResult("0");
        break;
    }
  };

  const showResult = () => {
    if (result !== "") {
      return result;
    } else if (!oprClicked) {
      return num1 === "" ? "0" : num1;
    } else if (oprClicked) {
      return num2 === "" ? "0" : num2 === "0" ? num1 : num2;
    }
  };

  return (
    <div className="text-white flex flex-col justify-end items-start h-[80vh] mt-[40px]">
      <div className="w-full rounded-[70px] bg-black  ">
        <div className="overflow-x-auto overflow-y-hidden text-[51px] mb-[20px] pb-[50px] bg-black text-right rounded-[8px] h-[90px]">
          {showResult()}
        </div>
        <div className="grid grid-cols-4 gap-[15px]">
          <button
            className="calcBtn bg-neutral-400	 text-black"
            onClick={handleClear}
          >
            AC
          </button>
          <button
            className="calcBtn bg-neutral-400	 text-black"
            onClick={() => handleOperator("m")}
          >
            <span>+</span>
            <span>/</span>
            <span>-</span>
          </button>
          <button
            className="calcBtn bg-neutral-400	 text-black "
            onClick={() => handleOperator("%")}
          >
            %
          </button>
          <button
            className={`operator pb-1 ${
              oprClicked && opr === "/" ? "" : "opactiy"
            }`}
            onClick={() => handleOperator("/")}
          >
            /
          </button>

          <button className="calcBtn" onClick={() => handleNumbers("7")}>
            7
          </button>
          <button className="calcBtn" onClick={() => handleNumbers("8")}>
            8
          </button>
          <button className="calcBtn" onClick={() => handleNumbers("9")}>
            9
          </button>
          <button
            className={`operator pt-2 ${
              // oprClicked && opr === "*" ? "" : "opactiy"
              oprClicked && opr === "*" ? "" : "opactiy"
            }`}
            onClick={() => handleOperator("*")}
          >
            *
          </button>

          <button className="calcBtn" onClick={() => handleNumbers("4")}>
            4
          </button>
          <button className="calcBtn" onClick={() => handleNumbers("5")}>
            5
          </button>
          <button className="calcBtn" onClick={() => handleNumbers("6")}>
            6
          </button>
          <button
            className={`operator ${oprClicked && opr === "-" ? "" : "opactiy"}`}
            onClick={() => handleOperator("-")}
          >
            <div className="bg-white w-[20px] h-1 m-auto "></div>
          </button>

          <button className="calcBtn" onClick={() => handleNumbers("1")}>
            1
          </button>
          <button className="calcBtn" onClick={() => handleNumbers("2")}>
            2
          </button>
          <button className="calcBtn" onClick={() => handleNumbers("3")}>
            3
          </button>
          <button
            className={`operator ${oprClicked && opr === "+" ? "" : "opactiy"}`}
            onClick={() => handleOperator("+")}
          >
            +
          </button>
        </div>
        <div className="flex justify-between items-center mt-[10px] w-[101%]">
          <button className="zero" onClick={() => handleNumbers("0")}>
            0
          </button>
          <button className="calcBtn" onClick={() => handleNumbers(".")}>
            .
          </button>
          <button className="operator opactiy" onClick={handleEqualBtn}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCalculator;

// if (value === "m") {
//   const lastIndex = input.lastIndexOf("-");
//   if (lastIndex >= 0 && input.length - 3 === lastIndex) {
//     console.log(" feh minus ya 7ramy");
//   } else {
//     let lastChar = -input[input.length - 1];
//     let temp_input = input.slice(0, -1);
//     let lastInput = temp_input + lastChar;

//     console.log(
//       "input:",
//       input,
//       "lastChar: ",
//       lastChar,
//       "temp_input: ",
//       temp_input,
//       "lastInput :",
//       lastInput,
//       "koko"
//     );
//     setInput((prevInput) => lastInput);
//   }
// } else {
//   setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
// }
