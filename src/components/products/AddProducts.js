import { FormLabel, Input } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
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
const AddProducts = () => {
  const [inputs, setInputs] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Product</Button>
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
                  Enter Pharmasist name:
                </FormLabel>
                <Input
                  type="text"
                  name="username"
                  value={inputs.username || ""}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>Enter your age:</FormLabel>
                <Input
                  type="number"
                  name="age"
                  value={inputs.age || ""}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>
                  Enter your gender:
                </FormLabel>
                <Input
                  type="text"
                  name="gender"
                  value={inputs.gender || ""}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>
                  Enter your address:
                </FormLabel>
                <Input
                  type="text"
                  name="address"
                  value={inputs.address || ""}
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>
                  Enter your password:
                </FormLabel>
                <Input
                  id="my-input"
                  type="text"
                  name="password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                  aria-describedby="my-helper-text"
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

export default AddProducts;
