import { FormLabel, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Customers from "./Customers";
import {
  addCustomer,
  getCustomers,
  editCustomer,
} from "../../services/customerService";
import SideBar from "../Sidebar/SideBar";
const AddCustomer = ({
  setCustomers,
  setOpen,
  open,
  editMode,
  setEditMode,
  singleCustomer,
}) => {
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
  const [inputs, setInputs] = useState({ singleCustomer });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [customerId, setCustomersId] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editMode) {
      const data = {
        name: inputs.name,
        age: inputs.age,
        address: inputs.address,
        email: inputs.email,
        gender: inputs.gender,
        number: inputs.number,
      };
      await editCustomer(customerId, data).then((res) => {
        if (res.data.msg === "Success") {
          getCustomers().then((res) => {
            setCustomers(res.data);
          });
          setOpen(false);
        } else {
          alert("something went wrong");
        }
      });
      setEditMode(false);
    } else {
      await addCustomer(inputs).then((res) => {
        if (res.data.msg === "Success") {
          getCustomers().then((res) => {
            setCustomers(res.data);
          });
          setOpen(false);
        } else {
          alert("something went wrong");
        }
      });
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    setInputs((values) => ({ ...values, ...singleCustomer }));
    console.log("singleCustomer", singleCustomer);
    setCustomersId(singleCustomer?._id);
  }, [singleCustomer]);

  return (
    <>
       <div
      style={{ display: "flex",width:'100%' }}
    >
      <SideBar />
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width:'100%',
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "blue",
          }}
        >
          <span
            style={{
              textAlign: "center",
              color: "blue",
              marginTop: "5px",
              marginBottom: "5px",
            }}
            className="badge badge-secondary"
          >
            Add Customer
          </span>
        </h2>
        <form
          onSubmit={handleSubmit}
          // style the form div
          style={{ width: "100%", margin: "auto", marginTop: "5px" }}
        >
          <div className="form-row flex m-2">
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Customer name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                placeholder="Enter Medicine Name"
              />
              {/* make another fields */}
            </div>
            <div className="form-group col-md-6  ml-1 mr-1">
              <label htmlFor="name">Customer age</label>
              <input
                type="number"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
                className="form-control"
                id="age"
              />
            </div>
          </div>
          {/* make form with two fields in a row */}
          <div className="form-row flex m-2">
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Customer Gender</label>
              <input
                type="text"
                name="gender"
                value={inputs.gender || ""}
                onChange={handleChange}
                className="form-control"
                
              />
            </div>
          
          
          </div>
          <div className="form-row flex m-2">
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Customer Number</label>
              <input
                type="text"
                name="number"
                value={inputs.number || ""}
                onChange={handleChange}
                className="form-control"
                id="number"
              />
            </div>
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Customer Address</label>
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
              <label htmlFor="name">Customer Email</label>
              <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {/* <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Manufacture</label>
              <input
                type="text"
                className="form-control"
                id="manufacture"
                name="manufacture"
                onChange={handleChange}
                value={inputs.manufacture}
                placeholder="Enter Product Manufacture"
              />
            </div> */}
          </div>
       
        
        </form>
      </div>
    </div>
      {/* <div>
        <Button onClick={handleOpen}>Add Customer</Button>
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormLabel style={{ width: "40%" }}>Enter Name:</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormLabel style={{ width: "40%" }}>
                    Enter your age:
                  </FormLabel>
                  <Input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                  />
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormLabel style={{ width: "40%" }}>
                    Enter your mobile number:
                  </FormLabel>
                  <Input
                    type="text"
                    name="number"
                    value={inputs.number || ""}
                    onChange={handleChange}
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
      </div> */}
    </>
  );
};

export default AddCustomer;
