<?php

class Cltvo_Page_Legal extends Cltvo_Page
{
    function __construct(){
        parent::__construct(get_post($GLOBALS['special_pages_ids']['legal']));
    }

    public function setMetas(){}
}
