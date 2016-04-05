<?php
ini_set('display_errors', 'On');

function curl($url){
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.52 Safari/537.17');
   curl_setopt($ch, CURLOPT_AUTOREFERER, true);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
   curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
   curl_setopt($ch, CURLOPT_VERBOSE, 1);
   curl_setopt ($ch, CURLOPT_CAINFO, "C:\Users\Brian\PHP2\cacert.pem");

  $result = curl_exec($ch);
  curl_close($ch);
  return $result;
}
//parse the json output
function getResults($json){
  $results = array();
  $json_array = json_decode($json, true);
  foreach($json_array['query']['pages'] as $page){
    if(count($page['images']) > 0){
      foreach($page['images'] as $image){
        $title = str_replace(" ", "_", $image["title"]);
        $imageinfourl = "http://en.wikipedia.org/w/api.php?action=query&titles=".$title."&prop=imageinfo&iiprop=url&format=json";
        $imageinfo = curl($imageinfourl);
        $image_array = json_decode($imageinfo, true);
        $image_pages = $image_array["query"]["pages"];
        foreach($image_pages as $a){
          $results[] = $a["imageinfo"][0]["url"];
        }
      }
    }
  }
  return $results;
}
$file = new SplFileObject('mancity_players.txt');
$file->seek(rand(0,17));
$search = (String) $file->current();
$term = preg_replace('/\s+/', '_', $search);

if (empty($search)) {
  //term param not passed in url
  exit;
} else {
  $url = "http://en.wikipedia.org/w/api.php?action=query&titles=".$term."&prop=images&format=json&imlimit=6";
  $json = curl($url);
  $results = getResults($json);
  //print the results using an unordered list
  echo '<div style="text-align:center; margin-left:auto; margin-right:auto"><h1>';
  echo $search;
  echo '</h1><br/>';
  foreach($results as $a){
    if(strpos($a, '.svg') == FALSE){
    echo '<img src="'.$a.'" style= "width: 400px; height:auto"><br/>';

  }
}
echo '</div>';
}
?>
