const express = require('express');
const cors = require('cors');
const {default: axios} = require('axios');

const app = express();
app.use(express.json());
app.use(cors( {origin:true}));

app.post("/auth", async (req, res) => {
  const { username } = req.body;
  
    try{
      const r = await axios.put(        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {
          "private-key": "294bdd6c-8fb5-4f8b-a5b3-62c1f104d7e1"}}
        ); 
        return res.status(200).json(r.data);
    }
    catch(ex){
        console.log(ex);
        return res.status(400).json({error: "Error creating user :" + error.res.data});
    }
});

app.listen(3001);