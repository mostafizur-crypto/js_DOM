
// option 1
const yellow_color = document.getElementById('yellow');
yellow_color.onclick = function myfunction(){
    document.body.style.backgroundColor = 'yellow';
}


// Option 2

const blue_color = document.getElementById('blue');
blue_color.onclick = myblue;
function myblue(){
    alert("Hello! My blue color is here");
    document.body.style.backgroundColor = 'blue';
}

// option 3

const orange_color = document.getElementById('orange');

orange_color.addEventListener('click', myorange);

function myorange(){
    document.body.style.backgroundColor = 'orange';
}

//another option 3

const green_color = document.getElementById('green');

green_color.addEventListener('click', function mygreen() {
    document.body.style.backgroundColor = 'green';
})

// final option 

document.getElementById('pink').addEventListener('click' , function(){
    alert('pink color is comming.......');
    document.body.style.backgroundColor= 'pink';
})



// test final option

document.getElementById('mostafiz').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
})

const badhonaa = document.getElementById('badhon');
badhonaa.addEventListener('click', function(){
    badhonaa.innerText = 'Badhon Rahman Mostafiz'
});



// Money Money test

document.getElementById('updata').addEventListener('click', function(){
    const Update = document.getElementById('input-fild');
     const Update_set = Update.value;
     
     const set = document.getElementById('money');
     set.innerText = Update_set ; 
     Update.value = '';
 })