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
import SideBar from "../Sidebar/SideBar";
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
    <div style={{ display: "flex" }}>
      <SideBar />
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "100%",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "blue",
          }}
        >
          Add Manufacturer Company
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", margin: "auto", marginTop: "5px" }}
        >
          <div className="form-row flex m-2">
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Medicine Company Name</label>
              <input
                type="text"
                name="companyName"
                value={inputs.companyName || ""}
                onChange={handleChange}
                className="form-control"
                id="name"
              />
            </div>
            {/* make a row with the description fields in text area */}
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Enter Address</label>
              <input
                type="text"
                name="address"
                value={inputs.address || ""}
                onChange={handleChange}
                className="form-control"
                id="address"
              />
            </div>
          </div>

          <div className="form-row flex m-2">
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Medicine City</label>
              <input
                type="text"
                name="cityName"
                value={inputs.cityName || ""}
                onChange={handleChange}
                className="form-control"
                id="cityname"
              />
            </div>
            {/* make a row with the description fields in text area */}
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Enter Email</label>
              <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                className="form-control"
                id="email"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddManufactures;

{
  /* <Button onClick={handleOpen}>Add Manufactor</Button>
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
      </Modal> */
}
