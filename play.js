let gameBoard1 = [
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black', szam: 1},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'white'},{szin: 'black', szam: 0},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black', szam: 2},{szin: 'white'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'black'},{szin: 'white'},{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'white'},{szin: 'black'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black', szam: 2},{szin: 'white'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black',szam: 3},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
];
let gameBoard2 = [
    [{szin: 'white'},{szin: 'white'},{szin: 'black', szam: 0},{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'black'},{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'black', szam: 3},{szin: 'white'},{szin: 'black'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black', szam: 1},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'black', szam: 2},{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'black'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'black', szam: 2},{szin: 'white'},{szin: 'white'}],
]
let gameBoard3 = [
    [{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black', szam: 3},{szin: 'white'},{szin: 'black', szam: 2},{szin: 'white'},{szin: 'black'}],
    [{szin: 'white'},{szin: 'black', szam: 0},{szin: 'black'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'white'},{szin: 'black', szam: 1},{szin: 'white'},{szin: 'white'},{szin: 'black'},{szin: 'black', szam: 1},{szin: 'black'},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black'},{szin: 'black'},{szin: 'black'},{szin: 'white'},{szin: 'white'},{szin: 'black', szam: 3},{szin: 'white'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'black', szam: 1},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black', szam: 0},{szin: 'black'},{szin: 'white'}],
    [{szin: 'black', szam: 3},{szin: 'white'},{szin: 'black'},{szin: 'white'},{szin: 'black', szam: 0},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'}],
    [{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'white'},{szin: 'black',szam:0},{szin: 'white'}],
]

//valtozok
let palyaValaszto = document.querySelector("#palyaValaszto");
let jatekTer = document.querySelector("#jatekTer");
let jatekMatrix;//matrix amiben dolgozok a modellben
let jatekTablazat;//a tablazat amit a jatekos lat
let gyozelemResz = document.querySelector("#gyozelemResz");
let newGameBtn = document.querySelector("#newGameBtn");
let startGameBtn = document.querySelector("#startGameBtn");
let timer;
let elteltIdo = 0;
let idoKiiras = document.querySelector("#idoKiiras");

let ujJatekosNevDiv = document.querySelector("#ujJatekosNev");
let jatekosNeveBtn = document.querySelector("#jatekosNeveMentes");
let ujNevmegadasBtn = document.querySelector("#ujNevmegadasBtn");
let jatekosNeveInp = document.querySelector("#jatekosNeveInp");
let jatekosNeve = "";
let jatekosNeveKiir = document.querySelector("#jatekosNeveKiir");

let jatekMenteseBtn = document.querySelector('#jatekMenteseBtn');
let visszaPalyavalaszohozBtn = document.querySelector('#visszaPalyavalaszohozBtn');
let mentettJatekok = [];
let mentettJatekokDiv = document.querySelector("#mentettJatekokDiv");
let legutobbiEredmenyekDiv = document.querySelector("#legutobbiEredmenyek");
let eredmenyek = [];
let aktPalyaNeve = "";

//jateklogika

function createMatrix(jatekTabla) {
    jatekMatrix = [];
    for(let i=0;i<jatekTabla.length;i++) {
        let sorMatrix = []
        for(let obj of jatekTabla[i]) {
            if(obj.szin === 'black') {
                if(obj.szam !== undefined) {
                    if(obj.szam > 0) {
                        sorMatrix.push({szin: 'black', szam: obj.szam, dbkorteKorulotte: 0, szovegszin: 'red'});
                    } else if (obj.szam === 0){
                        sorMatrix.push({szin: 'black', szam: obj.szam, dbkorteKorulotte: 0, szovegszin: 'green'});
                    }
                } else {
                    sorMatrix.push({szin:'black'});
                }
            } else if (obj.szin === 'white') {
                sorMatrix.push({szin: 'white', hasBulb: false});
            }
        }
        jatekMatrix.push(sorMatrix);
    }
    createJatekTabla()
}

function createJatekTabla(idomp) {
    if(idomp===undefined) {
        idoKiiras.innerHTML='0:00';
    } else {
        elteltIdo=idomp;
        elteltIdo--;
        changeTime();
    }
    jatekTablazat = document.createElement("table");
    for(let i=0;i<jatekMatrix.length;i++) {
        let jatekTablazatSor = document.createElement("tr");
        for(let cella of jatekMatrix[i]) {
            let jatekTablazatCella = document.createElement("td");
            if(cella.szin === 'black') {
                if(cella.szam !== undefined) {
                    jatekTablazatCella.innerHTML=cella.szam;
                    jatekTablazatCella.style.color=cella.szovegszin;
                }
                jatekTablazatCella.classList.add("blackCell");
            } else if(cella.szin === 'white') {
                jatekTablazatCella.classList.add("whiteCell");
            }
            jatekTablazatSor.append(jatekTablazatCella);
        }
        jatekTablazat.append(jatekTablazatSor);
    }
    jatekTer.append(jatekTablazat);
}

function updateJatekTabla() {
    for(let i=0;i<jatekMatrix.length;i++) {
        for(let j=0;j<jatekMatrix.length;j++) {
             if(jatekTablazat.children[i].children[j].classList.contains('image')) {
                jatekTablazat.children[i].children[j].classList = ['image'];
            } else {
                jatekTablazat.children[i].children[j].classList = [];
            } 
            if(jatekMatrix[i][j].szin === 'black') {
                jatekTablazat.children[i].children[j].classList.add("blackCell");
                if (jatekMatrix[i][j].szam !== undefined) {
                    if (jatekMatrix[i][j].szovegszin === 'white') {
                        jatekTablazat.children[i].children[j].style.color='white';
                    } else if (jatekMatrix[i][j].szovegszin === 'red') {
                        jatekTablazat.children[i].children[j].style.color='red';
                    } else if (jatekMatrix[i][j].szovegszin === 'green') {
                        jatekTablazat.children[i].children[j].style.color='green';
                    }
                }
            } else if (jatekMatrix[i][j].szin === 'white') {
                jatekTablazat.children[i].children[j].classList.add("whiteCell");
            } else if (jatekMatrix[i][j].szin === 'yellow') {
                jatekTablazat.children[i].children[j].classList.add("lightCell");
            } else if (jatekMatrix[i][j].szin === 'red') {
                jatekTablazat.children[i].children[j].classList.add("redCell");
            }
        }
    }
}

function clickAjatekTablazoton(event) {
    let target = event.target;
    if(target.matches("td") && !target.classList.contains("blackCell")) {
        target.classList.toggle("image");
        y = getCoordinates(target).x;
        x = getCoordinates(target).y;
        bulbOnit = target.classList.contains("image");
        if(bulbOnit) {
            jatekMatrix[x][y].hasBulb=true;
            vilagitasBeFaltolFalig(x,y);
        } else {
            jatekMatrix[x][y].hasBulb=false;
            vilagitasKiFaltolFalig(x,y);
        }
        keresztezoKortekVizsgalasa(x,y,bulbOnit);
        feketeCellakSzamainakVizsgalasa(x,y,bulbOnit);
        updateJatekTabla();
        isGameOver();
    }
}

function isGameOver() {//ha minden cella sarga es egyik sem pirosű
    let countBlackAndYellow = 0
    let allBlackCellNumberCorrect = true;

    for(let i=0;i<jatekMatrix.length && allBlackCellNumberCorrect;i++) {
        for(let j=0;j<jatekMatrix[i].length && allBlackCellNumberCorrect;j++) {
            if(jatekMatrix[i][j].szin === 'yellow' || jatekMatrix[i][j].szin === 'black') {
                countBlackAndYellow++;
            }
            if(jatekMatrix[i][j].szin === 'black' && jatekMatrix[i][j].szovegszin === 'red') { 
                allBlackCellNumberCorrect = false;
            }
        }
    }

    if(countBlackAndYellow == jatekMatrix.length * jatekMatrix.length && allBlackCellNumberCorrect) {
        gyozelemResz.innerHTML=`<h2 style="text-align: center">Győztél</h2>`;
        newGameBtn.style.display="block";
        clearInterval(timer);
        elteltIdo--;
        changeTime();
        jatekTablazat.removeEventListener("click",clickAjatekTablazoton);

        let obj = {jatekosNeve: jatekosNeve, ido: elteltIdo, jatekMatrix: jatekMatrix, palyaNeve: aktPalyaNeve};
        eredmenyek.push(obj);
        localStorage.eredmenyek = JSON.stringify(eredmenyek);
        jatekMenteseBtn.style.display="none";
    }

}

function keresztezoKortekVizsgalasa(sor,oszlop,bulbOnit) {//megvizsgaljuk hogy van e vele egy sorban vagy oszlopban masik bulb, ha van mindketto cellat a cellmatrixban pirosra allitjuk
    //ha van vele egy sorban vagy oszlopban masik is csak az legyen piros
    if(bulbOnit) {
        for(let i=0;i<jatekMatrix.length;i++) {
            for(let j=0;j<jatekMatrix[i].length;j++) {
                if(jatekMatrix[i][j].hasBulb && vanMasikKorteSorbanVagyOszlopban(i,j)) {
                    jatekMatrix[i][j].szin='red';
                }
            }
        }
    } else {
        if(vanMasikKorteSorbanVagyOszlopban(sor,oszlop)) {
            jatekMatrix[sor][oszlop].szin='yellow';
        } else {
            jatekMatrix[sor][oszlop].szin='white';
        }
        for(let i=0;i<jatekMatrix.length;i++) {
            for(let j=0;j<jatekMatrix[i].length;j++) {
                if(jatekMatrix[i][j].hasBulb) {
                    if(!vanMasikKorteSorbanVagyOszlopban(i,j)) {
                        jatekMatrix[i][j].szin='yellow';
                    }
                }
            }
        }
    }
}

function vilagitasBeFaltolFalig(sor,oszlop) {
    jatekMatrix[sor][oszlop].szin="yellow";
    let i=oszlop+1;
    while(i<jatekMatrix[sor].length && jatekMatrix[sor][i].szin !== 'black') {
        jatekMatrix[sor][i].szin="yellow";
        i++;
    }  

    i=oszlop-1;
    while(i>=0 && jatekMatrix[sor][i].szin !== 'black') {
        jatekMatrix[sor][i].szin="yellow";
        i--;
    }

    i=sor+1;
    while(i<jatekMatrix[oszlop].length && jatekMatrix[i][oszlop].szin !== 'black') {
        jatekMatrix[i][oszlop].szin="yellow";
        i++;
    }

    i=sor-1;
    while(i>=0 && jatekMatrix[i][oszlop].szin !== 'black') {
        jatekMatrix[i][oszlop].szin="yellow";
        i--;
    }
}

function vilagitasKiFaltolFalig(sor,oszlop) {
    if(!vanMasikKorteSorbanVagyOszlopban(sor,oszlop)) {
        jatekMatrix[sor][oszlop].szin="white";
    }
    let i=oszlop+1;
    while(i<jatekMatrix[sor].length && jatekMatrix[sor][i].szin !== 'black') {
        if(!vanMasikKorteSorbanVagyOszlopban(x,i) && !jatekMatrix[sor][i].hasBulb) {
            jatekMatrix[sor][i].szin="white";
        }
        i++;
    }
    
    i=oszlop-1;
    while(i>=0 && jatekMatrix[sor][i].szin !== 'black') {
        if(!vanMasikKorteSorbanVagyOszlopban(sor,i) && !jatekMatrix[sor][i].hasBulb) {
            jatekMatrix[sor][i].szin="white";
        }
        i--;
    }

    i=sor+1;
    while(i<jatekMatrix[oszlop].length && jatekMatrix[i][oszlop].szin !== 'black') {
        if(!vanMasikKorteSorbanVagyOszlopban(i,oszlop) && !jatekMatrix[i][oszlop].hasBulb) {
            jatekMatrix[i][oszlop].szin="white";
        }
        i++;
    }

    i=sor-1;
    while(i>=0 && jatekMatrix[i][oszlop].szin !== 'black') {
        if(!vanMasikKorteSorbanVagyOszlopban(i,oszlop) && !jatekMatrix[i][oszlop].hasBulb) {
            jatekMatrix[i][oszlop].szin="white";
        }
        i--;
    }
}

function vanMasikKorteSorbanVagyOszlopban(sor,oszlop) {
    let i=oszlop+1;
    while(i<jatekMatrix[sor].length && jatekMatrix[sor][i].szin !== 'black') {
        if (jatekMatrix[sor][i].hasBulb) {
            return true;
        }
        i++;
    }

    i=oszlop-1;
    while(i>=0 && jatekMatrix[sor][i].szin !== 'black') {
        if (jatekMatrix[sor][i].hasBulb) {
            return true;
        }
        i--;
    }

    i=sor+1;
    while(i<jatekMatrix[oszlop].length && jatekMatrix[i][oszlop].szin !== 'black') {
        if (jatekMatrix[i][oszlop].hasBulb) {
            return true;
        }
        i++;
    }

    i=sor-1;
    while(i>=0 && jatekMatrix[i][oszlop].szin !== 'black') {
        if (jatekMatrix[i][oszlop].hasBulb) {
            return true;
        }
        i--;
    }
    return false;
}

function ujCellaSzovegSzin(sor,oszlop) {
    if (jatekMatrix[sor][oszlop].dbkorteKorulotte==jatekMatrix[sor][oszlop].szam)  {
        jatekMatrix[sor][oszlop].szovegszin="green";
    } else {
        jatekMatrix[sor][oszlop].szovegszin="red";
    }
}

function feketeCellakSzamainakVizsgalasa(sor,oszlop,bulbOnit) {//csokkenti a jatekMatrix a fekete csucsokban levo szamokat, ha villanykortet raktunk oda, illetve noveli, ha elvettunk onnan
    //alul
    if(sor+1<jatekMatrix.length) {
        if(jatekMatrix[sor+1][oszlop].szin === 'black' && jatekMatrix[sor+1][oszlop].szam !== undefined) {
            if (bulbOnit) {
                jatekMatrix[sor+1][oszlop].dbkorteKorulotte++;
            } else {
                jatekMatrix[sor+1][oszlop].dbkorteKorulotte--;
            }
            ujCellaSzovegSzin(sor+1,oszlop);
        }
    }
    //felul
    if(sor-1>=0) {
        if(jatekMatrix[sor-1][oszlop].szin === 'black' && jatekMatrix[sor-1][oszlop].szam !== undefined) {
            if (bulbOnit) {
                jatekMatrix[sor-1][oszlop].dbkorteKorulotte++;
            } else {
                jatekMatrix[sor-1][oszlop].dbkorteKorulotte--;
            }
            ujCellaSzovegSzin(sor-1,oszlop);
        }
    }
    //balra
    if(oszlop-1>=0) {
        if(jatekMatrix[sor][oszlop-1].szin === 'black' && jatekMatrix[sor][oszlop-1].szam !== undefined) {
            if (bulbOnit) {
                jatekMatrix[sor][oszlop-1].dbkorteKorulotte++;
            } else {
                jatekMatrix[sor][oszlop-1].dbkorteKorulotte--;
            }
            ujCellaSzovegSzin(sor,oszlop-1);
        }
    }
    //jobbra
    if(oszlop+1<jatekMatrix[sor].length) {
        if(jatekMatrix[sor][oszlop+1].szin === 'black' && jatekMatrix[sor][oszlop+1].szam !== undefined) {
            if (bulbOnit) {
                jatekMatrix[sor][oszlop+1].dbkorteKorulotte++;
            } else {
                jatekMatrix[sor][oszlop+1].dbkorteKorulotte--;
            }
            ujCellaSzovegSzin(sor,oszlop+1);
        }
    }
}

function getCoordinates(cell) {//visszaadja egy cella koordinatait
    let x = cell.cellIndex;
    let y = cell.parentNode.sectionRowIndex;
    return {x,y}
}

function changeTime() {
    elteltIdo++;
    aktPerc = Math.floor(elteltIdo/60);
    aktMp = elteltIdo-aktPerc*60;
    if(aktMp.toString().length==1) {
        idoKiiras.innerHTML=aktPerc+':0'+aktMp;
    } else {
        idoKiiras.innerHTML=aktPerc+':'+aktMp;
    }
}

//palyavalaszto/jatek ujrakezdese

document.querySelector("ul").addEventListener("click", (event) => {
    let target = event.target;
    if(target.matches("img")) {
        palyaValaszto.style.display="none";
        jatekTer.style.display="block";
        switch (target.id) {
            case 'palya1':
                aktPalyaNeve="könnyű";
                createMatrix(gameBoard1);
                break;
            case 'palya2':
                aktPalyaNeve="közepes";
                createMatrix(gameBoard2);
                break;
            case 'palya3':
                aktPalyaNeve="nehéz";
                createMatrix(gameBoard3);
                break;
        }
    }
})

startGameBtn.addEventListener("click",() => {
    if(jatekosNeve === '') {
        alert("Kezdéshez add meg a játékos nevét!")
    } else {
        jatekTablazat.addEventListener("click",clickAjatekTablazoton);
        timer = setInterval(changeTime,1000);
        startGameBtn.style.display="none";
        jatekMenteseBtn.style.display="block";
        ujNevmegadasBtn.style.display="none";
        visszaPalyavalaszohozBtn.style.display="none";
    }
})

function startNewGame() {
    palyaValaszto.style.display="block";
    jatekTer.style.display="none";
    newGameBtn.style.display="none";
    startGameBtn.style.display="block";
    ujNevmegadasBtn.style.display="inline-block";
    visszaPalyavalaszohozBtn.style.display="block";
    gyozelemResz.innerHTML="";
    elteltIdo = 0;
    jatekTablazat.remove();
    getDatafromStorage();
}

newGameBtn.addEventListener("click",startNewGame);

function getDatafromStorage() {
    if(localStorage.jatekosNeve!==undefined) {
        jatekosNeveKiir.innerHTML="Játékos neve: "+localStorage.jatekosNeve;
        jatekosNeve = localStorage.jatekosNeve;
    }  else {
        jatekosNeveKiir.innerHTML="Nincs megadva játékos név";
    }
    if(localStorage.korabbiJatekMentve!==undefined && JSON.parse(localStorage.korabbiJatekMentve).length!==0) {
        mentettJatekok = JSON.parse(localStorage.korabbiJatekMentve);
        
        let newH3 = mentettJatekokDiv.querySelector("h3");
        newH3.innerHTML="Mentett játékaid: ";

        let oldTable = document.querySelector("#uj");
        if(oldTable) {
            oldTable.id="regi";
        }

        let newTable = document.createElement("table");
        newTable.id="uj";
        let newTr = document.createElement("tr");
        let newTh1 = document.createElement("th");
        newTh1.innerHTML="Játékos neve";
        newTr.append(newTh1);
        let newTh2 = document.createElement("th");
        newTh2.innerHTML="Eltelt idő";
        newTr.append(newTh2);
        let newTh3 = document.createElement("th");
        newTh3.innerHTML="Pálya neve";
        newTr.append(newTh3);
        newTable.append(newTr);

        for(let i=0;i<mentettJatekok.length;i++) {
            let newTr = document.createElement("tr");
            let newTd1 = document.createElement("td");
            let newTd2 = document.createElement("td");
            let newTd3 = document.createElement("td");
            let newTd4 = document.createElement("td");
            let newTd5 = document.createElement("td");

            let newFolytBtn = document.createElement("button");
            newFolytBtn.innerHTML="Folytatás";
            newFolytBtn.classList.add("FolytatasBtn");
            newFolytBtn.addEventListener("click",(event) => {//betolti az aktualis jatekot
                let i=0;
                let target = event.target;
                let teso = target.parentNode.parentNode.previousElementSibling;
                while(teso!==null) {
                    i++;
                    teso = teso.previousElementSibling;
                }
                i--;

                aktPalyaNeve = mentettJatekok[i].palyaNeve;
                jatekMatrix = mentettJatekok[i].jatekMatrix;
                palyaValaszto.style.display="none";
                jatekTer.style.display="block";
                createJatekTabla(mentettJatekok[i].ido);
                updateJatekTabla();
                for(let j=0;j<jatekMatrix.length;j++) {
                    for(let k=0;k<jatekMatrix.length;k++) {
                        if(jatekMatrix[j][k].hasBulb) {
                            jatekTablazat.children[j].children[k].classList.add("image");
                        }
                    }
                }
            })

            let newtorlesBtn = document.createElement("button");
            newtorlesBtn.innerHTML="X";
            newtorlesBtn.classList.add("TorlesBtn");
            newtorlesBtn.addEventListener("click",(event) => {
                let target = event.target;
                if(mentettJatekok.length>1) {
                    mentettJatekok.splice(i,1);
                } else {
                    mentettJatekok.shift();
                }
                localStorage.korabbiJatekMentve = JSON.stringify(mentettJatekok);
                let sor = target.parentNode.parentNode;
                sor.remove();
                if(mentettJatekok.length===0) {
                    newH3.innerHTML="Nincsenek mentett játékok";
                    newTable.remove();
                    localStorage.removeItem('korabbiJatekMentve');
                }
            })
            newTd1.innerHTML=mentettJatekok[i].jatekosNeve;
            newTd2.innerHTML=mentettJatekok[i].ido+" mp";
            newTd3.innerHTML=mentettJatekok[i].palyaNeve;
            newTd4.append(newFolytBtn);
            newTd5.append(newtorlesBtn);
            newTr.append(newTd1);
            newTr.append(newTd2);
            newTr.append(newTd3);
            newTr.append(newTd4);
            newTr.append(newTd5);
            newTable.append(newTr);
        }
        mentettJatekokDiv.append(newTable);
        if(oldTable) {
            document.querySelector("#regi").remove();
        }

    } else {
        let newH3 = mentettJatekokDiv.querySelector("h3");
        newH3.innerHTML="Nincsenek mentett játékok";
    } 
    
    if(localStorage.eredmenyek !== undefined) {
        eredmenyek = JSON.parse(localStorage.eredmenyek);

        let H3 = legutobbiEredmenyekDiv.querySelector("h3");
        H3.innerHTML="Eredmények: ";

        let oldTable = legutobbiEredmenyekDiv.querySelector("table");
        if(oldTable) {
            oldTable.remove();
        }

        let newTable = document.createElement("table");
        newTable.id="uj";
        let newTh1 = document.createElement("th");
        newTh1.innerHTML="Játékos neve";
        newTable.append(newTh1);
        let newTh2 = document.createElement("th");
        newTh2.innerHTML="Eltelt idő";
        newTable.append(newTh2);
        let newTh3 = document.createElement("th");
        newTh3.innerHTML="Pálya neve";
        newTable.append(newTh3);

        for(let i=0;i<eredmenyek.length;i++) {
            let newTr = document.createElement("tr");
            let newTd1 = document.createElement("td");
            let newTd2 = document.createElement("td");
            let newTd3 = document.createElement("td");
            newTd1.innerHTML=eredmenyek[i].jatekosNeve;
            newTd2.innerHTML=eredmenyek[i].ido+" mp";
            newTd3.innerHTML=eredmenyek[i].palyaNeve;
            newTr.append(newTd1);
            newTr.append(newTd2);
            newTr.append(newTd3);

            newTr.id=i;
            newTable.append(newTr);
        }
        legutobbiEredmenyekDiv.append(newTable);

    } else {
        let H3 = legutobbiEredmenyekDiv.querySelector("h3");
        H3.innerHTML="Nincsenek eddigi eredmények";
    }
}

getDatafromStorage();

jatekosNeveBtn.addEventListener("click", () => {
    if(jatekosNeveInp.value!=='') {
        jatekosNeve = jatekosNeveInp.value;
        jatekosNeveInp.value = "";
        jatekosNeveKiir.innerHTML="Játékos neve: "+jatekosNeve;
        localStorage.jatekosNeve=jatekosNeve;
        ujJatekosNevDiv.style.display="none";
        ujNevmegadasBtn.style.display="inline-block";
    }
})

ujNevmegadasBtn.addEventListener("click", () => {
    ujJatekosNevDiv.style.display="block";
    ujNevmegadasBtn.style.display="none";
})

visszaPalyavalaszohozBtn.addEventListener("click",startNewGame);

jatekMenteseBtn.addEventListener("click", () => {
    clearInterval(timer);
    let obj = {jatekosNeve: jatekosNeve, ido: elteltIdo, jatekMatrix: jatekMatrix, palyaNeve: aktPalyaNeve};
    mentettJatekok.push(obj);
    localStorage.korabbiJatekMentve = JSON.stringify(mentettJatekok);
    jatekMenteseBtn.style.display="none";
    //visszaPalyavalaszohozBtn.style.display="block";
    startNewGame();
    getDatafromStorage();
})