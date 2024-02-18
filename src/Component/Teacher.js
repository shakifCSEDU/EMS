import React from 'react'

const Teacher = () => {
  
  const teachers = [
    {
      id:1,
      name:"Upama Kabir",
      email:"upama@gmail.com",
      phone:"01323538383",
      facultyName:"CSE",
      designation : "Professor",
    },
    {
      id:2,
      name:"Mosaddek Kamal",
      email:"mosaddek@gmail.com",
      phone:"013323383",
      facultyName:"EEE",
      designation : "Lecturer",
    },
    {
      id:3,
      name:"Abu ahmed",
      email:"abu@gmail.com",
      phone:"0434538383",
      facultyName:"Robotics",
      designation : "Professor",
    },
    {
      id:4,
      name:"Saifuddin Tarek",
      email:"tarek@gmail.com",
      phone:"01323538383",
      facultyName:"Bangla",
      designation : "Professor",
    },
    
  ]


  return (
    <div className='p-5'>
      <h1 className='font-bold text-2xl p-5'>Teacher info table</h1>
      <table className='border border-black'>
        <thead className='border border-black'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Faculty Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
        {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.phone}</td>
              <td>{teacher.facultyName}</td>
              <td>{teacher.designation}</td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>



  )
}

export default Teacher