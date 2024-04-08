document.addEventListener("load", init)

let paragraphs;


function init() {
    paragraphs = document.querySelectorAll("p");
}




function highlight() {

    for (let i = 0; i < paragraphs.length; i++) {

        let p = paragraphs[i];

        for (let ix = 0; ix < p.length; ix++) {
            if (p[ix] == "L") console.log("Big L");
        }

    }

}

//Script version 0.1//