
<?php 
// запуск сессии
session_start();

// Переодресация
function redirect() {
  header('locaTION: index.html');
  exit;
}

// получаем то что вводит пользователь 
$phone = $_POST['phone'];

// запрещаем вводить теги и убираем пробелы
$phone = htmlspecialchars($phone); //преоброзование символов 
$phone = urldecode($phone); //декодирование
$phone = trim($phone); //удаление пробелов



$_SESSION['phone'] = $phone;

// проверка 
if(strlen($phone) <= 10 ) {
  $error_phone = "Короткий номер2";
}

if ( mail("sergey.s5230@yandex.ru", "Номер телефона : ".$phone, "form: sergey.s5230@yandex.ru") ){
  echo ('Письмо отправлено!');
  redirect();
} else {
  echo('есть ошибки');
};








?>















