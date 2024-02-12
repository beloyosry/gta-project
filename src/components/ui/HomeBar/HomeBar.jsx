import { useNavigate } from "react-router-dom";

const HomeBar = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className=" cursor-pointer absolute bottom-3 left-[50%] transform -translate-x-[50%] z-10 "
    >
      <div className=" bg-white h-1 w-[115px] mx-auto rounded-sm"></div>
    </div>
  );
};

export default HomeBar;
