import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Student from './Student.js'

const StudentsList = () => {
  const [StudentLst, setStudentLst] = useState([])
  const [refreshFlag, setRefreshFlag] = useState(false)

  useEffect(() => {
      const loadData = async () => {
          const res = await axios.get('http://localhost:3006/students')
          // console.log(res.data)
          setStudentLst(res.data)
      }
      loadData()
      // console.log("first")
  }, [refreshFlag]) 

  const getData = () => {
      // console.log("first")
      setRefreshFlag(!refreshFlag)}

    return (
      <>
      <h4>students list</h4>
      <div className="row row-cols-1 row-cols-md-4 g-5" style={{ padding: '100px' }}>
          {StudentLst.map((item, i) => <Student key={i} student={item} mykey={i}></Student>)}
      </div>      
      <button onClick={getData}>get refresh data from server</button>
      </>
    )}  

export default StudentsList

