$("document").ready(function () {
    $(".button_img").mouseenter(function () {
        $(this).attr('src', function (index, attr) {
            return attr.replace(".png", "-active.png");
        });
    });
    $(".button_img").mouseleave(function () {
        $(this).attr('src', function (index, attr) {
            return attr.replace("-active.png", ".png");
        });
    });
});

function sortCrafts(filterGroup) {
    let list = document.querySelectorAll('.shop');
    list.forEach(elem => {
        if ((!filterGroup || elem.getAttribute("type") == filterGroup/* || elem.getAttribute("type") == "minecraft"*/ || elem.getAttribute("type") == "all")) {
            elem.classList.remove('hide');
        } else {
            elem.classList.add('hide');
        }
    let list2 = document.querySelectorAll('.shopclose')
    list2.forEach(elem => {
        if ((!filterGroup || elem.getAttribute("type") == filterGroup/* || elem.getAttribute("type") == "minecraft"*/ || elem.getAttribute("type") == "all")) {
            elem.classList.remove('hide');
        } else {
            elem.classList.add('hide');
        }
    })
});
}

document.addEventListener('mousemove', function (e) {
    hover(e);
});
//craftlist
document.getElementById("economylist").addEventListener("scroll", function (e) {
    hover(null);
});
function hover(e) {
    if (e == null) {
        document.getElementById("hover").style.display = "none";
        return;
    }
    let itemID = e.target.getAttribute("item");
    if (itemID == "null" || itemID == null) {
        document.getElementById("hover").style.display = "none";
        return;
    } else {
        if (!item[itemID]) return;
        document.getElementById("hover").style.display = "block";
    }

    let name = `<p class='itemNameHover'>${item[itemID].name}</p>`;
    if (item[itemID].lore) {
        item[itemID].lore.forEach(e => {
            name += "<p>" + ((e == "") ? "&nbsp;" : e) + "</p>";
        });
    }
    let hover = document.getElementById("hover");
    hover.innerHTML = name;
    if (document.getElementById("side").className == "sidebar") {
        hover.style.top = (e.pageY - 30) + "px";
        hover.style.left = (e.pageX - 55) + "px";
    } else if (document.getElementById("side").className == "sidebar open") {
        hover.style.top = (e.pageY - 30) + "px";
        hover.style.left = (e.pageX - 235) + "px";
    }
}

createEconomy()
function createEconomy() {
    economy.forEach(e => {
        addEconomy(e)
    })
}

function addEconomy(eco) {
    var newEconomy = document.createElement("div")
    var arrow = document.getElementById('arrow') 
    newEconomy.classList.add(eco.class)
    newEconomy.setAttribute("type", eco.type)
    if (item[eco.item1] == "null") {
        console.log("Unknown ITEM: " + eco.item1)
        return;
    }
    if (item[eco.item2] == "null") {
        console.log("Unknown ITEM: " + eco.item2)
        return;
    }
    var type = ""
    if (eco.type == "military") {
        type = "Продажа"
    } else {
        type = "Покупка"
    }

    var html = ""
    if (eco.sale.length > 1) {
        newEconomy.style.width = "262px"
        html += `<div class="type">${type}</div>
        <table class="craftIcon">
            <tr>
                <th class="shopItem" item="${eco.sale[0]}"><img src="${(eco == null) ? "/img/button_shop.png" : item[eco.sale[0]].image}" alt=""><span class="count">${eco.sale_count[0]}</span></th>
                <th class="none"></th>
                <th class="shopItem" item="${eco.sale[1]}"><img src="${(eco == null) ? "/img/button_shop.png" : item[eco.sale[1]].image}" alt=""><span class="count">${eco.sale_count[1]}</span></th>
                <th class="arrow" style="padding-left: 25px; padding-right: 25px;"></th>
                <th class="shopItem" item="${eco.buy}"><img src="${(eco == null) ? "./img/button_shop.png" : item[eco.buy].image}" alt=""><span class="count">${eco.buy_count}</span></th>
            </tr>
        </table>
    </div>`
    } else if (eco.sale.length = 1) {
        html += `<div class="type">${type}</div>
        <table class="craftIcon">
            <tr>
                <th class="shopItem" item="${eco.sale}"><img src="${(eco == null) ? "/img/button_shop.png" : item[eco.sale].image}" alt=""><span class="count">${eco.sale_count}</span></th>
                <th class="arrow"></th>
                <th class="shopItem" item="${eco.buy}"><img src="${(eco == null) ? "./img/button_shop.png" : item[eco.buy].image}" alt=""><span class="count">${eco.buy_count}</span></th>
            </tr>
        </table>
    </div>`
    }
    newEconomy.innerHTML = html
document.getElementById("economylist").append(newEconomy);
}

function openInfo() {
    document.getElementById("infobox").style.display = "block";
    var button = anime({
        targets: ".slidebutton",
        translateX: 1420,
        translateY: ["-50%","-50%"],
        easing: 'easeInOutExpo'
    })
    var infobox = anime({
        targets: ".infobox",
        translateX: ['0%', '20%'],
        left: ["0%", "20%"],
        opacity: ['0%', '100%'],
        delay: 200,
        easing: 'easeInOutExpo'
    })
    var closebtn = anime({
        targets: ".closebutton",
        opacity: "100%",
        easing: 'easeInOutExpo'
    })
}

function closeInfo() {
    var button = anime({
        targets: ".slidebutton",
        translateX: 0,
        translateY: ["-50%","-50%"],
        easing: 'easeInOutExpo'
    })
    var infobox = anime({
        targets: ".infobox",
        translateX: ['0%', '20%'],
        left: ["0%", "20%"],
        opacity: ['0%', '100%'],
        delay: 200,
        direction: 'reverse',
        easing: 'easeInOutExpo',
        complete: function(anim) {
            document.getElementById("infobox").style.display = "none";
        }
    })
    var closebtn = anime({
        targets: ".closebutton",
        opacity: "100%",
        direction: 'reverse',
        easing: 'easeInOutExpo'
    })
}

$(".slidebutton").click(openInfo)
$(".closebutton").click(closeInfo)