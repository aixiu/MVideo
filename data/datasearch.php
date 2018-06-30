<?php
/**
 * Created by PhpStorm.
 * User: Filmy
 * Date: 2018/6/30
 * Time: 13:28
 */

include("readcontent.class.php");

function read_info()
{
    $readcontent = new Read_content();
    $key = isset($_GET['key']) ? $_GET['key'] : '';
    $url = "http://zuida.me/index.php?m=vod-search&wd=".$key;
    $listcontent = $readcontent->MloocCurl($url);
    if (stristr($listcontent,'请不要频繁操作，时间间隔为5秒') == false) {
    	$ruleMatchDetailInList = "~<a href=\"(.*?)\" target=\"_blank\">(.*?)<\/span><\/a><\/span>~";#正则表达式
	    preg_match_all($ruleMatchDetailInList, $listcontent, $title_id);

	    $ruleMatchDetailInList = "~<span class=\"xing_vb5\">(.*?)<\/span>~";#正则表达式
	    preg_match_all($ruleMatchDetailInList, $listcontent, $category);

	    $ruleMatchDetailInList = "~<span class=\"xing_vb[6-7]\">(.*?)<\/span>~";#正则表达式
	    preg_match_all($ruleMatchDetailInList, $listcontent, $date);

	        echo "{\"status\":\"success\",\"result\":[";
	        $xunhuan = count($title_id[1]);
	        for ($i = 0; $i < $xunhuan; $i++) {
	            $title_id[1][$i] = preg_replace('/\/\?m=vod-detail-id-(\d+)\.html/i', '$1', $title_id[1][$i]);
	//        print_r("<li><span class='title' ><a href='javascript:void(0);' data-id='" . $title_id[1][$i] . "'>" . $title_id[2][$i] . "</a></span><span class='category'>" . $category[1][$i] . "</span><span class='date'>" . $date[1][$i] . "</span></li>");

	            echo json_encode(array('title' => $title_id[2][$i], 'id' => $title_id[1][$i], 'category' => $category[1][$i], 'date' => $date[1][$i]));
	            if ($i != $xunhuan - 1) {
	                echo ",";
	            }
	        }
	        echo "]}";
    }else {
	        echo "{\"status\":\"error\"]}";
	}
    
}

read_info();
?>