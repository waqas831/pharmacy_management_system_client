import { FormLabel, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { addCustomer } from "../../services/customerService";

import { getCustomers } from "./../../services/customerService";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import InputLabel from "@mui/material/InputLabel";

const style = {
  position: "absolute",
  top: "40%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AddProducts = ({ supplier, manufacture }) => {
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

  useEffect(() => {}, []);

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
            <h2
              style={{
                textAlign: "center",
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            >
              Add Product
            </h2>
            <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>Medicine name:</FormLabel>
                  <Input
                    type="text"
                    name="username"
                    value={inputs.name || ""}
                    onChange={handleChange}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>
                    Medicine price:
                  </FormLabel>
                  <Input
                    type="text"
                    name="username"
                    value={inputs.price || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* first div */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>
                    Medicine quantity:
                  </FormLabel>
                  <Input
                    type="text"
                    name="username"
                    value={inputs.quantity || ""}
                    onChange={handleChange}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>
                    Medicine description:
                  </FormLabel>
                  <Input
                    type="text"
                    name="username"
                    value={inputs.description || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>
                    Medicine category:
                  </FormLabel>
                  <Input
                    type="text"
                    name="username"
                    value={inputs.category || ""}
                    onChange={handleChange}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>
                    Medicine image:
                  </FormLabel>
                  <Input
                    type="text"
                    name="username"
                    value={inputs.image || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>purchaseData:</FormLabel>
                  <Input
                    type="date"
                    name="purchaseData"
                    value={inputs.purchaseData || ""}
                    onChange={handleChange}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>expireDate:</FormLabel>
                  <Input
                    type="date"
                    name="expireDate"
                    value={inputs.expireDate || ""}
                    onChange={handleChange}
                  />
                </div>

                {/* second div */}
              </div>
              {/* supplier and marchant */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>
                    Selct Supplier:
                  </FormLabel>
                  <Box>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                    >
                      {supplier.map((item, index) => {
                        return (
                          <option key={index} value={item._id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </NativeSelect>
                  </Box>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>Marchant:</FormLabel>
                  <Box>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                    >
                      {manufacture.map((item, index) => {
                        return (
                          <option key={index} value={item._id}>
                            {item.companyName}
                          </option>
                        );
                      })}
                    </NativeSelect>
                  </Box>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <FormLabel style={{ width: "50%" }}>Catagory:</FormLabel>
                  <Input
                    type="text"
                    name="username"
                    value={inputs.Supplier || ""}
                    onChange={handleChange}
                  />
                </div>

                {/* second div */}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                  paddingTop: "10px",
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
