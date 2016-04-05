$.ajax({
  headers: {'X-Auth-Token': 'e4e54de69159447f9568e82c5433a09f'},
  url: 'http://api.football-data.org/alpha/teams/65/fixtures?timeFrame=n40',
  dataType: 'json',
  type: 'GET',
}).done(function(response){
  var regex = /.*?(\d+)$/;
  var five_games = [];
  if(response.fixtures.length>5){
    var counter = 0;
    for(var i=0;i<5;i++){
      five_games[counter] = response.fixtures[i];
      counter++;
    }
  }

  for(var i=0; i<five_games.length;i++){
    var rowNum = (i+2).toString();
    $(".row"+rowNum+" .col1").append(formatDate(five_games[i].date));
    $(".row"+rowNum+" .col2").append(five_games[i].homeTeamName);
    $(".row"+rowNum+" .col3").append(five_games[i].awayTeamName);
  }
});

function formatDate(date){
  var unformattedDate = new Date(date);
  var dayOfWeek = unformattedDate.getDay();
  var day = ''+ unformattedDate.getDate();
  var month = ''+(unformattedDate.getMonth()+1);
  var year = unformattedDate.getFullYear();
  var hours = unformattedDate.getHours();
  var minutes = unformattedDate.getMinutes();

  if(minutes<10){
    minutes = "0"+minutes;
  }

  var namesOfDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return namesOfDays[dayOfWeek] +" "+ [day, month, year].join('/')+" "+ [hours,minutes].join(':');
}
