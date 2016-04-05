var main = function(){
  $(".pokemon_class").click(function(){
    var pokemon_sprite;
    var pokemon_whole;
    var rand = Math.floor((Math.random() * 719) + 1);
    var url = "http://pokeapi.co/api/v1/sprite/"+rand+"/";
    httpGetAsync(url,
      function(arg){
          pokemon_sprite = JSON.parse(arg);
          var image_string = "<img src='http://pokeapi.co"+pokemon_sprite.image+"'>"
          var pokemon_url = "http://pokeapi.co"+pokemon_sprite.pokemon.resource_uri;
          httpGetAsync(pokemon_url,
          function(arg2){
            pokemon_whole = JSON.parse(arg2);
            var description_url = "http://pokeapi.co"+pokemon_whole.descriptions[0].resource_uri;
            httpGetAsync(description_url,
            function(arg3){
              pokemon_description = JSON.parse(arg3);

              var abilities = "";
              var moves = pokemon_whole.moves;
              var moves_sample = "";
              var type=""

              for(i=0;i<pokemon_whole.abilities.length;i++){
                if(i!=pokemon_whole.abilities.length-1){
                  abilities +=pokemon_whole.abilities[i].name.firstLetterToUppercase()+", ";
                }else{
                  abilities +=pokemon_whole.abilities[i].name.firstLetterToUppercase();
                }
              }

              var j=0;
              while(j<5&&j<moves.length){
                if(j!=4){
                  moves_sample += moves[j].name+", ";
                  j++;
                }else{
                  moves_sample += moves[j].name;
                  j++;
                }
              }

              for(i=0;i<pokemon_whole.types.length;i++){
                if(i!=pokemon_whole.types.length-1){
                  type += pokemon_whole.types[i].name.firstLetterToUppercase()+", ";
                }else{
                  type += pokemon_whole.types[i].name.firstLetterToUppercase();
                }
              }
              $(".new_pokemon").html("<div class = 'pokemon_centre'>"+image_string+"<br/><h1>"+
              pokemon_sprite.pokemon.name.firstLetterToUppercase()+"</h1></div><br/>"+
              "<b>Description: </b>"+pokemon_description.description+"<br/>"+
              "<b>Type: </b>"+type+"<br/>"+
              "<b>Abilities: </b>"+abilities+"<br/>"+
              "<b>Moves: </b>"+moves_sample);
            })
          })
      }
    );
  });

  function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

  function httpGetAsync(theUrl, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  }

  String.prototype.firstLetterToUppercase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
}

$(document).ready(main);
