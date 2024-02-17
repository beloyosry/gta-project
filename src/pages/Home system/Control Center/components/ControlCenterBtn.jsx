const ControlCenterBtn = ({
  // eslint-disable-next-line react/prop-types
  handleClick,
  // eslint-disable-next-line react/prop-types
  question,
  // eslint-disable-next-line react/prop-types
  firstBg,
  // eslint-disable-next-line react/prop-types
  secondBg,
  // eslint-disable-next-line react/prop-types
  pading,
  // eslint-disable-next-line react/prop-types
  svgIcon,
  // eslint-disable-next-line react/prop-types
  round,
  // eslint-disable-next-line react/prop-types
  iconWidth,
  // eslint-disable-next-line react/prop-types
  iconHeight,
}) => {
  return (
    <div
      className={`${
        !question ? firstBg : secondBg
      } ${pading}  ${round} flex items-center justify-center`}
      onClick={handleClick}
      style={{ width: iconWidth, height: iconHeight }}
    >
      {/* <img src={image} alt="" className={imgWidth} /> */}
      {svgIcon}
      {/* <div className="w-full h-full">{svgIcon}</div> */}
    </div>
  );
};

export default ControlCenterBtn;
