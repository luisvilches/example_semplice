exports.init = (req,res) => {
    res.send(200,{message:'holamundo'},'');
}


exports.private = (req,res) => {
    res.send(200,{page:"pagina de usuario registrado"});
}