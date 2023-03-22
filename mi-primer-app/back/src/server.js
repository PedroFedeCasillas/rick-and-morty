const http = require('http');
const data = require('./utils/data');

const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { url } = req;

  if(url.includes("rickandmorty/character/")){
  //  const id = url.split("/").at(-1); 
    const id = Number(url.split("/").at(-1));
  //  res.end(`Estoy en la ruta con el id ${id}`);
    const character = data.find((char) => char.id == id);

    if(character){
      res.writeHead(200, {"Content-type": "application/json"});
      return res.end(JSON.stringify(character));
    }else{
      res.writeHead(404, {"Content-type": "application/json"});
      return res.end(JSON.stringify({error: "character not found " }))
    }
  }
}) .listen(PORT, "localhost");
  

