import PropTypes from "prop-types";

const AppIcon = ({ img, name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`hover:border-2 border-white text-white text-center w-[18%] h-full flex items-center justify-center flex-col`}
    >
      <img src={img && img} alt={name && name} className="w-full" />
      <p className="text-[10px] mt-[2px]">{name && name}</p>
    </div>
  );
};

AppIcon.propTypes = {
  img: PropTypes?.string?.isRequired,
  name: PropTypes?.string?.isRequired,
  onClick: PropTypes.func,
};

export default AppIcon;
