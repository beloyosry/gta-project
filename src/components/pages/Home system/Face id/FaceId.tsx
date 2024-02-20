import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import faceId from "../../../assets/images/faceid.png";

type Props = {
  buttonSx: object;
  success: boolean;
}
export default function FaceId({
  buttonSx,
  success,
}: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ m: 1, position: "relative" }}>
        {success ? (
          <div
            className="flex flex-col justify-center items-center gap-[15px] rounded-[21px] mb-[100px] p-6"
            style={{
              backgroundColor: "rgb(39 38 38)",
            }}
          >
            <Fab
              aria-label="save"
              color="primary"
              sx={buttonSx}
              style={{ width: "70px", height: "70px" }}
            >
              <CheckIcon />
            </Fab>
            <span>Face ID</span>
          </div>
        ) : (
          <div
            className="flex flex-col justify-center items-center gap-[15px] rounded-[21px] mb-[100px] p-6"
            style={{
              backgroundColor: "rgb(39 38 38)",
            }}
          >
            <img src={faceId} alt="" width={70} />
            {/* </Fab> */}
            <span className="">Face ID</span>
          </div>
        )}
      </Box>
    </Box>
  );
}
