
const express= require ('express');
const{createTodo, updateTodo}= require("./types");
const {Todo}= require('./database');
const cors= require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/todo",async function(req,res){
   const createPayload= req.body;
   const parsePayload= createTodo.safeParse(createPayload);

   if(!parsePayload.success){
       res.status(411).json({
          msg:" You sent the wrong inputs!! ",
      })

      return;
   }
   await Todo.create({
      title : createPayload.title ,
      description : createPayload.description, 
      completed : false

   })
   res.json({
      msg : " todo created !!"
   })

})
app.get("/todos" , async (req, res)=>{
const todos= await Todo.find({});
console.log(todos)
res.json({
   todos
})

})
app.put("/completed" ,async(req, res)=>{
   const updatePayload= req.body;
   const parsePayload= updateTodo.safeParse(updatePayload);
   if(!parsePayload.success){
      res.status(411).json({
         msg:"invalid input!!"
      })
      return;
   } 
   await Todo.updateOne({
     _id: req.body.id 
   },{
      completed :true
   })
   res.json({
     msg : "The Todo is marked as completed"
    })
})
console.log("server is running on port 3001");
app.listen(3000);
