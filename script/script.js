var projects = [
    savedItems = {
        category: "UX",
        link: "../work/saved-items/",
        img: "../../images/card-images/savedItems.png",
        alt: "image",
        title: "Saved Items",
        desc: "Description",
        feat: true,
        featImg: "./images/card-images/savedItems.png",
    },
    navigation = {
        category: "UX",
        link: "#",
        img: "../../images/card-images/navigation.png",
        alt: "image",
        title: "Navigation and Icons",
        desc: "Description",
        feat: true,
        featImg: "./images/card-images/navigation.png",
    },
    collection = {
        category: "UX",
        link: "#",
        img: "../../images/card-images/collectionManagement.png",
        alt: "image",
        title: "Collection Management",
        desc: "Description",
        feat: true,
        featImg: "./images/card-images/collectionManagement.png",
    },
    download = {
        category: "UX",
        link: "#",
        img: "../../images/card-images/downloadHistory.png",
        alt: "image",
        title: "Download History",
        desc: "Description",
        feat: true,
        featImg: "./images/card-images/downloadHistory.png",
    },
    studyRoom = {
        category: "UX",
        link: "#",
        img: "../../images/card-images/placeholder.svg",
        alt: "image",
        title: "Study Room Scheduling Redesign",
        desc: "Description",
        feat: false,
        featImg: "./images/card-images/placeholder.svg",
    },
    maps = {
        category: "UX",
        link: "#",
        img: "../../images/card-images/placeholder.svg",
        alt: "image",
        title: "Library Floor Maps",
        desc: "Description",
        feat: false,
        featImg: "./images/card-images/placeholder.svg",
    },
    concepts = {
        category: "UX",
        link: "#",
        img: "../../images/card-images/placeholder.svg",
        alt: "image",
        title: "Concepts",
        desc: "Description",
        feat: false,
        featImg: "./images/card-images/placeholder.svg",
    },
    brighton = {
        category: "GD",
        link: "#",
        img: "../../images/card-images/placeholder.svg",
        alt: "image",
        title: "Brighton, Utah",
        desc: "Description",
        feat: false,
        featImg: "./images/card-images/placeholder.svg",
    },
    tacoBomb = {
        category: "GD",
        link: "#",
        img: "../../images/card-images/placeholder.svg",
        alt: "image",
        title: "Taco Bomb",
        desc: "Description",
        feat: false,
        featImg: "./images/card-images/placeholder.svg",
    },
    photography = {
        category: "GD",
        link: "#",
        img: "../../images/card-images/placeholder.svg",
        alt: "image",
        title: "Rebekah Crockett Photography",
        desc: "Description",
        feat: false,
        featImg: "./images/card-images/placeholder.svg",
    },
    jazz = {
        category: "GD",
        link: "#",
        img: "../../images/card-images/placeholder.svg",
        alt: "image",
        title: "Utah Jazz Infographic",
        desc: "Description",
        feat: false,
        featImg: "./images/card-images/placeholder.svg",
    },
]

var i = 0;
var len = projects.length;
var featuredWork = "";
for (; i < len; i++) {
    if (projects[i].feat == true) {
        featuredWork += `<a href="` + projects[i].link + `">`;
        featuredWork += `<div class="card"><img src="` + projects[i].featImg + `" alt="` + projects[i].alt + `" />`;
        featuredWork += `<div><h3>` + projects[i].title + `</h3>`;
        featuredWork += `<p>` + projects[i].desc + `</p></div></div></a>`;
    }
}

var i = 0;
var len = projects.length;
var uxProjects = "";
for (; i < len; i++) {
    if (projects[i].category == "UX") {
        uxProjects += `<a href="` + projects[i].link + `">`;
        uxProjects += `<div class="card"><img src="` + projects[i].img + `" alt="` + projects[i].alt + `" />`;
        uxProjects += `<div><h3>` + projects[i].title + `</h3>`;
        uxProjects += `<p>` + projects[i].desc + `</p></div></div></a>`;
    }
}

var i = 0;
var len = projects.length;
var gdProjects = "";
for (; i < len; i++) {
    if (projects[i].category == "GD") {
        gdProjects += `<a href="` + projects[i].link + `">`;
        gdProjects += `<div class="card"><img src="` + projects[i].img + `" alt="` + projects[i].alt + `" />`;
        gdProjects += `<div><h3>` + projects[i].title + `</h3>`;
        gdProjects += `<p>` + projects[i].desc + `</p></div></div></a>`;
    }
}


/* ---------- NAVBAR ---------- */
function openNav() {
    document.getElementById("sideNav").style.width = "200px";
    document.getElementById("body").style.marginright = "200px";
    document.getElementById("darken").style.display = "block";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("body").style.marginright = "0";
    document.getElementById("darken").style.display = "none";
}

