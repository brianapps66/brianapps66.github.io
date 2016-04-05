var players=['Cristiano Ronaldo', 'Lionel Messi', 'Gareth Bale','Wayne Rooney','Sergio Aguero','Luke Shaw','Juan Mata','Christian Benteke','Raheem Sterling','Yaya Toure','Danny Welbeck', 'Ross Barkley','Bastien Schweinsteiger','David Silva','Cesc Fabregas','Joe Hart','Robbie Keane','Shane Long','Hulk',''];

var clubs=['Manchester United', 'Manchester City', 'Chelsea', 'Arsenal', 'Aston Villa', 'Everton', 'Spurs', 'West Ham', 'Real Madrid', 'Barcelona', 'Shamrock Rovers', 'Inter Milan', 'Juventus','AC Milan', 'PSG', 'Valencia','Bayern Munich','Bayer Leverkusen','Borussia Dortmund','Southampton','Vasco da Gama','Atletico Madrid'];

var prices=['€1 million', '€2 million','€3 million','€5 million','€7 million', '€10 million','€12 million','€15 million','€18 million','€20 million','€25 million','€30 million','€35 million','€40 million','€50 million','€60 million'];

transfer = players[Math.round(Math.random()*(players.length-1))]+' will be bought by '+clubs[Math.round(Math.random()*(clubs.length-1))]+' for '+prices[Math.round(Math.random()*(prices.length-1))]+'\n';
