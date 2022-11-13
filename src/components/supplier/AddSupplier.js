import { FormLabel, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { addCustomer } from "../../services/customerService";
import { getSupplier, addSupplier } from "../../services/supplierService";

const style = {
  position: "absolute",
  top: "40%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AddSupplier = ({setSuppliers}) => {
  const [inputs, setInputs] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [supplier, setSupplier] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await addSupplier(inputs).then((res) => {
      getSupplier().then((res) => {
        setSuppliers(res.data);
      });
      setOpen(false);
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const customersCallAndMarchant = () => {
    getSupplier().then((res) => {
      console.log("res", res);
      setSupplier(res.data);
    });
  };

  useEffect(() => {
    customersCallAndMarchant();
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>Add Supplier</Button>
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
            <h2
              style={{
                textAlign: "center",
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            >
              Add Supplier
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>Enter Name:</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>
                  Enter your mobile number:
                </FormLabel>
                <Input
                  type="text"
                  name="phone"
                  value={inputs.phone || ""}
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

export default AddSupplier;
