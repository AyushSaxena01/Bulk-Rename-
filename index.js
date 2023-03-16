const fs=require("fs");
const path=require("path");
const replaceThis="ayush";
const replaceWith="anexas";
const preview =false;
const folder=__dirname;

try{
const data=fs.readdir(folder,(err,data)=>{
   
    for(let i=0;i<data.length;i++){
        const element=data[i];
        let oldFilename=path.join(folder,element);
        let newFilename=path.join(folder,element.replaceAll(replaceThis,replaceWith));
        if(!preview){
            fs.rename(oldFilename,newFilename,()=>{
                console.log("successfully renamed");
            });
        }
        else{
            if(oldFilename!==newFilename){console.log(oldFilename +" will be renamed to "+newFilename);};
        }
     
        

    }
})

}
catch(err){
    console.log(err);
}