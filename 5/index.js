
const fs=require('fs');
fs.unlink("architecture.txt",()=>{
    console.log("File Deleted Successfully");
})
// Output :  File Deleted Successfully