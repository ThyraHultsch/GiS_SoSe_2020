namespace Aufgabe05 {

    let divProdukteGesamt: HTMLElement = document.createElement("div");
    divProdukteGesamt.setAttribute("class", "inhalt");

    let divKA: HTMLElement = document.createElement ("div");
    divKA.setAttribute("class", "kategorie"); 

    let hDiv: HTMLElement = document.createElement ("h1");
    hDiv.setAttribute("id", "coffee");
    hDiv.innerHTML = "Coffee";

    divKA.appendChild(hDiv);
    divProdukteGesamt.appendChild(divKA);

    for (let i: number = 0; i < coffee.length; i++) {

        let divX: HTMLDivElement = document.createElement("div");
        divX.setAttribute("class", "artikel");
        divProdukteGesamt.appendChild(divX);

        let bildDiv: HTMLElement = document.createElement("img");
        bildDiv.setAttribute("src", coffee[i].bild);
        divX.appendChild(bildDiv);

        let h4Div: HTMLElement = document.createElement("h4");
        divX.appendChild(h4Div);
        h4Div.innerHTML = coffee[i].name;

        let pDiv: HTMLElement = document.createElement("p");
        divX.appendChild(pDiv);
        pDiv.innerHTML = coffee[i].beschreibung;

        let h5Div: HTMLElement = document.createElement("h5");
        divX.appendChild(h5Div);
        h5Div.setAttribute("class", "preis");
        h5Div.innerHTML = coffee[i].preis;

        let button: HTMLElement = document.createElement("button");
        button.innerHTML = "Add to cart";
        divX.appendChild(button);

    }


    let divKAX: HTMLElement = document.createElement ("div");
    divKAX.setAttribute("class", "kategorie"); 

    let hDivX: HTMLElement = document.createElement ("h1");
    hDivX.setAttribute("id", "coffee");
    hDivX.innerHTML = "Coffee";

    divKAX.appendChild(hDivX);
    divProdukteGesamt.appendChild(divKAX);

    for (let j: number = 0; j <= mugs.length - 1; j++) {

        let divXX: HTMLElement = document.createElement("div");
        divXX.setAttribute("class", "artikel");
        divProdukteGesamt.appendChild(divXX);

        let bildDivX: HTMLElement = document.createElement("img");
        bildDivX.setAttribute("src", mugs[j].bild);
        divXX.appendChild(bildDivX);

        let h4DivX: HTMLElement = document.createElement("h4");
        divXX.appendChild(h4DivX);
        h4DivX.innerHTML = coffee[j].name;

        let pDivX: HTMLElement = document.createElement("p");
        divXX.appendChild(pDivX);
        pDivX.innerHTML = mugs[j].beschreibung;

        let h5DivX: HTMLElement = document.createElement("h5");
        divXX.appendChild(h5DivX);
        h5DivX.setAttribute("class", "preis");
       /*  h5DivX.innerHTML = mugs[j].preis; */

        let button: HTMLElement = document.createElement("button");
        button.innerHTML = "Add to cart";
        divXX.appendChild(button);

    }

    document.getElementById("main")?.appendChild(divProdukteGesamt);

}