$.ajax({
  headers: { 'X-Auth-Token': 'e4e54de69159447f9568e82c5433a09f' },
  url: 'http://api.football-data.org/alpha/teams/65/fixtures?timeFrame=p40',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  var regex = /.*?(\d+)$/;
  console.log("Length: "+response.fixtures.length);
  var five_games = [];
  if(response.fixtures.length>5){
    var counter = 0;
    for(var i=response.fixtures.length-1;i>response.fixtures.length-6;i--){
      five_games[counter] = response.fixtures[i];
      counter++;
    }
  }
  console.log("fivegames length"+five_games.length);
  console.log(five_games);
  console.log(five_games[0].date);
  var res = regex.exec(five_games[0].result.goalsHomeTeam[0]);
  console.log("goalhometeam"+res);

  var dateString = five_games[0].date;
  var date = formatDate(dateString);

  for(var i=0;i<five_games.length;i++){
    var rowNum = (i+2).toString();
      $(".row"+rowNum+" .col1").append(formatDate(five_games[i].date));
      $(".row"+rowNum+" .col2").append(five_games[i].homeTeamName);
      $(".row"+rowNum+" .col3").append(five_games[i].result.goalsHomeTeam);
      $(".row"+rowNum+" .col4").append(five_games[i].result.goalsAwayTeam);
      $(".row"+rowNum+" .col5").append(five_games[i].awayTeamName);
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
