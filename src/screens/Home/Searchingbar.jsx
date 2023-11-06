import React from "react";
import mainBackgroundImg from "../../assets/images/mainBackground.jpg";
import "./Searchingbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button } from "react-bootstrap";

const searchBoxStyle = {
  marginLeft: "25%",
  width: "50%",
  height: "43px",
  flexShrink: 0,
  borderRadius: "35rem",
  background: "#FFF",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
};

const searchButtonStyle = {
  width: "59px",
  height: "49.6px",
  marginLeft: "-70px",
  marginTop: "-3.2px",
  marginRight: "300px",
  flexShrink: 0,
  backgroundImage: "url('/searchBtn.png')",
  backgroundSize: "cover",
  border: "none",
};

function Searchingbar() {
  return (
    <div id="main-wrap">
      <img src={mainBackgroundImg} alt="mainBackgroundImg" id="mainImg" />

      <div id="searching">
        <Form className="d-flex me-auto">
          <FormControl
            type="search"
            placeholder="지역, 식당 또는 음식"
            className="me-2"
            style={searchBoxStyle}
            aria-label="Search"
          />

          <Button variant="white" type="submit" style={searchButtonStyle} />
        </Form>
      </div>
    </div>
  );
}

export default Searchingbar;

//이게 모달창으로 구현한 건데,, 이렇게 하면 안 될 것 같아요.
// import React, { useState } from "react";
// import mainBackgroundImg from "../../assets/images/mainBackground.jpg";
// import "./Searchingbar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Form, FormControl, Button, Modal } from "react-bootstrap";
// import "./Modal.css";

// const searchBoxStyle = {
//   marginLeft: "32%",
//   width: "39%",
//   height: "43px",
//   flexShrink: 0,
//   borderRadius: "35rem",
//   background: "#FFF",
//   boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
// };

// const searchButtonStyle = {
//   width: "59px",
//   height: "49.6px",
//   marginLeft: "-70px",
//   marginTop: "-3.2px",
//   marginRight: "300px",
//   flexShrink: 0,
//   backgroundImage: "url('/searchBtn.png')",
//   backgroundSize: "cover",
//   border: "none",
// };

// function Searchingbar() {
//   const [showModal, setShowModal] = useState(false);

//   const handleFormClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div id="main-wrap">
//       <img src={mainBackgroundImg} alt="mainBackgroundImg" id="mainImg" />

//       <div id="searching">
//         <Form className="d-flex me-auto" onClick={handleFormClick}>
//           <FormControl
//             type="search"
//             placeholder="지역, 식당 또는 음식"
//             className="me-2"
//             style={searchBoxStyle}
//             aria-label="Search"
//           />

//           <Button variant="white" type="submit" style={searchButtonStyle} />
//         </Form>
//       </div>

//       <Modal show={showModal} onHide={handleCloseModal} className="modal-wrap">
//         <Modal.Header closeButton className="modal-dialog">
//           <Modal.Title className="modal-title">Modal Title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="modal-content modal-body">
//           {/* Add the content for your modal here */}
//           This is the modal content.
//         </Modal.Body>
//         <Modal.Footer className="modal-footer">
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Searchingbar;
