//when did steve last play invoker
//steve playerID
var id = '76561198010677456';
var dota2key = '6004105BA153082998C0FA0F064608A2';

//query to get match history
var baseQuery = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v0001/?key='

function urlBuilder_findInvokers(apiKey, playerID) {
  var url = baseQuery+apiKey+'&account_id='+playerID+'&hero_id='+74;
  return url;
}

function lastPlayed() {
  var url = urlBuilder_findInvokers(dota2key,id);
  $.ajax({
    dataType: "json",
    url: 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v0001/?key=6004105BA153082998C0FA0F064608A2&account_id=76561198010677456'
  }).done(function(response) {
    console.log(response);
  })
}

$(document).ready(function(){
  console.log('ready');

  lastPlayed();
})
