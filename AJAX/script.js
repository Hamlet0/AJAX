//https://63c42b968067b6bef6d4eeb6.mockapi.io/ajax/v1/

// Stara metoda !!
/*
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
    }
}
xhttp.open('GET' , 'https://63c42b968067b6bef6d4eeb6.mockapi.io/ajax/v1/Users' , true);
xhttp.send(); */

document.querySelector('#fetchBtn').addEventListener('click', e => {
    e.preventDefault();

    let id =document.querySelector('#userID').value;


    let request = fetch ('https://63c42b968067b6bef6d4eeb6.mockapi.io/ajax/v1/Users/' + id)
    .then(response => response.json()).then(data => {
         console.log(data);

        let podaci = document.querySelector('#podaci');

        podaci.innerHTML = `<p><b>${data['email']}</b></p>
                            <p>${data['username']}</p>
                            <p><i>${data['password']}</i></p>` ;

    }).catch(error => {
        alert('Veza je prekinuta');
    });

});