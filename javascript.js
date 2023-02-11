const DOM = {
    header: document.querySelector(".header"),
    gameContainer: document.querySelector(".game-container"),
    mainContainer: document.querySelector(".main-container"),
    variableContainer: document.querySelector(".variable-container"),
    glucoseDisplay: document.querySelector("#glucose"),
    atpDisplay: document.querySelector("#atp"),
    oxyDisplay: document.querySelector("#oxygen"),
    proDisplay: document.querySelector("#proteins"),
    valDisplay: document.querySelector("#val"),
    serDisplay: document.querySelector("#ser"),
    metDisplay:document.querySelector("#met"),
    displayContainer: document.querySelector(".display-container"),
    aminoAcidContainer: document.createElement("div"),
    geneContainer: document.createElement("div"),
    organelleButtons: document.querySelector(".cell-buttons-container"),
    organelleActions: document.querySelector(".cell-actions-container"),
    mitoActionsContainer: document.createElement("div"),
    cellMemActionsContainer: document.createElement("div"),
    nucleusActionsContainer: document.createElement("div"),
    ribosomeActionsContainer: document.createElement("div"),
    mitoBtn: document.querySelector("#mitochondria"),
    cellMemBtn: document.querySelector("#cell-membrane"),
    nucleusBtn: document.querySelector("#nucleus"),
    ribosomeBtn: document.querySelector("#ribosome"),


    createEl(element){
        return document.createElement(element)
    },

    mitoBtnCreated: false,
    cellMemBtnCreated: false,
    nucleusBtnCreated:false,
    ribosomeBtnCreated: false,

    aminoAcidBtnCreated:false,
    aminoAcidText: false,
    geneBtnCreated:false,
}

DOM.mitoBtn.addEventListener("click", function(){
    if(!DOM.mitoBtnCreated){
        const btn1 = DOM.createEl("button");
        const btn2 = DOM.createEl("button");
        const btn3 = DOM.createEl("button");
        btn1.innerHTML = "Des";
        btn2.innerHTML = "Instr";
        btn3.innerHTML = "Produce";
        btn1.classList.add("btn-action");
        btn2.classList.add("btn-action");
        btn3.classList.add("btn-action");
        DOM.mitoActionsContainer.append(btn1);
        DOM.mitoActionsContainer.append(btn2);
        DOM.mitoActionsContainer.append(btn3);
        DOM.mitoActionsContainer.classList.add("active");
        DOM.organelleActions.append(DOM.mitoActionsContainer);
        DOM.mitoBtnCreated= true;
    }

    DOM.mitoActionsContainer.style.display = "flex";
    DOM.cellMemActionsContainer.style.display = "none";
    DOM.nucleusActionsContainer.style.display = "none";
    DOM.ribosomeActionsContainer.style.display = "none";
})

DOM.cellMemBtn.addEventListener("click", function(){
    if(!DOM.cellMemBtnCreated){
        const btn1 = DOM.createEl("button");
        const btn2 = DOM.createEl("button");
        const btn3 = DOM.createEl("button");
        btn1.innerHTML = "Des";
        btn2.innerHTML = "Glucose";
        btn3.innerHTML = "Amino Acid";
        btn1.classList.add("btn-action");
        btn2.classList.add("btn-action");
        btn3.classList.add("btn-action");
        DOM.cellMemActionsContainer.append(btn1);
        DOM.cellMemActionsContainer.append(btn2);
        DOM.cellMemActionsContainer.append(btn3);
        DOM.cellMemActionsContainer.classList.add("active");
        DOM.organelleActions.append(DOM.cellMemActionsContainer);
        DOM.cellMemBtnCreated= true;
        btn1.addEventListener("click", function(){
            cellMembrane.sayDes();
        })
        btn3.addEventListener("click",function(){
            if(!DOM.aminoAcidBtnCreated){
                const btn1 = DOM.createEl("button");
                const btn2 = DOM.createEl("button");
                const btn3 = DOM.createEl("button");
               // const title = DOM.createEl("p");
                btn1.innerHTML = "SER";
                btn2.innerHTML = "MET";
                btn3.innerHTML= "VAL";
               // title.innerHTML = "Choose an amino acid!"
              //  title.style.marginBottom = "-50px"
              //  DOM.displayContainer.append(title);
                DOM.aminoAcidContainer.append(btn1);
                DOM.aminoAcidContainer.append(btn2);
                DOM.aminoAcidContainer.append(btn3);
                DOM.aminoAcidContainer.classList.add("amino-acid")
                DOM.displayContainer.append(DOM.aminoAcidContainer);
                DOM.aminoAcidBtnCreated = true;
                btn1.addEventListener("click",function(){
                    cellMembrane.getAminoAcid("ser");
                   DOM.aminoAcidContainer.remove();
                   
                   
                    
                })

                btn2.addEventListener("click", function(){
                    cellMembrane.getAminoAcid("met");
                    DOM.aminoAcidContainer.remove()
                })

                btn3.addEventListener("click",function(){
                    cellMembrane.getAminoAcid("val");
                    DOM.aminoAcidContainer.remove()
                })

            }
            
               DOM.displayContainer.innerHTML="";
               
            
            
           
           DOM.displayContainer.append(DOM.aminoAcidContainer);
          


        })
    }

    

    DOM.mitoActionsContainer.style.display = "none";
    DOM.cellMemActionsContainer.style.display = "flex";
    DOM.nucleusActionsContainer.style.display = "none";
    DOM.ribosomeActionsContainer.style.display = "none";
})

