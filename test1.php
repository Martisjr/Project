<?php
function winner_generator($array , $number){
    $arrayIndex = $number % count($array);
    if ($arrayIndex == 0){ $arrayIndex = count($array);}

foreach($array as $key => $value) {
    if ($key == $arrayIndex - 1){ return $value['name'];}
}
}?>

<p>
<?php
echo winner_generator(
array(
	array('name' => 'Kajus'),
	array('name' => 'Nojus'),
	array('name' => 'Lukas'),
	array('name' => 'Vaidas')
      ),
rand()); 
    
?></p>