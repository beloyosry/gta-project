const ControlCenterBtn = ({
  // eslint-disable-next-line react/prop-types
  image,
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
  imgWidth,
  // eslint-disable-next-line react/prop-types
  divWidth,
}) => {
  return (
    <div
      className={`${
        !question ? firstBg : secondBg
      } ${divWidth}  ${pading} rounded-[50%] flex items-center justify-center`}
      onClick={handleClick}
    >
      <img src={image} alt="" className={imgWidth} />
    </div>
  );
};

export default ControlCenterBtn;
