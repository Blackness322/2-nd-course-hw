function findSeason() {
    let userNum = prompt("Введите номер месяца");
    if ((userNum <= 2 && userNum >= 1) || userNum == 12) {
        alert("Зима!");
    } else if (userNum >= 3 && userNum <= 5) {
        alert("Весна!");
    } else if (userNum > 5 && userNum <= 8) {
        alert("Лето!");
    } else if (userNum >= 9 && userNum < 12) {
        alert("Осень!");
    } else if (isNaN(userNum)) {
        alert("Введенные вами данные не являются числом");
    } else if (userNum > 12 || userNum < 1) {
        alert("Введите число от 1 до 12");
    } else {
        confirm("Вы хотите выйти из игры?");
    }
}
