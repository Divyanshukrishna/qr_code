// const fs=require("fs");

// fs.writeFile("message.txt","Hello MotherFucker",(err)=>{
// if(err) throw err
// console.log("the file has been saved");
// });

fs.readFile("./message.txt",(err,divyanshu)=>{
    if(err) throw err;
    console.log(divyanshu);
});