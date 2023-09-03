let age = +prompt('Введи год?', 2023);
alert(age % 400)
if(age % 400 == 0) {
alert("В году 366 дней")
}
else if(age % 4 ==0 && age % 100 != 0 ){
    alert ("В году 366 дней")
}
else {
    alert("В году 366 дней")
}
