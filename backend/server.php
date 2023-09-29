<?php 

// include __DIR__ . "/data/dischi.php" ;

$string = file_get_contents("../data/dischi.json");
$disk_list = json_decode($string, true) ;
$result = [];
// var_dump($disk_list);

if(isset($_GET["index"])) {
    

    
    $disk = $disk_list[$_GET["index"]] ;
    $result = $disk; 
} else {
    $result = $disk_list;
}


header('Content-Type: application/json');
echo json_encode($result);



?>