import express from "express";
import bodyParser from "body-parser";

const APP = express();
const PORT = 3000;

let posts = [];

APP.use(bodyParser.urlencoded({extended:true}));
APP.use(express.static("public"));

APP.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

APP.get("/", (rq, rp) => {
    rp.render("index.ejs", {
        posts: posts
    });
});

APP.get("/about", (rq, rp) => {
    rp.render("about.ejs");
});

APP.get("/contact", (rq, rp) => {
    rp.render("contact.ejs");
});

APP.post("/submit", (rq, rp) => {
    const title = rq.body["idTitle"];
    const content = rq.body["idContent"];
    const author = rq.body["idAuthor"];
    const option = rq.body["idOption"];

    const post = new Post(title, content, author);

    switch(option){
        case "Create Post":
            posts.push(post);
            break;
        case "Edit Post":
            editPost(title, content, author);
            break;
        case "Delete Post":
            console.log(`entrando a delete post`);
            deletePost(title);
            break;
    }

    rp.render("index.ejs", 
    {
        posts: posts
    });
});

class Post{
    constructor(title, content, author){
        this.title = title;
        this.content = content;
        this.author = author;
    }

}

function comparePost(title){
    for(let i = 0; i < posts.length; i++){
        if(title === posts[i].title){
            return i;
        }
    }
    return -1;
}

function editPost(title, content, author){
    let position = comparePost(title);

    if(position > -1){
        posts[position].title = title;
        posts[position].content = content;
        posts[position].author = author;
    }
}

function deletePost(title){
    let position = comparePost(title);
    console.log(posts);
    if(position > -1){
        posts.splice(position, 1);
    }
}