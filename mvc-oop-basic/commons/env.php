<?php 

// Biến môi trường, dùng chung toàn hệ thống
// Khai báo dưới dạng HẰNG SỐ để không phải dùng $GLOBALS

define('BASE_URL'       , 'http://localhost/mvc-oop-basic/'); //Đường dẫn vào đến phần client

define('BASE_URL_ADMIN'       , 'http://localhost/mvc-oop-basic/admin/');//Đường dẫn vào phần admin

define('DB_HOST'    , 'localhost');
define('DB_PORT'    , 3306);
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME'    , 'du_an_1');  // Tên database

define('PATH_ROOT'    , __DIR__ . '/../');
