import { FormLabel, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { getSupplier, addSupplier } from "../../services/supplierService";
import SideBar from "../Sidebar/SideBar";
import { useNavigate } from "react-router-dom";

const AddSupplier = () => {
  const navigate=useNavigate()
  const [inputs, setInputs] = useState({});

  const [supplier, setSupplier] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("inputs", inputs);
    await addSupplier(inputs).then((res) => {
     console.log("res", res);
     if(res.data.msg==="Success"){
      navigate("/supplier")
       
     }
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
    <>
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
            Add Supplier
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", margin: "auto", marginTop: "5px" }}
          >
            <div className="form-row flex m-2">
              <div className="form-group col-md-6 ml-1 mr-1">
                <label htmlFor="name">Supplier Name</label>
                <input
                  type="text"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Supplier Name"
                />
              </div>

              <div className="form-group col-md-6 ml-1 mr-1">
                <label htmlFor="name">Enter Mobile</label>
                <input
                  type="text"
                  name="phone"
                  value={inputs.phone || ""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Supplier Phone"
                />
              </div>
            </div>

            <div className="form-row flex m-2">
              <div className="form-group col-md-6 ml-1 mr-1">
                <label htmlFor="name">Medicine Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={inputs.address || ""}
                  onChange={handleChange}
                />
              </div>
              {/* make a row with the description fields in text area */}
              <div className="form-group col-md-6 ml-1 mr-1">
                <label htmlFor="name">Enter Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button
            style={{marginLeft:"45%",marginTop:"10px",marginBottom:"10px",width:"20%",backgroundColor:"blue",color:"white",borderRadius:"10px"}}
            type="submit">Add Supplier</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSupplier;

{
  /* <Button onClick={handleOpen}>Add Supplier</Button>
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
                <FormLabel style={{ width: "40%" }}>
                Enter your mobile number:
                </FormLabel>
                <Input
                
                />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>
                  Enter your address:
                  </FormLabel>
                <Input
                
                />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel style={{ width: "40%" }}>
                Enter your email:
                </FormLabel>
                <Input
                
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
                import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { addCustomer } from "../../services/customerService";
import Supplier from './Supplier';
              </Modal> */
}
