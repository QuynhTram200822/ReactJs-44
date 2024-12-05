export const getStudents = () => {
  const students = localStorage.getItem('students');
  return students ? JSON.parse(students) : [];
};

export const saveStudents = (students) => {
  localStorage.setItem('students', JSON.stringify(students));
};

export const addStudents = (student) => {
  const students = getStudents();

  let newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

  const newStudent = {
    id: newId, // Gán id mới
    name: student.name,
    age: student.age
  };
  students.push(newStudent);
  saveStudents(students);
}

export const deleteStudents = (id) => {
  let students = getStudents();
  const updatedStudents = students.filter(student => student.id !== id);
  
  saveStudents(updatedStudents); 
}

export const editStudents = (id, updatedInfo) => {
  const students = getStudents();
  const studentIndex = students.findIndex(student => student.id === id);
  if (studentIndex !== -1) {
    // Cập nhật thông tin sinh viên
    students[studentIndex] = {
      ...students[studentIndex],
      ...updatedInfo
    }; // Cập nhật thông tin sinh viên
    saveStudents(students); 
  }
}