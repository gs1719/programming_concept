const express = require("express");
const cors = require("cors");
const morgan = require('morgan')
const app = express();
const port = 3000;

//adding middleware to express
app.use(cors());
app.use(express.json());

//logger morgan in dev mode
app.use(morgan('dev')) //added logger to middle ware

//simulating in-memory database object
let employees = [
  { id: 1, name: "Gaurav_with_Express", role: "Developer" },
  { id: 2, name: "Gaurav_with_Spring", role: "Manager" },
];
let nextId = 3;

//Http verb methods
//GET
app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  const employee = employee.find((emp) =>
     emp.id === pareseInt(req.params.id));

  if(!employee){
      return res.status(404)
              .json({message:'Employee not found'});
  } 
  res.json(employee);
});

//POST new employee
app.post('/employees',(req,res)=>{
    const{name,role} = req.body;

    if(!name || !role) return res.status(400).json({message:'Name and role are required'});
const employee ={id:nextId++,name,role};
employee.push(employee);
res.status(201).json(employee);
});

//PUT update employee
app.put('/employees/:id',(req,res)=>{
    const employee = employee.find(emp=>emp.id === pareseInt(req.params.id));

    if(!employee) 
        return res.status(404).json({message:'Employee not found'});
    const {name,role} = req.body;
    if(!name || !role) 
        return res.status(400).json({message:'Name and role are required'});

    employee.name = name;
    employee.role = role;
    res.json(employee);
});

//Delete employee
app.delete('/employees/:id',(req,res)=>{
    const index = employees.findIndex(emp=>
        emp.id == parseInt(req.params.id));
    if(index === -1) 
        return res.status(404).json({message:'Employee not found'});
    employees.splice(index,1);
    res.status(204).send();
});

//Start Server
app.listen(port,()=>{console.log(`Server running at http://localhost:${port}`);
});
