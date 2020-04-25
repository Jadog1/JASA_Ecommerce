<?php
class myError {
    public string $reason;

    function setReason($newReason) {
        $this->reason = $newReason;
    }
    function expose() {
        return get_object_vars($this);
    }
}

function makeError($err) {
    $error = new myError();
    $error->setReason($err);
    return json_encode($error->expose());
}