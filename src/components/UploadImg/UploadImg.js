import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./UploadImg.css";

function UploadImg() {
  const inputRef = useRef(null);
  const [image, setImage] = useState(0);

  const handleImgClick = () => {
    inputRef.current.click();
  };
  const handleImgChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const image = e.target.files[0];
      const imageType = image.type;

      // Kiểm tra kiểu file
      if (imageType !== "image/jpg" && imageType !== "image/png") {
        alert("Kiểu file nên là .jpg và .png");
        return;
      }

      setImage(image); // Chỉ cập nhật hình ảnh nếu kiểu tệp hợp lệ
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Choose An Image</h2>
      <div className="" onClick={handleImgClick}>
        <div className=" d-flex  justify-content-center ">
          {image ? (
            <img
              className="d-flex justify-content-center"
              src={URL.createObjectURL(image)}
              alt="Uploaded"
            />
          ) : (
            <img
              className="upload d-flex justify-content-center"
              src="/upload.jpg"
              alt="Default"
            />
          )}
        </div>

        <Form.Group controlId="formFile" className="mb-3 d-none ">
          <Form.Control type="file" ref={inputRef} onChange={handleImgChange} />
        </Form.Group>
        {/* <div className="d-flex  justify-content-center ">
          <Button type="submit" variant="primary" className="me-3">
            Upload
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default UploadImg;
