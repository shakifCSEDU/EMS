import React from 'react'

const Student = () => {

  const students = [
    {
      id:1,
      name:"Md Shakif Sahriar",
      email:"shakif@gmail.com",
      phone:"01859538383",
      departmentName:"CSE",
      batchNo : "25",
      advisorName:"Upama kabir"
    },
    {
      id:2,
      name:"Asif Ahmed",
      email:"asif@gmail.com",
      phone:"0133438383",
      departmentName:"EEE",
      batchNo : "23",
      advisorName:"Mosaddek kamal"
    },
    {
      id:3,
      name:"Shah Ali rafi",
      email:"rafi@gmail.com",
      phone:"09432438383",
      departmentName:"Robotics",
      batchNo : "15",
      advisorName:"Kamal hossain"
    },
    {
      id:4,
      name:"Farhad nayeem",
      email:"farhad@gmail.com",
      phone:"01832338383",
      departmentName:"PENTA",
      batchNo : "13",
      advisorName:"Abu ahmed"
    }
  ]


  return (
    <div className='p-5'>
      <h1 className='font-bold text-2xl p-5'>Student Info Table</h1>
      <table className='border border-black'>
        <thead className='border border-black'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department Name</th>
            <th>Batch no</th>
            <th>Advisor name</th>
          </tr>
        </thead>
        <tbody>
        {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.departmentName}</td>
              <td>{student.batchNo}</td>
              <td>{student.advisorName}</td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  )
}

export default Student