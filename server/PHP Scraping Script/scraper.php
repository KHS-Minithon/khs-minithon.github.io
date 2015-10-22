<?php

include('simple_html_dom.php');

$page = new simple_html_dom();

$page = file_get_html('http://fourdiamonds.donordrive.com/event/khs16');

$money_raised = preg_replace('/[^0-9.]/', '', $page->find('#donationsTotal h5', 0)->plaintext);
$participants = preg_replace('/[^0-9.]/', '', $page->find('#donationsTotal h5', 1)->plaintext);

$results = array("money_raised" => $money_raised, "participants" => $participants);

$file = fopen("result.json", "w") or die("Error");
fwrite($file, json_encode($results) );
fclose($file);

?>
