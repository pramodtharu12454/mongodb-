import express from "express";

// create app
const app = express();
app.use(express.json());

let artistListen = [
  {
    id: 1,
    name: "sujan chapagain",
    age: 32,
  },
  {
    id: 2,
    name: "G-bob",
    age: 21,
  },
];

// request => post, get, put ,delete
//response => status code

app.get("/artist/list", (req, res) => {
  res.status(200).send({ message: "success", artist: artistListen });
});

app.post("/artist/add", (req, res) => {
  const artist = req.body;

  artistListen.push(artist);
  res.status(201).send({ message: "Artist added success fully." });
});

app.delete("/artist/delete/:id",(req, res) => {
    const userIdToBeDeleted = Number(req.params.id);



    //find user using userIdToBeDeleted
    const artist = artistListen.find((item)=>{
        return item.id === userIdToBeDeleted;
    });



    // if not user,throw error
    if(!artist){
        return res.status(404).send({message: `artist doesn't exist..`});
    }


    // remove user from array
    let newArray = artistListen.filter((item)=>{
        return item.id !== userIdToBeDeleted;
    })


    // update array
    artistListen = [...newArray];



    // send response
    res.status(200).send({message: `artist is deleted successfully...`});


  res.status(200).send("deleting ......");
});

// get artist details
app.get(`/artist/list/:id`,(req,res)=>{
    const userIdToBeFound = Number(req.params.id);


    const artist = artistListen.find((item)=>{
        return item.id === userIdToBeFound;
    });

    if(!artist){
        res.status(404).send({message:`Artist doesn't exist...`});

    }

    return res.status(200).send({message:`Success`, artistDetails: artist});
});

//port
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port : ${PORT}`);
});