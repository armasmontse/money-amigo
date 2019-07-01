<?php

class Cltvo_Page_Privacy extends Cltvo_Page
{
    function __construct(){
        parent::__construct(get_post($GLOBALS['special_pages_ids']['privacypolicy']));
    }

    public function setMetas(){}
}
