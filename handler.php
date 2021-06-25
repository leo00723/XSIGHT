<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once 'vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['name','email'])->areRequired()->maxLength(50);
$validator->field('email')->isEmail();
$validator->field('contact-number')->isRequired();
$validator->fields(['company-name', 'company-website','project-name', 'project-type','size-of-site', 'size-of-built-area'])->areRequired();


$pp->attachFiles(['upload1','upload2','upload3','upload4','upload5', 'upload6', 'upload6', 'upload7', 'upload8', 'upload9', 'upload10']);

//$pp->requireReCaptcha();
//$pp->getReCaptcha()->initSecretKey('6LfshooUAAAAAFhAmnsLxeSH1KpgamMoi1422V1n');

$pp->sendEmailTo(['info@jestalt.com','wiseman@jestalt.com']);

echo $pp->process($_POST);