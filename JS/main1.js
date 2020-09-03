

//window.BASE_URL = 'http://127.0.0.1:8080/'
 window.BASE_URL = 'https://naveensahu143.github.io/DemoWebsite'


class DataBase {

  static get DATABASE_URL() {
    return `${BASE_URL}/data/data1.json`;

  }

  static imageUrlForPost(post) {
    return (`${BASE_URL}/Photos/post/${post.image}`);
  }
}  


let post = new XMLHttpRequest();
post.open('GET', DataBase.DATABASE_URL, true);
post.onload = () => {
    const json = JSON.parse(post.responseText);
    var posts = json.posts; 
    // console.log(posts);

    showpost(posts);
    
};
post.send();

function showpost(posts){
    // console.log(posts);
    const PT = document.getElementById("blogs-list");
    posts.forEach(post=>{

        const card = document.createElement('div');
        card.className = "card col-lg-3 col-md-4 col-sm-6 cd";

       

        const image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = DataBase.imageUrlForPost(post);
        card.append(image);

        const title = document.createElement('h4');
        title.className = "Title";
        title.innerHTML = post.title;
        card.append(title);

        const cardbody = document.createElement('div');  
        cardbody.className="card-body";

          const content = document.createElement('p');
          content.innerHTML = post.content;
          cardbody.append(content);

          const button = document.createElement('button');
          button.className = "btn btn-danger bt";
          button.innerText = "Delete";
          button.type= "submit";
        //   button.disabled=false;
          cardbody.append(button);

        card.appendChild(cardbody);

        PT.appendChild(card);

    })
}

function SearchFunc(posts) {
    let filter = document.getElementById("MyInput").value.toUpperCase();
    let tt = document.getElementsByClassName("cd");
    let ttt = document.getElementsByTagName("h4");
    for(let i=0;i<ttt.length;i++)
    {   
        // console.log(filter);
        if(ttt[i].innerText.indexOf(filter) > -1)
        {
            tt[i].style.display="";
        }else{
            tt[i].style.display="none";
        }
    }
}


let bb = document.getElementsByClassName("bt");

for(let j=0; j<bb.length; j++){
    console.log(bb[j]);
    bb[j].innerHTML.onclick = function(){Delete()};
}

// console.log(bb);

function Delete(){
    console.log("button Clicked");
}


