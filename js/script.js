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
    hover.style.top = (e.pageY - 30) + "px";
    hover.style.left = (e.pageX + 20) + "px";
}

createEconomy()
function createEconomy() {
    economy.forEach(e => {
        addEconomy(e)
    })
}

function addEconomy(eco) {
    let newEconomy = document.createElement("div")
    newEconomy.classList.add("shop")
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
    if (eco.type == "sale") {
        type = "Продажа"
    } else if (eco.type = "buy") {
        type = "Покупка"
    }
    newEconomy.innerHTML = 
    `<div class="type">${type}</div>
    <table class="craftIcon">
        <tr>
            <th class="shopItem" item="${eco.item1}"><img src="${(eco == null) ? "/img/button_shop.png" : item[eco.item1].image}" alt=""><span class="count">${eco.countitem1}</span></th>
            <th class="arrow"></th>
            <th class="shopItem" item="${eco.item2}"><img src="${(eco == null) ? "./img/button_shop.png" : item[eco.item2].image}" alt=""><span class="count">${eco.countitem2}</span></th>
        </tr>
    </table>
</div>`
document.getElementById("economylist").append(newEconomy);
}
