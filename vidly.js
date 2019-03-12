const express = require('express');
const app = express();
const Joi = require('joi');
app.use(express.json());
const genres = [
    {
    name:'Action',
    id:1},
    {
    name:'Adventure',
    id:2
    },
    {
    name:'Animation',
    id:3
    },
    {
    name:'Biography',
    id:4
    },
    {
    name:'Comedy',
    id:5
    },
    {
    name:'Crime',
    id:6
    },	
    {
    name:'Documentary',
    id:7
    },
    {
    name:'Drama',
    id:8
    },
    {
    name:'Family',
    id:9
    },
    {
    name:'Fantasy',
    id:10
    },
    {
    name:'Film Noir',
    id:11
    },
    {
    name:'History',
    id:12
    },
    {	
    name:'Horror',
    id:13
    },
    {
    name:'Music',
    id:14
    },
    {
    name:'Musical',
    id:15
    },
    {
    name:'Mystery',
    id:16
    },
    {
    name:'Romance',
    id:17
    },
    {
    name:'Sci-Fi',	
    id:18
    },
    {
    name:'Short',
    id:19
    },
    {    
    name:'Sport',
    id:20
    }];



app.get('/' , (req,res) =>{
    res.send('Welcome to Vidly where all GENRES of movies exist!');
});

app.get('/vidly/genres',(req,res)=>{
    res.send(genres);
});

app.get('/vidly/genres/:name',(req,res)=>{
    const genre = genres.find(g=>g.name===req.params.name);
    console.log(genre);
    if(!genre){
        res.status(404).send('This genre is not exist');
        return;
    }
    res.send(genre);
});


app.post('/vidly/genres/',(req,res)=>{
    if(genres.find(g=>g.name===req.body.name)){
        res.send('This Genre is already exists..');
        return;
    }
    const newGenre = {
        name:req.body.name,
        id:genres.length+1
    }
    genres.push(newGenre);
    res.send(newGenre);

});

app.put('/vidly/genres/:id',(req,res)=>{
    const gener = genres.find(g=>g.id===parseInt(req.params.id));
    if(!gener){
        res.status(404).send('This Genre is not exist..');
        return;
    }
    gener.name = req.body.name;
    res.send(gener);
});


app.delete('/vidly/genres/:id',(req,res)=>{
    const gener = genres.find(g=>g.id===parseInt(req.params.id));
    if(!gener){
        res.status(404).send('This Genre is not exist..');
        return;
    }
    const index = genres.indexOf(gener);
    genres.splice(index,1);
    res.send(gener);
});

app.listen(8080,()=>console.log('waiting for a request....'));
