<?php

class TatangoHelper
{
    protected $apikey;
    protected $phone_number;
    protected $campaign;
    protected $keyword;
    protected $headers = [];

    function __construct($phone_number)
    {
        $this->phone_number = $phone_number;
        $this->apikey = $this->getApiKey();
        $this->campaign = $this->getDefaultCampaign();
        $this->keyword = $this->getDefaultKeyword();
        $this->headers = $this->getDefaultHeaders();
    }

    private function getApiKey()
    {
        if (!defined('TATANGO_KEY')) {
            return 'tatango_key_KCmys7ahPE-Mw_OYbjaUFw';
        }

        return TATANGO_KEY;
    }

    private function getDefaultCampaign()
    {
        if (!defined('TATANGO_CAMPAIGN_ID')) {
            return '90146';
        }

        return TATANGO_CAMPAIGN_ID;
    }

    private function getDefaultHeaders()
    {
        $headers = array();
        $headers[] = "Accept: application/json";
        $headers[] = "Content-Type: application/json";
        $headers[] = "Host: localhost";
        $headers[] = "Cookie: ";
        
        return $headers;
    }

    private function getDefaultKeyword()
    {
        return 'main';
    }

    private function getHeaders()
    {
        return $this->headers;
    }

    public function campaign($campaign)
    {
        $this->campaign = $campaign;
        return $this;
    }

    public function keyword($keyword)
    {
        $this->keyword = $keyword;
        return $this;
    }

    public function subscribe()
    {
        $result = $this->curl();
        return json_decode($result);
    }

    private function curl()
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://app.tatango.com/api/v2/lists/" . $this->campaign . "/subscribers");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"subscriber\":{\"phone_number\":\"" . $this->phone_number . "\", \"tags\": \"" . $this->keyword . "\"}}");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_USERPWD, "tatango" . ":" . $this->apikey);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $this->headers);

        $result = curl_exec($ch);
        
        if (curl_errno($ch)) {
            echo 'Error:' . curl_error($ch);
        }

        curl_close ($ch);

        return $result;
    }

}