DOM.nucleusBtn.addEventListener("click",function(){
    if(!DOM.nucleusBtnCreated){
    const btn1 = DOM.createEl("button");
    const btn2 = DOM.createEl("button");
    btn1.innerHTML = "Say Des";
    btn2.innerHTML = "Check Gene"
    btn1.classList.add("btn-action");
    btn2.classList.add("btn-action");
    DOM.nucleusActionsContainer.append(btn1);
    DOM.nucleusActionsContainer.append(btn2);
    DOM.nucleusActionsContainer.classList.add("active");
    DOM.organelleActions.append(DOM.nucleusActionsContainer);
    DOM.nucleusBtnCreated = true;
        btn2.addEventListener("click",function(){
           if (!DOM.geneBtnCreated){
            const btn1 = DOM.createEl("button");
            const btn2 = DOM.createEl("button");
            const btn3 = DOM.createEl("button");
            const btn4 = DOM.createEl("button");
            btn1.setAttribute("id", 0);
            btn1.textContent = "Gene 1";
            btn2.textContent = "Gene 2";
            btn3.textContent = "Gene 3";
            btn4.textContent = "Gene 4";
            DOM.geneContainer.append(btn1);
            DOM.geneContainer.append(btn2);
            DOM.geneContainer.append(btn3);
            DOM.geneContainer.append(btn4);
            DOM.geneContainer.classList.add("amino-acid");
            DOM.displayContainer.append(DOM.geneContainer);
            DOM.geneBtnCreated = true;
                btn1.addEventListener("click",function(e){
                    DOM.geneContainer.remove();
                    nucleus.checkRNA(e.target.id);
                })

           }

           DOM.displayContainer.innerHTML = "";
           DOM.displayContainer.append(DOM.geneContainer);
        })

}


    DOM.cellMemActionsContainer.style.display = "none";
    DOM.aminoAcidContainer.style.display = "none";
    DOM.nucleusActionsContainer.style.display = "flex";
    DOM.ribosomeActionsContainer.style.display = "none";
})


DOM.ribosomeBtn.addEventListener("click",function(){
    if(!DOM.ribosomeBtnCreated){
        const btn1 = DOM.createEl("button");
        const btn2 = DOM.createEl("button");
        btn1.innerHTML = "Say Des";
        btn2.innerHTML= "Produce Protein";
        btn1.classList.add("btn-action");
        btn2.classList.add("btn-action");
        DOM.ribosomeActionsContainer.append(btn1);
        DOM.ribosomeActionsContainer.append(btn2);
        DOM.ribosomeActionsContainer.classList.add("active");
        DOM.organelleActions.append(DOM.ribosomeActionsContainer);
        DOM.ribosomeBtnCreated = true
    }

    DOM.cellMemActionsContainer.style.display = "none";
    DOM.aminoAcidContainer.style.display = "none";
    DOM.nucleusActionsContainer.style.display = "none";
    DOM.ribosomeActionsContainer.style.display = "flex";

})

const display = {
    showVariables(){
        DOM.glucoseDisplay.innerHTML = `<b>Glucose</b>: ${gameVariables.glucose}`;
        DOM.atpDisplay.innerHTML = `<b>ATP</b>: ${gameVariables.ATP}`;
        DOM.oxyDisplay.innerHTML = `<b>Oxygen</b>: ${gameVariables.oxygen}`;
        DOM.proDisplay.innerHTML = `<b>Proteins</b>: ${gameVariables.proteins}`;
        DOM.metDisplay.innerHTML = `<b>MET</b>: ${gameVariables.met}`;
        DOM.valDisplay.innerHTML = `<b>VAL</b>: ${gameVariables.val}`;
        DOM.serDisplay.innerHTML = `<b>SER</b>: ${gameVariables.ser}`;
    },

    turnRed(div){
        div.style.color = "red"
        setTimeout(function(){
            div.style.color = "";
        },500)
    },

    turnGreen(div){
        div.style.color = "green"
        setTimeout(function(){
            div.style.color = "";
        },500)
    }
}



const gameVariables = {
    glucose: 1,
    ATP: 10,
    oxygen: 1,
    proteins: 0,
    ser: 1,
    met: 1,
    val:1,
    geneCheck: false,
    geneValue: 0,
}


