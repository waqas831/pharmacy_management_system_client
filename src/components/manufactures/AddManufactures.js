import { FormLabel, Input } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import {
  addManufacture,
  getManufacture,
} from "../../services/manufactureService";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AddManufactures = ({ setManufactures }) => {
  const [inputs, setInputs] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    addManufacture(inputs).then((res) => {
      console.log("res", res);
      getManufacture().then((res) => {
        console.log("res", res);
        setManufactures(res.data.items);
      });
      setOpen(false);
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Manufactor</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>
                  Enter Company name:
                </FormLabel>
                <Input
                  type="text"
                  name="companyName"
                  value={inputs.companyName || ""}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>Enter address:</FormLabel>
                <Input
                  type="text"
                  name="address"
                  value={inputs.address || ""}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>Enter cityName:</FormLabel>
                <Input
                  type="text"
                  name="cityName"
                  value={inputs.cityName || ""}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>
                  Enter your email:
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input type="submit" />
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddManufactures;
