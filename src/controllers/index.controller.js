
const fs = require("fs");
let count = 0;
module.exports.indexController = function(req,res){
    fs.readdir('./src/Files',function(err,files){
        if(err) console.log(err.message);
        else res.render("index",{files});
    })
    // res.render("index");
}

module.exports.createController = function(req,res){
    res.render("createHisab");
}

module.exports.createFileController = async function(req,res){
    function uniqueFileName(){
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const extension = ".txt";
        let baseName = `${day}-${month}-${year}`;
        
        while(fs.existsSync(`./src/Files/${baseName}${extension}`)){
            count++;
            let newName = `${baseName}(${count})${extension}`;
            return newName;
        }
        return `${baseName}${extension}`;
    }
    
    const { input } = req.body;
    
    const formattedName = await uniqueFileName();
    fs.writeFile(`./src/Files/${formattedName}`, input , function(err){
        if(err) console.log(err.message);
        else console.log("file created");
    })
    res.redirect("/");
}

module.exports.readFileController = function(req,res){
    fs.readFile(`./src/Files/${req.params.name}`,"utf-8",function(err,data){
        if(err) console.log(err);
        else res.render("showData",{data:data,file:req.params.name})
    })
}

module.exports.editFileController = function(req,res){
    fs.readFile(`./src/Files/${req.params.name}`,"utf-8",function(err,data){
        if(err) console.log(err);
        else res.render("editFile",{data:data,file:req.params.name})
    })
    // res.render("editFile")
}

module.exports.updateFileController = function(req,res){
    let { input } = req.body;
    fs.writeFile(`./src/Files/${req.params.name}`, input ,function(err){
        if(err) console.log(err);
        else res.redirect("/");
    })
}

module.exports.deleteController = function(req,res){
    console.log(req.params.name);
    fs.unlink(`./src/Files/${req.params.name}`,function(err){
        if(err) console.log(err);
        res.redirect("/");
    })
}