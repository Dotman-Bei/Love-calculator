function calculateLove() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    var love = Math.floor(Math.random() * 100) + 1;

    document.getElementById("result").innerText = name1 + " and " + name2 + " have a " + love + "% chance of love!";
}