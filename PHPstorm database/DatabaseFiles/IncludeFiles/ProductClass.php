<?php

class Product {
    public String $name;
    public int $price;
    public int $quantity;
    public int $total;

    function __construct($name, $price, $quantity, $total) {
        $this->name = $name;
        $this->price = $price;
        $this->quantity = $quantity;
        $this->total = $total;
    }

    function expose() {
        return get_object_vars($this);
    }
}

class ProductFull {
    public String $name;
    public String $desc;
    public int $price;
    public int $quantity;
    public String $model;
    public String $dim;
    public String $type;

    function __construct($name, $desc, $price, $quantity, $model, $dim, $type) {
        $this->name = $name;
        $this->desc = $desc;
        $this->price = $price;
        $this->quantity = $quantity;
        $this->model = $model;
        $this->dim = $dim;
        $this->type = $type;
    }

    function expose() {
        return get_object_vars($this);
    }
}