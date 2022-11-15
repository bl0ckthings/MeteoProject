

let villeChoisie;
const btn = document.querySelector('#changer');

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition((position) => {
        const url = "https://api.openweathermap.org/data/2.5/weather?lon=" + position.coords.longitude + '&lat=' + position.coords.latitude + "&appid=23723987a0f3ad14d32f6fe9e1726a2f&units=metric#";;


        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                $('#city_name').text(data.name);
                $('#temperature_label').text(data.main.temp);
            },
            error: () => {
                alert('Merci de revenir plus tard');
            }

        });

    }, erreur, options);
} else {
    $('.city').text('Paris');
    recupererTemp(villeChoisie);
}

var options = {
    enableHighAccuracy: true
}



btn.addEventListener('click', () => {
    villeChoisie = prompt('Entre la ville de ton choix !');
    recupererTemp(villeChoisie);
})


function erreur() {
    villeChoisie = "Paris";
    recupererTemp(villeChoisie);
}

function recupererTemp(ville) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=23723987a0f3ad14d32f6fe9e1726a2f&units=metric#";;


    $.ajax({
        url: url,
        type: 'POST',
        data: ville,
        dataType: 'json',
        success: (data) => {
            $('#city_name').text(ville);
            $('#temperature_label').text(data.main.temp);
        },
        error: () => {
            alert('Merci de revenir plus tard');
        }

    })

}





    // let requete = new XMLHttpRequest();

    // requete.open('POST', url);
    // requete.responseType = 'json';
    // requete.send();
    // console.log(requete.response);

    // requete.onload = function () {
    //     if (requete.readyState === XMLHttpRequest.DONE) {
    //         if (requete.status === 200) {
    //             let reponse = requete.response;
    //             let temperature = reponse.main.temp;
    //             document.querySelector('#city_name').textContent = ville;
    //             document.querySelector("#temperature_label").textContent = temperature;

    //         } else {
    //             alert('Une erreur est survenue, merci de reesayer plus tard');
    //         }
    //     }
    // }