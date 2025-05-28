interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'Franco',
    lastName: 'Reyes',
    age: 25,
    location: 'San Jose de Carrasco',
  };
  
  const student2: Student = {
    firstName: 'Flavia',
    lastName: 'Nicolai',
    age: 25,
    location: 'Shangrila',
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Crear tabla
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
  
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
  
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  