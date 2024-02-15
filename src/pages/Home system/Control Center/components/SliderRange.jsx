import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const handleBtnVolum = (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
  }
};

// eslint-disable-next-line react/prop-types
const SliderRange = ({ image, valueNum }) => {
  return (
    <Box sx={{ height: 130, width: 90, position: "relative" }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
          width: 70,
          color: "#FFFFFF",
        }}
        orientation="vertical"
        defaultValue={valueNum}
        aria-label="Temperature"
        valueLabelDisplay="auto"
        onKeyDown={handleBtnVolum}
      />
      <img src={image} alt="" className="absolute left-10 bottom-3 w-7" />
    </Box>
  );
};

export default SliderRange;
