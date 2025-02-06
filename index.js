var memberName = ["hikaru", "hono", "karin", "ten", "rena"];

var currentMember = "hono";
var previousMember = "default";

$(".btn").click(function() {
    var ramdomNumber = Math.floor(Math.random() * 5);
    $(".img-container").slideUp().slideDown();
    currentMember = memberName[ramdomNumber]
    if (previousMember === currentMember) {
        while (previousMember === currentMember) {
            var ramdomNumber = Math.floor(Math.random() * 5);
            currentMember = memberName[ramdomNumber]
        }
    } 
    if (currentMember === "hono") {
        chooseHono();
    } else if (currentMember === "karin") {
        chooseKarin();
    } else if (currentMember === "hikaru") {
        chooseHikaru();
    } else if (currentMember === "ten") {
        chooseTen();
    } else if (currentMember === "rena") {
        chooseRena();
    } 
});

function chooseHikaru() {
    $(".overlay-head").text("Morita Hikaru");
        document.querySelector(".overlay").innerHTML = "Morita Hikaru is the first center for Sakurazaka46 <br/> since its renaming from Keyakizaka46. <br/> Hikaru, who is known for being the shortest member <br/> in Sakurazaka46, <br/> is also very talented in drawing.";
        document.querySelectorAll("img")[0].setAttribute("src", "./HeadIMG3.png");
        previousMember = "hikaru";
}

function chooseHono() {
    $(".overlay-head").text("Tamura Hono");
        document.querySelector(".overlay").innerHTML = "Tamura Hono is one of the athletic members of the group. <br/> She played volleyball since elementary and got into a university <br/> through an atheltic scholarship. <br/> Being born in Osaka, her sense of humor is good too <br/> and she is someone who gives big reactions <br/> during variety programs.<br/>";
        document.querySelectorAll("img")[0].setAttribute("src", "./HeadIMG2.png");
        previousMember = "hono";
}

function chooseKarin() {
    $(".overlay-head").text("Fujiyoshi Karin");
        document.querySelector(".overlay").innerHTML = "Karin Fujiyoshi was born on 29 August 2001 in Osaka, Japan.<br/> She is an actress, known for Monsutâ (2024),<br/> Soko magattara, Sakurazaka? (2020) <br/> and Songs of Tokyo (2018).";
        document.querySelectorAll("img")[0].setAttribute("src", "./HeadIMG4.png");
        previousMember = "karin";
}

function chooseTen() {
    $(".overlay-head").text("Yamazaki Ten");
        document.querySelector(".overlay").innerHTML = "Ten Yamasaki is a Japanese idol, model and actress.<br/> She is a member of the idol group Sakurazaka46 <br/> and an exclusive model for the fashion magazine ViVi.";
        document.querySelectorAll("img")[0].setAttribute("src", "./HeadIMG5.png");
        previousMember = "ten";
}

function chooseRena() {
    $(".overlay-head").text("Moriya Rena");
        document.querySelector(".overlay").innerHTML = "Known as Rena~, the younger Moriya of the group <br/> she aims to become the first burikko member of the group. <br/> She declared her love for bread <br/> during her introduction in Keyakitte, Kakenai <br/> and is also a fan of baking.";
        document.querySelectorAll("img")[0].setAttribute("src", "./HeadIMG6.png");
        previousMember = "rena";
}