const mitochondria ={
    name: "mitochondria",
    sayDes(){
      console.log(`The ${this.name} is the powerhouse of the cell.`)
    },
    produceATPInstruct(){
        console.log(`The ${this.name} can produce ATP. It costs one glucose molecule and one oxygen molecule
         and produces 3 ATP molecules.`)
    },

    produceATP(){
        if(gameVariables.glucose>=1 && gameVariables.oxygen>=1){
        gameVariables.ATP += 3;
        gameVariables.glucose -= 1;
        gameVariables.oxygen -= 1;
        console.log("Three ATP produced!")
        } else if(gameVariables.glucose === 0 && gameVariables.oxygen===0){
            console.log("Not enough glucose and oxygen!")
        } else if(gameVariables.glucose === 0){
            console.log("Not enough glucose!")
        } else if (gameVariables.oxygen === 0){
            console.log("Not enough oxygen!")
        }
    },

    
}


const cellMembrane = {
    name: "cell membrane",
    sayDes(){
        DOM.displayContainer.innerHTML = `The ${this.name} surrounds the cell. It also allows materials in and out.`;
        console.log(`The ${this.name} surrounds the cell. It also allows materials in and out.`)
    },
    getGlucose(){
        gameVariables.ATP -= 1;
        gameVariables.glucose =+ 1;
        console.log("One glucose entered the cell!")
    },

    getAminoAcid(type){
        if(type === "ser" && gameVariables.ATP>=1){
            gameVariables.ser += 1;
            gameVariables.ATP -= 1;
            DOM.displayContainer.innerHTML="One SER amino acid entered the cell!"
            display.showVariables();
            display.turnRed(DOM.atpDisplay);
        }
    }
    
}



const ribosome = {
    name: "ribosome",
    sayDes(){
        console.log(`The ${this.name} uses amino acids to produce proteins.`)
    },

    produceProtein(){
        if(gameVariables.geneCheck===false){
            console.log("Select a gene first.")
        } else if(gameVariables.geneCheck===true){
            let serCheck = 0;
            let metCheck = 0;
            let valCheck = 0;
            for (i=0; i<nucleus.arrayDNA[gameVariables.geneValue].length; i++){
                if(nucleus.arrayDNA[gameVariables.geneValue][i]=== "SER"){
                    serCheck += 1;
                } else if(nucleus.arrayDNA[gameVariables.geneValue][i]==="MET"){
                    metCheck += 1;
                } else if(nucleus.arrayDNA[gameVariables.geneValue][i]==="VAL"){
                    valCheck += 1;
                }
            }
            let aminoAcidCheck = [];
            aminoAcidCheck.push(serCheck);
            aminoAcidCheck.push(metCheck);
            aminoAcidCheck.push(valCheck);
            console.log(aminoAcidCheck);

            if(gameVariables.ser>=aminoAcidCheck[0] && gameVariables.met>=aminoAcidCheck[1] && gameVariables.val>=aminoAcidCheck[2]){
                let userAminoAcid = [];
               userAminoAcid.push(prompt("First amino acid?"));
               userAminoAcid.push(prompt("Second amino acid?"));
               userAminoAcid.push(prompt("Third amino acid?"));
               console.log(userAminoAcid);
               for(i=0; i<userAminoAcid.length; i++){
                if(userAminoAcid[i]!==nucleus.arrayDNA[gameVariables.geneValue][i]){
                   return console.log("Wrong order.")
                } 
                
               }console.log("Protein produced!")
                gameVariables.geneCheck = false;
                gameVariables.ser -= serCheck;
                gameVariables.met -= metCheck;
                gameVariables.val -= valCheck;
            } else{
                console.log("Missing necessary amino acids.")
            }
        }
    }
}

const nucleus = {
    name: "nucleus",
    sayDes(){
        console.log(`Ths ${this.name} is the control center of the cell. The DNA is stored here.`)
    },

    arrayDNA: [["SER","MET","VAL"]],

    checkRNA(gene){
        if(gameVariables.geneCheck===true){
            console.log(`A gene has already been selected.`)
        } else if(gameVariables.ATP>=1 && gene === "0"){
             DOM.displayContainer.textContent = `The DNA is transcribed to RNA. The gene instructs that the following amino acids
            are required to make this protein: ${this.arrayDNA[gene]}`;
                 gameVariables.ATP -= 1;
                 gameVariables.geneCheck=true;
                 gameVariables.geneValue = 0;
        }
    },

    
}

const gameLogic = {
    createBtns2(){
        let x;
        DOM.mitoBtn.addEventListener("click", function(e){
            x = e.target.id
        });
        const methodKeys = Object.keys(x).filter(key=> typeof x[key] === "function");
        console.log(methodKeys);
    },

    accessObject(){
        DOM.mitoBtn.addEventListener("click", function(e){
            console.log(e.target.id);
            return(e.target.id);
            
        })
    }
}



const gameController = {

}

display.showVariables()

//buttons for each organelle and a div which brings up the function choices for each organelle as additional buttons

//a display area to display messages

//a display area to display game variables

//a way to select different genes

//transcription gameplay (select gene, transcribe into RNA, then replace codons with correct amino acids)

//after checking for right number of amino acids, select them in the right order - done

//a way to display which proteins have been produced(or just a counter)

//a way to check if all proteins have been produced (game over)

//image of cell which highlights different organelles upon selection?