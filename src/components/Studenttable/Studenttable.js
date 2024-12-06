import React, { useRef, useState, useEffect } from "react";
import "./Studenttable.css";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

import { getStudents, addStudents, deleteStudents, editStudents } from "../../storage";

function StudentTable() {
  const [students, setStudents] = useState(getStudents());
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showAlert, setShowAlert] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const handleAlertClose = () => setShowAlert(false);
  const handleAlertShow = (id) => {
    setStudentToDelete(id); // Lưu id sinh viên cần xóa vào state
    setShowAlert(true); // Mở alert xác nhận xóa
  };

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const handleModalEditClose = () => setShowModalEdit(false);
  const handleModalEditShow = (student) => {
    setStudentToEdit(student); // Lưu sinh viên cần sửa
    setName(student.name); // Đặt giá trị name của sinh viên vào state
    setAge(student.age); // Đặt giá trị age của sinh viên vào state
    setShowModalEdit(true); // Mở modal chỉnh sửa
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!name || !age) {
      alert("Please fill in all fields");
      return;
    }

    addStudents({ name, age });

    // Reset form
    setName("");
    setAge("");

    handleClose();
  };

  const handleDeleteStudent = () => {
    if (studentToDelete !== null) {
      deleteStudents(studentToDelete);  // Cập nhật lại danh sách sinh viên
      setShowAlert(false); // Đóng alert
      setStudentToDelete(null); // Reset id sinh viên cần xóa
    }
  };

  const handleEditStudent = (e) => {
    e.preventDefault();
    if (!name || !age) {
      alert('Please fill in all fields');
      return;
    }

    editStudents(studentToEdit.id, { name, age });
    
    setName('');
    setAge('');
    handleModalEditClose();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStudents(getStudents()); // Cập nhật lại state mỗi khi `localStorage` thay đổi
    }, 1000); 

    // Cleanup interval khi component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App ">
      <div className="grid">
        <div className="col-6 col-offset-3  ">
          <div className=" d-flex justify-content-center mb-4  ">
            <h2>Student List</h2>
          </div>
          <Button className="mb-4  " variant="primary" onClick={handleShow}>
            New
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add new Student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name of student"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Age of student"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddStudent}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showModalEdit} onHide={handleModalEditClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name of student"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Age of student"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalEditClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleEditStudent}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Alert
            show={showAlert}
            onHide={handleAlertClose}
            variant="danger"
            onClose={handleAlertClose}
            dismissible
          >
            <Alert.Heading>Are you sure you want to delete?</Alert.Heading>
            <div className="d-flex justify-content-end">
              <Button onClick={handleDeleteStudent} variant="outline-success">
                Yes
              </Button>
            </div>
          </Alert>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>
                    <Button
                      className="me-3"
                      variant="warning"
                      onClick={() => handleModalEditShow(student)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleAlertShow(student.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default StudentTable;
