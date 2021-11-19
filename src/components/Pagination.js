import React,{useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from 'react-router-dom'
import data from '../usersData.json'

function createData(UserName, UserEmail, UserPassword, UserPassword2) {
  return { UserName, UserEmail, UserPassword, UserPassword2};
}
console.log("json data",data.jsonUsers)
// const rows = [
//   createData("Frozen yoghurt", "frozen@gmail.com", "pass1", "pass1"),
//   createData("Ice cream sandwich", "ice@gmail.com", "pass1", "pass1"),
//   createData("Eclair", "eclair@gmail.com","pass1", "pass1"),
//   createData("Cupcake", "cupcake@gmail.com", "pass1", "pass1"),
//   createData("Gingerbread", "ginger@gmail.com","pass1", "pass1")
// ];

// update with local array
// localStorage.setItem("users", JSON.stringify(rows));

//update with json file

export default function Pagination() {
 
  var local_storag_data 
console.log("check_length","users_update" in localStorage )
if ("users_update" in localStorage ){
  local_storag_data = JSON.parse(localStorage.getItem("users_update") || "[]");
  
}else{
  localStorage.setItem("users", JSON.stringify(data.jsonUsers));

   local_storag_data = JSON.parse(localStorage.getItem("users") || "[]");
 
}


console.log("local==storage-------",local_storag_data)
  
  const navigate = useNavigate()
 let table_head=["UserName", "UserEmail", "UserPassword", "UserPassword2"] 
  return (
    <>
    <button style={{backgroundColor:"blue", color: "white",
  padding: "5px 15px",marginTop: "10px", marginBottom: "20px", float: "right",cursor:"pointer",borderRadius: "5px", margin: "10px 0px",fontSize: "14px"}}  onClick={() => navigate('/form')}>Add New User</button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {table_head.map((title,index)=>{

               return <TableCell align={index!==0?"center":""}>{title}</TableCell>
            })}
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {local_storag_data.map((row) => (
            console.log("row",row.UserName),
            <TableRow
              key={row.UserName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.UserName}
              </TableCell>
              <TableCell align="center">{row.UserEmail}</TableCell>
              <TableCell align="center">{row.UserPassword}</TableCell>
              <TableCell align="center">{row.UserPassword2}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
