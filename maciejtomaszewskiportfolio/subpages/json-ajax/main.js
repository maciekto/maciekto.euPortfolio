//getting button for click
document.querySelector('button').addEventListener('click', download);

function download(){
    //Create request element
    let request = new XMLHttpRequest();
    //open connection
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json',true);
    //onready state change but on load is better 
    request.onreadystatechange = function (){
        //check if everything is okay
        if(request.readyState == 4 && request.status == 200){
            //parsing json
            let JSONparsed = JSON.parse(request.responseText);
            //run function which is below    
            consolewatch(JSONparsed);
            //just for check
            console.log(JSONparsed);
            document.querySelector('.success').innerHTML = "EVERYTHING OKAY";
        }else{
            document.querySelector('.success').innerHTML = "ERROR";
        }
    }
    //sending GET request to url, asynchronous
    request.send();
}
function consolewatch(jsonback){
    //create a HTML elements for listing    
    let div = document.querySelector('#data');
    let subDiv = document.createElement('div');
    let ul = document.createElement('ul');
    div.appendChild(subDiv);
    subDiv.appendChild(ul);
    //loop through json array
    for(let i = 0; i<jsonback.length; i++){
        console.log(jsonback[i]);
        //create li element and insert data
        let li = document.createElement(`li`);
        li.className = jsonback[i].name;
        ul.appendChild(li);
        let text = document.createTextNode(jsonback[i].name);
        li.appendChild(text);
        
    }
    
}
