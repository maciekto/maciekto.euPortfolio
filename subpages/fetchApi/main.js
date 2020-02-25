//getting button for click
document.querySelector('.button').addEventListener('click', download);
//create function where i can have acces to file
function download(){
    //url
   fetch('text.txt')
   //getting a text
   .then((result) => result.text())
   .then((data) => {
        document.querySelector('#data').innerHTML = data;
   })
   .catch((error) => console.log(error));
   //errorr
}
document.querySelector('.buttonJsonGet').addEventListener('click', download1);
//create function where i can have acces to file
function download1(){
    //url
   fetch('https://jsonplaceholder.typicode.com/posts')
   //getting a text
   .then((result) => result.json())
   .then((data) => {
        let output = '';
        console.log(data.length);
        //forEach
        /*data.forEach(post => {
            console.log(post.id);
            output += `<div>${post.id}, title: ${post.title}</div>`;
            console.log(output);
            document.querySelector('#dataJsonGet').innerHTML = output;
        });*/
        //Just For
        for(let i = 0; i<data.length; i++){
            output+= `id: ${data[i].id}, title: ${data[i].title} <br />`;
            document.querySelector('#dataJsonGet').innerHTML = output;
        }
   })
   .catch((error) => console.log(error));
   //errorr
}
//id from submit form button
document.querySelector('.postSend').addEventListener('submit', send);
//function with preventing to reload the page
function send(e){
    e.preventDefault();
    //reading inputs
    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;
    //start of fetch method POST, 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        //define that is a json file
        headers: {
            'Content-Type': 'application/json',
        },
        //prepare data to send
        body: JSON.stringify({
            title:title,
            body:body
        }) 
    })
    //show what's going on
    .then((res) => res.json())
    .then((data)=> 
    {
        //Show data in the website
        console.log(data);
        document.querySelector('.result').innerHTML = `${data.title} <br /><br />${data.body}`;
    });
}