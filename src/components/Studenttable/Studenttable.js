import React, { useRef, useState, useEffect } from "react";
import "./Studenttable.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import InputGroup from 'react-bootstrap/InputGroup';

import { getStudents, addStudents, deleteStudents, editStudents } from "../../storage";

function StudentTable() {
  const [students, setStudents] = useState(getStudents());
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const searchRef = useRef(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showAlert, setShowAlert] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const handleAlertClose = () => setShowAlert(false);
  const handleAlertShow = (id) => {
    setStudentToDelete(id);
    setShowAlert(true);
  };

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const handleModalEditClose = () => setShowModalEdit(false);
  const handleModalEditShow = (student) => {
    setStudentToEdit(student);
    setName(student.name);
    setAge(student.age);
    setShowModalEdit(true);
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!name || !age) {
      alert("Please fill in all fields");
      return;
    }

    addStudents({ name, age });
    setStudents(getStudents());

    setName("");
    setAge("");
    handleClose();
  };

  const handleDeleteStudent = () => {
    if (studentToDelete !== null) {
      deleteStudents(studentToDelete);
      setStudents(getStudents());
      setShowAlert(false);
      setStudentToDelete(null);
    }
  };

  const handleEditStudent = (e) => {
    e.preventDefault();
    if (!name || !age) {
      alert('Please fill in all fields');
      return;
    }

    editStudents(studentToEdit.id, { name, age });
    setStudents(getStudents());
    setName('');
    setAge('');
    handleModalEditClose();
  };

  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  const handleSearch = () => {
    const searchTerm = searchRef.current.value.toLowerCase();
    if (!searchTerm) {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm) ||
        student.age.toString().includes(searchTerm)
      );
      setFilteredStudents(filtered);
    }
  };

  return (
    <div className="App ">
      <div className="container">
        <div className=" ">
          <div className=" d-flex justify-content-center mb-4  ">
            <h2>Student List</h2>
          </div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search"
              ref={searchRef}
              onChange={handleSearch}
            />
          </InputGroup>
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

          {filteredStudents.length === 0 ? (
            <div className="text-center">Not Found</div>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(student => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>
                      <Button
                        className="me-2"
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
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentTable;
