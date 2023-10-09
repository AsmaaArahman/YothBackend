<?php

function is_moderator(){
    if (session()->get("role") != "1") {
        return false;
    }
    return true;

    
}
