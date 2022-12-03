import React, { useState, useEffect } from "react";
import { addProducts } from "../../services/addProductService";
import { getCategories } from "../../services/categoryService";
import SideBar from "../Sidebar/SideBar";
import { getSupplier } from "../../services/supplierService";
import { getManufacture } from "../../services/manufactureService";

const AddProducts = () => {
  const [inputs, setInputs] = useState({});
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [manufactures, setManufactures] = useState([]);
  const getManufacturesData = async () => {
    const res = await getManufacture();
    console.log("res of manufactures", res.data);
    setManufactures(res.data.items);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inputs", inputs);
    addProducts(inputs).then((res) => {
      console.log("res", res);
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
    getSupplier().then((res) => {
      console.log("res", res);
      setSuppliers(res.data);
    });
    getManufacturesData();
  }, []);

  return (
    <div style={{ display: "flex", width: "100%" }}>
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
          <span
            style={{
              textAlign: "center",
              color: "blue",
              marginTop: "5px",
              marginBottom: "5px",
            }}
            className="badge badge-secondary"
          >
            Add Product
          </span>
        </h2>
        <form
          onSubmit={handleSubmit}
          // style the form div
          style={{ width: "100%", margin: "auto", marginTop: "5px" }}
        >
          <div className="form-row flex m-2">
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Medicine name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleChange}
                value={inputs.name}
                placeholder="Enter Medicine Name"
              />
              {/* make another fields */}
            </div>
            <div className="form-group col-md-6  ml-1 mr-1">
              <label htmlFor="name">Medicine price</label>
              <input
                type="Number"
                className="form-control"
                id="price"
                name="price"
                onChange={handleChange}
                value={inputs.price}
                placeholder="Enter Medicine Price"
              />
            </div>
          </div>
          {/* make form with two fields in a row */}
          <div className="form-row flex m-2">
            <div className="form-group col-md-4 ml-1 mr-1">
              <label htmlFor="name">Medicine quantity</label>
              <input
                type="Number"
                className="form-control"
                id="quantity"
                name="quantity"
                onChange={handleChange}
                value={inputs.quantity}
                placeholder="Enter Medicine Quantity"
              />
            </div>
           
            {/* make a row with the description fields in text area */}
            <div className="form-group col-md-4 ml-1 mr-1">
              <label htmlFor="name">Medicine description</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={handleChange}
                value={inputs.description}
                placeholder="Enter Medicine Description"
              />
            </div>
          </div>
          <div className="form-row flex m-2">
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Medicine category</label>
              <select
                type="text"
                className="form-control"
                id="catagory"
                name="catagory"
                onChange={handleChange}
                value={inputs.catagory}
                placeholder="Select Medicine Category"
              >
                <option disabled>Select Catagory</option>
                {categories.map((catagory) => (
                  <option key={catagory._id} value={catagory._id}>
                    {catagory.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Medicine image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleChange}
                value={inputs.image}
                placeholder="Enter Medicine Image"
              />
            </div>
          </div>
        
           
          <div className="form-row flex m-2">
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Medicine Expiry Date</label>
              <input
                type="date"
                className="form-control"
                id="expiryDate"
                name="expiryDate"
                onChange={handleChange}
                value={inputs.expiryDate}
                placeholder="Enter Medicine Expiry Date"
              />
            </div>
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Medicine Manufacturing Date</label>
              <input
                type="date"
                className="form-control"
                id="manufactureDate"
                name="manufactureDate"
                onChange={handleChange}
                value={inputs.manufactureDate}
                placeholder="Enter Medicine Manufacturing Date"
              />
            </div>
          </div>
          {/* medicine supplier and manufacture  with dropdown */}
          <div className="form-row flex m-2">
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Medicine Supplier</label>
              <select
                type="text"
                className="form-control"
                id="supplier"
                name="supplier"
                onChange={handleChange}
                value={inputs.supplier}
                placeholder="Enter Medicine Supplier"
              >
                <option disabled>Select Supplier</option>
                {suppliers.map((supplier) => (
                  <option key={supplier._id} value={supplier._id}>
                    {supplier.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6 ml-1 mr-1">
              <label htmlFor="name">Medicine Manufacture</label>
              <select
                type="text"
                className="form-control"
                id="manufacture"
                name="manufacture"
                onChange={handleChange}
                value={inputs.manufacture}
                placeholder="Enter Medicine Manufacture"
              >
                <option disabled>Select Manufacture</option>
                {manufactures.map((manufacture) => (
                  <option key={manufacture._id} value={manufacture._id}>
                    {manufacture.companyName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

//    <Modal
// aria-labelledby="transition-modal-title"
// aria-describedby="transition-modal-description"
// open={open}
// onClose={handleClose}
// closeAfterTransition
// BackdropComponent={Backdrop}
// BackdropProps={{
//   timeout: 500,
// }}
// >
// <Fade in={open}>
//   <Box sx={style}>
//     <h2
//       style={{
//         textAlign: "center",
//         fontSize: "20px",
//         paddingBottom: "5px",
//       }}
//     >
//       Add Product
//     </h2>
//     <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
//
//
//
//

//
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "10px",
//         }}
//

//

//         {/* second div */}
//       </div>
//       {/* supplier and marchant */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "10px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignContent: "center",
//             alignSelf: "center",
//             alignItems: "center",
//           }}
//         >
//           <FormLabel style={{ width: "50%" }}>
//             Selct Supplier:
//           </FormLabel>
//           <Box>
//             <NativeSelect
//               onChange={(e) => handleChange(e)}
//               defaultValue={30}
//               inputProps={{
//                 name: "suuplierId",
//                 id: "uncontrolled-native",
//               }}
//             >
//               {supplier.map((item, index) => {
//                 return (
//                   <option key={index} value={item._id}>
//                     {item.name}
//                   </option>
//                 );
//               })}
//             </NativeSelect>
//           </Box>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             alignContent: "center",
//             alignSelf: "center",
//             alignItems: "center",
//           }}
//         >
//           <FormLabel style={{ width: "50%" }}>Marchant:</FormLabel>
//           <Box>
//             <NativeSelect
//               // set the value of the select to the value of the state
//               onChange={(e) => handleChange(e)}
//               defaultValue={30}
//               inputProps={{
//                 name: "ManufactureId",
//                 id: "uncontrolled-native",
//               }}
//             >
//               {manufacture.map((item, index) => {
//                 return (
//                   <option key={index} value={item._id}>
//                     {item.companyName}
//                   </option>
//                 );
//               })}
//             </NativeSelect>
//           </Box>
//         </div>
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div
//           style={{
//             display: "flex",
//             alignContent: "center",
//             alignSelf: "center",
//             alignItems: "center",
//           }}
//         >
//           <FormLabel style={{ width: "50%" }}>Catagory:</FormLabel>
//           <Input
//             type="text"
//             name="username"
//             value={inputs.Supplier || ""}
//             onChange={handleChange}
//           />
//         </div>

//         {/* second div */}
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginTop: "10px",
//           paddingTop: "10px",
//         }}
//       >
//       
//       </div>
//     </form>
//   </Box>
// </Fade>
// </Modal>
