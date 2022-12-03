import { FormLabel, Input } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { addPharmasist, getPharmasist } from "../services/pharmasistService";
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
const AddPharmasistModel = ({ setPharmasist }) => {
  const [inputs, setInputs] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addPharmasist(inputs).then((res) => {
      getPharmasist().then((res) => {
        setPharmasist(res.data);
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
    <>
      <div className="w-full">
        <Button
          onClick={handleOpen}
          className="bg-blue-500 hover:bg-blue-700 text-black pb-2 font-bold py-2 px-4 mb-2 rounded border border-blue-700"
        >
          Add Pharmasist
        </Button>
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
                <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-1 rounded mb-2 shadow-lg ">
                  <FormLabel className="text-xl font-bold text-black-600 mb-2 mr-2 w-1/2 ">
                    Enter Fist name:
                  </FormLabel>
                  <Input
                    className="w-1/2 text-black-600 text-xl font-bold border-none"
                    placeholder="Enter First Name"
                    type="text"
                    name="fname"
                    value={inputs.fname || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-1 rounded mb-2 shadow-lg">
                  <FormLabel className="text-xl font-bold text-black-600 mb-2 mr-2 w-1/2 ">
                    Enter Last name:
                  </FormLabel>
                  <Input
                    className="w-1/2 "
                    type="text"
                    name="lname"
                    value={inputs.lname || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-1 rounded mb-2 shadow-lg">
                  <FormLabel className="text-xl font-bold text-black-600 mb-2 mr-2 w-1/2 ">
                    Enter your age:
                  </FormLabel>
                  <Input
                    className="w-1/2 text-black-600 text-xl font-bold border-none"
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-1 rounded mb-2 shadow-lg">
                  <FormLabel className="text-xl font-bold text-black-600 mb-2 mr-2 w-1/2 ">
                    Enter your gender:
                  </FormLabel>
                  <Input
                    className="w-1/2 text-black-600 text-xl font-bold border-none"
                    type="text"
                    name="gender"
                    value={inputs.gender || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-1 rounded mb-2 shadow-lg">
                  <FormLabel className="text-xl font-bold text-black-600 mb-2 mr-2 w-1/2 ">
                    Enter your address:
                  </FormLabel>
                  <Input
                    className="w-1/2 text-black-600 text-xl font-bold border-none"
                    type="text"
                    name="address"
                    value={inputs.address || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-1 rounded mb-2 shadow-lg">
                  <FormLabel className="text-xl font-bold text-black-600 mb-2 mr-2 w-1/2 ">
                    Enter your email:
                  </FormLabel>
                  <Input
                    className="w-1/2 text-black-600 text-xl font-bold border-none"
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-1 rounded mb-2 shadow-lg">
                  <FormLabel className="text-xl font-bold text-black-600 mb-2 mr-2 w-1/2 ">
                    Enter your password:
                  </FormLabel>
                  <Input
                    className="w-1/2 text-black-600 text-xl font-bold border-none"
                    id="my-input"
                    type="text"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                    aria-describedby="my-helper-text"
                  />
                </div>
                <div className=" p-1 rounded mb-2 shadow-lg text-center mt-2 pt-2">
                  <input type="submit" />
                </div>
              </form>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default AddPharmasistModel;
