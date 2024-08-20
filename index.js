{
    alert("Hello, Welcome to my website. Please press The OK button to continue §§ Hej och välkommen till mitt websida. Var vänlig och tryck på OK knappen")
    prompt("Write the first name, Skriv namn 1: ");
    prompt("Write the second name, Skriv namn 2: ")
    var n = Math.random();
    n = n*100;
    m = Math.floor(n) + 1;
    if (m >= 90) {
        alert(m + "%" + ", the probability is high");
    } else {
        alert(m + "%" + ", the probability is low");
    }
    var sk = confirm("Do you want to do the test again?");
    if (sk === true) {
    prompt("Write the first name, Skriv namn 1: ");
    prompt("Write the second name, Skriv namn 2: ");
    var n = Math.random();
    n = n * 100;
    m = Math.floor(n) + 1;
    if (m >= 90) {
        alert(m + "%" + ", the probability is high");
    } else {
        alert(m + "%" + ", the probability is low");
    }
    } else {
        alert("Have a nice day!!!");
    }
}