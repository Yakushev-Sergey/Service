
<?php 

if ($_POST['.form'] == 1){
  &form = "номер телефона"
}

$to = "yandex.s5230@yandex.ru"
$from = trim($_POST['tel']);

&message = htmlspecialchars(&_POST['massage']);
&message = urldecode($massage);
&message = trim($massage);

if(mail(&to, &message)) {
  echo "письмо отправленно "
} else {
  " письмо не отправленно "
}














?>















