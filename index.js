var counterContainer = document.querySelector(".website-counter");

var url = "http://p2p-usa.xyz:9334/current_payouts"
var wallet = "bc1quu9rns8avwjy9lpdhez4wmzhqu9szpk456rwnq"
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    var data = JSON.parse(xmlHttp.responseText);
    return data[wallet]
}
var amount = httpGet(url)
counterContainer.innerHTML = amount