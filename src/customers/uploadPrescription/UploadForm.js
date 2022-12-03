import React,{useState,useEffect} from "react";
import SideBar from "../../components/Sidebar/SideBar";
import "../product.css";
const UploadForm = () => {
  const [file, setFile] = React.useState('');

  useEffect(() => {
    console.log(file);
  }, [file]);
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="upload_form">
          {/* heading */}
          <h3 className="prescription_heading">Upload Prescription</h3>
          {/* form */}
          <form className="prescription_form">
            <div className="prescription_form__wrapper">
              <div className="prescription_form__wrapper__input">
                <label
                  htmlFor="name"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "black",
                    marginRight: "1rem",
                  }}
                >
                  Name:
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "black",
                    marginRight: "1rem",
                  }}
                />
                {file && (
                  <div className="prescription_form__wrapper__input__file">
                    <p>{file.name}</p>
                    {/* show selected image */}
                    <div style={{
                    // style the image container
                    width: "400px",
                    height: "200px",
                    overflow: "hidden",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    }}>
                      <img
                      style={{
                        width: "100%",
                        height: "100%",
                       
                        
                      }}

                        src={URL.createObjectURL(file)}
                        alt="selected image"
                      />
                    </div>

                    <button style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "black",
                      marginRight: "1rem",
                      marginTop: "1rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "10px",
                      border: "none",
                      backgroundColor: "white",
                      cursor: "pointer",
                      textAlign: "center",
                      
                    }}
                    onClick={() => setFile('')}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
              <button
                type="submit"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "black",
                  marginRight: "1rem",
                  // make a button with border
                  border: "1px solid black",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  backgroundColor: "white",
                  outline: "none",
                  marginTop: "1rem",
                  marginLeft: "10rem",
                  // center the button
                }}
                className="prescription_form_button"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadForm;
