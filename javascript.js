const DOM = {
    header: document.querySelector(".header"),
    gameContainer: document.querySelector(".game-container"),
    mainContainer: document.querySelector(".main-container"),
    variableContainer: document.querySelector(".variable-container"),
    glucoseDisplay: document.querySelector("#glucose"),
    atpDisplay: document.querySelector("#atp"),
    oxyDisplay: document.querySelector("#oxygen"),
    co2Display:document.querySelector("#co2"),
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
    startBtn: document.querySelector("#start"),
    startContainer: document.querySelector(".start-container"),
    returnBtn:document.querySelector("#back-button"),
    aminoacidName: document.querySelector("#aminoacidsname"),
    aminoacidSelect: document.querySelector("#selectaminoacid"),
    aminoacidSelectContainer:document.querySelector(".aminoacid-select-container"),
    pheDisplay:document.querySelector("#phe1"),
    leuDisplay:document.querySelector("#leu"),
    ileDisplay:document.querySelector("#ile"),
    metDisplay:document.querySelector("#met"),
    valDisplay:document.querySelector("#val"),
    serDisplay:document.querySelector("#ser"),
    ProDisplay:document.querySelector("#pro"),
    thrDisplay:document.querySelector("#thr"),
    alaDisplay:document.querySelector("#ala"),
    TyrDisplay:document.querySelector("#tyr"),
    hisDisplay:document.querySelector("#his"),
    ginDisplay:document.querySelector("#gin"),
    asnDisplay:document.querySelector("#asn"),
    lysDisplay:document.querySelector("#lys"),
    aspDisplay:document.querySelector("#asp"),
    gluDisplay:document.querySelector("#glu"),
    cysDisplay:document.querySelector("#cys"),
    trpDisplay:document.querySelector("#trp"),
    argDisplay:document.querySelector("#arg"),
    glyDisplay:document.querySelector("#gly"),

    dnaStrand:document.querySelector("#dna"),
    rnaStrand:document.querySelector("#rna"),
    aminoAcidstrand:document.querySelector("#amino-sequence"),
    completeProteins:document.querySelector("#complete-proteins"),


    mitoImg: document.querySelector("#mito-img"),
    riboImg: document.querySelector("#ribosome-img"),
    cellMemImg: document.querySelector("#cellMem-img"),
    nucleusImg: document.querySelector("#nucleus-img"),


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

DOM.startBtn.addEventListener("click", function(){
    DOM.startContainer.style.display = "block";
    DOM.mainContainer.style.display = "none";
    DOM.returnBtn.addEventListener("click", function(){
        DOM.startContainer.style.display = "none";
        DOM.mainContainer.style.display="grid";
    })
    
    

})

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
       // DOM.mitoActionsContainer.append(btn1);
        //DOM.mitoActionsContainer.append(btn2);
        DOM.mitoActionsContainer.append(btn3);
        DOM.mitoActionsContainer.classList.add("active");
        DOM.organelleActions.append(DOM.mitoActionsContainer);
        DOM.mitoBtnCreated= true;
            btn1.addEventListener("click", function(){
                mitochondria.sayDes()
            })

            btn3.addEventListener("click", function(){
                mitochondria.produceATP();
            })
    }

    DOM.displayContainer.innerHTML = " "
    DOM.mitoImg.style.display = "block";
    DOM.nucleusImg.style.display = "none";
    DOM.riboImg.style.display = "none";
    DOM.cellMemImg.style.display = "none";

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
        const btn4 = DOM.createEl("button");
        const btn5 = DOM.createEl("button");
        const btn6 = DOM.createEl("button");
        btn1.innerHTML = "Des";
        btn2.innerHTML = "Get Glucose";
        btn3.innerHTML = "Get Amino Acid";
        btn4.innerHTML = "Get Oxygen";
        btn5.innerHTML = "Release Carbon Dioxide";
        btn6.innerHTML = "Get an Amino Acid";
        btn1.classList.add("btn-action");
        btn2.classList.add("btn-action");
        btn3.classList.add("btn-action");
        btn4.classList.add("btn-action");
        btn5.classList.add("btn-action");
        btn6.classList.add("btn-action");
      //  DOM.cellMemActionsContainer.append(btn1);
        DOM.cellMemActionsContainer.append(btn2);
        DOM.cellMemActionsContainer.append(btn3);
        DOM.cellMemActionsContainer.append(btn4);
        DOM.cellMemActionsContainer.append(btn5);
        DOM.cellMemActionsContainer.append(btn6);
        DOM.cellMemActionsContainer.classList.add("active");
        DOM.organelleActions.append(DOM.cellMemActionsContainer);
        DOM.cellMemBtnCreated= true;
        btn1.addEventListener("click", function(){
            cellMembrane.sayDes();
        })

        btn5.addEventListener("click", function(){
            cellMembrane.releaseCO2();
        })

        btn4.addEventListener("click",function(){
            cellMembrane.getOxygen();
        })

        btn6.addEventListener("click", function(){
            DOM.displayContainer.textContent = "";
            DOM.aminoacidSelectContainer.style.display="flex";
            DOM.aminoacidSelectContainer.classList.add("amino-acid");
            DOM.displayContainer.append(DOM.aminoacidSelectContainer);
             DOM.aminoacidSelect.addEventListener("click", function(){
                type = DOM.aminoacidName.value;
                cellMembrane.getAminoAcid2(type);
               DOM.aminoacidSelectContainer.remove();

            })
        })

        btn2.addEventListener("click", function(){
            cellMembrane.getGlucose();
        })
        
        btn3.addEventListener("click",function(){
            if(!DOM.aminoAcidBtnCreated){
                const btn1 = DOM.createEl("button");
                const btn2 = DOM.createEl("button");
                const btn3 = DOM.createEl("button");
                btn1.innerHTML = "SER";
                btn2.innerHTML = "MET";
                btn3.innerHTML= "VAL";
                DOM.aminoAcidContainer.append(btn1);
                DOM.aminoAcidContainer.append(btn2);
                DOM.aminoAcidContainer.append(btn3);
                DOM.aminoAcidContainer.classList.add("amino-acid");
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

            } DOM.aminoAcidBtnCreated
            
               DOM.displayContainer.innerHTML="";
               DOM.displayContainer.append(DOM.aminoAcidContainer);
          


        })
    }

    DOM.mitoImg.style.display = "none";
    DOM.nucleusImg.style.display = "none";
    DOM.riboImg.style.display = "none";
    DOM.cellMemImg.style.display = "block";

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
   // DOM.nucleusActionsContainer.append(btn1);
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
            btn2.setAttribute("id", 1);
            btn3.setAttribute("id", 2);
            btn4.setAttribute("id", 3);
            btn1.textContent = "Gene 1";
            btn2.textContent = "Gene 2";
            btn3.textContent = "Gene 3";
            btn4.textContent = "Gene 4";
            DOM.geneContainer.append(btn1);
            DOM.geneContainer.append(btn2);
            DOM.geneContainer.append(btn3);
            DOM.geneContainer.append(btn4);
            DOM.geneContainer.classList.add("gene-class");
           // DOM.displayContainer.append(DOM.geneContainer);
            DOM.geneBtnCreated = true;
                btn1.addEventListener("click",function(e){
                    DOM.geneContainer.remove();
                    nucleus.checkRNA(e.target.id);
                })

                btn2.addEventListener("click",function(e){
                    DOM.geneContainer.remove();
                    nucleus.checkRNA(e.target.id);
                })

                btn3.addEventListener("click",function(e){
                    DOM.geneContainer.remove();
                    nucleus.checkRNA(e.target.id);
                })

                btn4.addEventListener("click", function(e){
                    DOM.geneContainer.remove();
                    nucleus.checkRNA(e.target.id);
                })

           }
           
           if(gameVariables.geneCheck === true){
            nucleus.checkRNA();
           } else{

           DOM.displayContainer.innerHTML = "";
           DOM.displayContainer.append(DOM.geneContainer);}
        })

}

    DOM.mitoImg.style.display = "none";
    DOM.nucleusImg.style.display = "block";
    DOM.riboImg.style.display = "none";
    DOM.cellMemImg.style.display = "none";

    DOM.mitoActionsContainer.style.display = "none";
    DOM.cellMemActionsContainer.style.display = "none";
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
      //  DOM.ribosomeActionsContainer.append(btn1);
        DOM.ribosomeActionsContainer.append(btn2);
        DOM.ribosomeActionsContainer.classList.add("active");
        DOM.organelleActions.append(DOM.ribosomeActionsContainer);
        DOM.ribosomeBtnCreated = true;
            btn2.addEventListener("click", function(){
                ribosome.produceProtein();
            })
    }


    DOM.mitoImg.style.display = "none";
    DOM.nucleusImg.style.display = "none";
    DOM.riboImg.style.display = "block";
    DOM.cellMemImg.style.display = "none";

    DOM.cellMemActionsContainer.style.display = "none";
    DOM.mitoActionsContainer.style.display = "none";
    DOM.nucleusActionsContainer.style.display = "none";
    DOM.ribosomeActionsContainer.style.display = "flex";

})

const display = {
    showVariables(){
        DOM.glucoseDisplay.innerHTML = `<b>Glucose</b>: ${gameVariables.glucose}`;
        DOM.atpDisplay.innerHTML = `<b>ATP</b>: ${gameVariables.ATP}`;
        DOM.oxyDisplay.innerHTML = `<b>Oxygen</b>: ${gameVariables.oxygen}`;
        DOM.co2Display.innerHTML = `<b>Carbon Dioxide</b>: ${gameVariables.co2}`;
        DOM.pheDisplay.innerHTML = `<b>Phe</b>:${gameVariables.aminoAcids["Phe"]}`;
        DOM.leuDisplay.innerHTML = `<b>Leu</b>:${gameVariables.aminoAcids["Leu"]}`;
        DOM.ileDisplay.innerHTML = `<b>Ile</b>:${gameVariables.aminoAcids["Ile"]}`;
        DOM.metDisplay.innerHTML = `<b>Met</b>:${gameVariables.aminoAcids["Met"]}`;
        DOM.valDisplay.innerHTML = `<b>Val</b>:${gameVariables.aminoAcids["Val"]}`;
        DOM.serDisplay.innerHTML = `<b>Ser</b>:${gameVariables.aminoAcids["Ser"]}`;
        DOM.ProDisplay.innerHTML = `<b>Pro</b>:${gameVariables.aminoAcids["Pro"]}`;
        DOM.thrDisplay.innerHTML = `<b>Thr</b>:${gameVariables.aminoAcids["Thr"]}`;
        DOM.alaDisplay.innerHTML = `<b>Ala</b>:${gameVariables.aminoAcids["Ala"]}`;
        DOM.TyrDisplay.innerHTML = `<b>Tyr</b>:${gameVariables.aminoAcids["Tyr"]}`;
        DOM.hisDisplay.innerHTML = `<b>His</b>:${gameVariables.aminoAcids["His"]}`;
        DOM.ginDisplay.innerHTML = `<b>Gin</b>:${gameVariables.aminoAcids["Gin"]}`;
        DOM.asnDisplay.innerHTML = `<b>Asn</b>:${gameVariables.aminoAcids["Asn"]}`;
        DOM.lysDisplay.innerHTML = `<b>Lys</b>:${gameVariables.aminoAcids["Lys"]}`;
        DOM.aspDisplay.innerHTML = `<b>Asp</b>:${gameVariables.aminoAcids["Asp"]}`;
        DOM.gluDisplay.innerHTML = `<b>Glu</b>:${gameVariables.aminoAcids["Glu"]}`;
        DOM.cysDisplay.innerHTML = `<b>Cys</b>:${gameVariables.aminoAcids["Cys"]}`;
        DOM.trpDisplay.innerHTML = `<b>Trp</b>:${gameVariables.aminoAcids["Trp"]}`;
        DOM.argDisplay.innerHTML = `<b>Arg</b>:${gameVariables.aminoAcids["Arg"]}`;
        DOM.glyDisplay.innerHTML = `<b>Gly</b>:${gameVariables.aminoAcids["Gly"]}`;
        DOM.dnaStrand.innerHTML = `<b>DNA</b>: ${gameVariables.DNAString}`;
        DOM.rnaStrand.innerHTML = `<b>RNA</b>: ${gameVariables.RNAstring}`;
        DOM.aminoAcidstrand.innerHTML = `<b>Amino Acids</b>: ${gameVariables.finalAminoAcids}`;
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
    ATP: 2,
    oxygen: 1,
    co2: 0,
    proteins: 0,
    ser: 0,
    met: 0,
    val:0,
    geneCheck: false,
    geneValue: 0,
    DNACheck: false,
    DNAString: " ",
    RNAcheck: false,
    RNAstring: ["UAC","CCA","CCA","CCA"],
    aminoAcids: {
        "Phe": 3,
        "Leu": 0,
        "Ile": 0,
        "Met": 0,
        "Val": 0,
        "Ser": 0,
        "Pro": 3,
        "Thr": 0,
        "Ala": 0,
        "Tyr": 2,
        "His": 0,
        "Gin": 0,
        "Asn": 0,
        "Lys": 0,
        "Asp": 0,
        "Glu": 0,
        "Cys": 0,
        "Trp": 0,
        "Arg": 2,
        "Gly": 2
    },
    finalAminoAcids: [],
}


const mitochondria ={
    name: "mitochondria",
    sayDes(){
      DOM.displayContainer.textContent=(`The ${this.name} is the powerhouse of the cell.`)
    },
    produceATPInstruct(){
        DOM.displayContainer.textContent=`The ${this.name} can produce ATP. It costs one glucose molecule and one oxygen molecule
         and produces 3 ATP molecules.`
    },

    produceATP(){
        if(gameVariables.co2 === 5){
            DOM.displayContainer.textContent = "Too much carbon dioxide in the cell!"
        }
        else if(gameVariables.glucose>=1 && gameVariables.oxygen>=1){
        gameVariables.co2 += 1;
        gameVariables.ATP += 3;
        gameVariables.glucose -= 1;
        gameVariables.oxygen -= 1;
        display.showVariables();
        display.turnGreen(DOM.co2Display);
        display.turnGreen(DOM.atpDisplay);
        display.turnRed(DOM.glucoseDisplay);
        display.turnRed(DOM.oxyDisplay);
        DOM.displayContainer.textContent = "Three ATP produced!"
        } else if(gameVariables.glucose === 0 && gameVariables.oxygen===0){
            DOM.displayContainer.textContent="Not enough glucose and oxygen!"
        } else if(gameVariables.glucose === 0){
            DOM.displayContainer.textContent="Not enough glucose!"
        } else if (gameVariables.oxygen === 0){
            DOM.displayContainer.textContent="Not enough oxygen!"
        }
    },

    
}


const cellMembrane = {
    name: "cell membrane",
    sayDes(){
        DOM.displayContainer.innerHTML = `The ${this.name} surrounds the cell. It also allows materials in and out.`;
        
    },
    getGlucose(){
        if(gameVariables.co2 === 5){
            DOM.displayContainer.textContent = "Too much carbon dioxide in the cell!"
        }
        else if(gameVariables.ATP >=1){
        gameVariables.ATP -= 1;
        gameVariables.glucose += 1;
        display.showVariables();
        display.turnGreen(DOM.glucoseDisplay);
        display.turnRed(DOM.atpDisplay);
        DOM.displayContainer.innerHTML="One glucose entered the cell!";
        }
    },

    getAminoAcid(type){
        if(gameVariables.co2 === 5){
            DOM.displayContainer.textContent = "Too much carbon dioxide in the cell!"
        }

        else if (gameVariables.ATP === 0){
            DOM.displayContainer.textContent = "Not enough ATP!"
        }

       else if(type === "ser" && gameVariables.ATP>=1){
            gameVariables.ser += 1;
            gameVariables.ATP -= 1;
            DOM.displayContainer.innerHTML="One SER amino acid entered the cell!"
            display.showVariables();
            display.turnRed(DOM.atpDisplay);
            display.turnGreen(DOM.serDisplay);
        }

        else if(type === "met" && gameVariables.ATP >=1){
            gameVariables.met += 1;
            gameVariables.ATP -= 1;
            DOM.displayContainer.innerHTML="One MET amino acid entered the cell!"
            display.showVariables();
            display.turnRed(DOM.atpDisplay);
            display.turnGreen(DOM.metDisplay);
        }

        else if (type === "val" && gameVariables.ATP >= 1){
            gameVariables.val += 1;
            gameVariables.ATP -= 1;
            DOM.displayContainer.innerHTML="One VAL amino acid entered the cell!"
            display.showVariables();
            display.turnRed(DOM.atpDisplay);
            display.turnGreen(DOM.valDisplay);
        }
    },
    
    getAminoAcid2(type){
        if(gameVariables.co2 === 5){
            DOM.displayContainer.textContent = "Too much carbon dioxide in the cell!"
        }

        else if (gameVariables.ATP === 0){
            DOM.displayContainer.textContent = "Not enough ATP!"
        }

       else {
        DOM.displayContainer.textContent = `You gained one ${type} amino acid!`;
        gameVariables.aminoAcids[type] += 1
        display.showVariables();
       }
    },

    getOxygen(){
        DOM.displayContainer.innerHTML = "One oxygen molecule entered the cell!"
        gameVariables.oxygen += 1;
        display.showVariables();
        display.turnGreen(DOM.oxyDisplay);
    },

    releaseCO2(){
        DOM.displayContainer.textContent = "All carbon dioxide has been released!"
        gameVariables.co2 = 0;
        display.showVariables();
        display.turnRed(DOM.co2Display);
    }

}



const ribosome = {
    name: "ribosome",
    sayDes(){
        DOM.displayContainer.textContent=(`The ${this.name} uses amino acids to produce proteins.`)
    },

    produceProtein(){
        if(gameVariables.co2 === 5){
            DOM.displayContainer.textContent = "Too much carbon dioxide in the cell!"
        }

        else if(gameVariables.ATP === 0){
            DOM.displayContainer.textContent = "Not enough ATP!"
        }

       else if(gameVariables.geneCheck===false){
            DOM.displayContainer.textContent="Select a gene first."
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
                   return DOM.displayContainer.textContent=("Wrong order.")
                } 
                
               }DOM.displayContainer.textContent=("Protein produced!")
                gameVariables.geneCheck = false;
                gameVariables.ser -= serCheck;
                gameVariables.met -= metCheck;
                gameVariables.val -= valCheck;
                gameVariables.ATP -= 1;
                gameVariables.proteins += 1;
                display.showVariables();
                display.turnRed(DOM.atpDisplay);
                if(serCheck >0){
                    display.turnRed(DOM.serDisplay)
                }
                if(metCheck >0){
                    display.turnRed(DOM.metDisplay)
                }
                if(valCheck>0){
                    display.turnRed(DOM.valDisplay)
                }
                display.turnGreen(DOM.proDisplay);
            } else{
                DOM.displayContainer.textContent=("Missing necessary amino acids.")
            }
        }
    },

    produceProtein2(){        
        rnaCodons = gameVariables.RNAstring;
        let aminoAcidCount = false;
        translatedCheck = false;
        finalCheck = false;
        console.log(aminoAcidCount);
        rnaCodonToAminoAcidMapping = {
            "UUU": "Phe",
            "UUC": "Phe",
            "UUA": "Leu",
            "UUG": "Leu",
            "CUU": "Leu",
            "CUC": "Leu",
            "CUA": "Leu",
            "CUG": "Leu",
            "AUU":"Ile",
            "AUC": "Ile",
            "AUA": "Ile",
            "AUG": "Met",
            "GUU": "Val",
            "GUC": "Val",
            "GUA": "Val",
            "GUG": "Val",
            "UCU": "Ser",
            "UCC": "Ser",
            "UCA": "Ser",
            "UCG": "Ser",
            "CCU": "Pro",
            "CCC": "Pro",
            "CCA": "Pro",
            "CCG": "Pro",
            "ACU": "Thr",
            "ACC": "Thr",
            "ACA": "Thr",
            "ACG": "Thr",
            "UAU": "Tyr",
            "UAC": "Tyr",
            "CAU" : "His",
            "CAC": "His",
            "CAA": "Gin",
            "CAG": "Gin",
            "AAU": "Asn",
            "AAC": "Asn",
            "AAA": "Lys",
            "AAG": "Lys",
            "GAU": "Asp",
            "GAC": "Asp",
            "GAA": "Glu",
            "GAG": "Glu",
            "UGU": "Cys",
            "UGC": "Cys",
            "UGG": "Trp",
            "CGU": "Arg",
            "CGC": "Arg",
            "CGA": "Arg",
            "CGG": "Arg",
            "AGU": "Ser",
            "AGC": "Ser",
            "AGA": "Arg",
            "AGG": "Arg",
            "GGU": "Gly",
            "GGC": "Gly",
            "GGA": "Gly",
            "GGG": "Gly"
        }
        translatedAminoAcids = [];

        aminoacidOccur = {

        }

        aminoAcidNames = {
        
        }

        for (let i = 0; i < rnaCodons.length; i++) {
            let rnaCodon = rnaCodons[i];
            console.log(rnaCodon[i]);
            let correctAminoAcid = rnaCodonToAminoAcidMapping[rnaCodon];
            console.log(correctAminoAcid);

            aminoAcidNames[i] = correctAminoAcid;
            console.log(aminoAcidNames);

            if(!aminoacidOccur[correctAminoAcid]){
                aminoacidOccur[correctAminoAcid] = 1
            } else{
                aminoacidOccur[correctAminoAcid]++
            }
            
            if (!gameVariables.aminoAcids[correctAminoAcid] || gameVariables.aminoAcids[correctAminoAcid] < aminoacidOccur[correctAminoAcid]) {
                alert(`You don't have enough ${correctAminoAcid}. Please obtain more.`);
                console.log(aminoAcidCount);
                console.log(translatedCheck);
                return 
          } else{
            aminoAcidCount = true;
            console.log(aminoacidOccur)

          }     
          }

          if(aminoAcidCount){
            for (i=0; i<rnaCodons.length;i++){
            rnaCodon = rnaCodons[i];
            translatedAminoAcids.push(rnaCodonToAminoAcidMapping[rnaCodon]);
            console.log(translatedAminoAcids);   
            translatedCheck = true;

          } 
        }

        if(translatedCheck){

            let userAminoAcids = [];
          userAminoAcids.push(prompt("First Amino Acid?"))
          userAminoAcids.push(prompt("Second Amino Acid?"))
          userAminoAcids.push(prompt("Third Amino Acid?"))
          userAminoAcids.push(prompt("Fourth Amino Acid?"))
          console.log(userAminoAcids);

            for(i=0;i<translatedAminoAcids.length;i++){
            if(userAminoAcids[i]!==translatedAminoAcids[i]) {
                console.log("no good")
                return
                }
            }

            console.log("congrat!")
            finalCheck=true;

            
        }
          console.log(finalCheck);

        if(finalCheck){
            console.log(translatedAminoAcids)
            for(i=0;i<translatedAminoAcids.length;i++){
                rnaCodon = rnaCodons[i];
                let correctAminoAcid = rnaCodonToAminoAcidMapping[rnaCodon];
                console.log(correctAminoAcid);
                console.log(aminoacidOccur[correctAminoAcid]);

                if(aminoacidOccur[correctAminoAcid]>1){
                    aminoacidOccur[correctAminoAcid] = 1
                }
            gameVariables.aminoAcids[correctAminoAcid] -= aminoacidOccur[correctAminoAcid]; 
            gameVariables.finalAminoAcids = translatedAminoAcids;
            
            DOM.displayContainer.innerHTML="1 protein synthesized!"
            display.showVariables();
            aminoChange = translatedAminoAcids[i] + "Display";
            aminoColor = DOM[aminoChange];
            display.turnRed(aminoColor)
            

            }

            gameVariables.proteins++;
        }    
    }
}

const nucleus = {
    name: "nucleus",
    sayDes(){
        DOM.displayContainer.textContent=(`Ths ${this.name} is the control center of the cell. The DNA is stored here.`)
    },

    arrayDNA: [["SER","MET","VAL"],["SER", "SER", "MET"],["MET", "VAL", "VAL"],["SER", "MET" ,"MET"]],

    arrayDNAbases: ["A", "T", "C", "G"],

    arrayRNAbases: ["A", "U", "C", "G"],

    checkRNA(gene){
        if(gameVariables.co2 === 5){
            DOM.displayContainer.textContent = "Too much carbon dioxide in the cell!"
        }
       else if(gameVariables.geneCheck===true){
            DOM.displayContainer.textContent=`The amino acid sequence for this protein is: ${this.arrayDNA[gameVariables.geneValue]}`
        } else if(gameVariables.ATP === 0){
            DOM.displayContainer.textContent = "Not enough ATP!"
        }
        else if(gameVariables.ATP>=1 && gene === "0"){
             DOM.displayContainer.textContent = `The DNA is transcribed to RNA. The gene instructs that the following amino acids
            are required to make this protein: ${this.arrayDNA[gene]}`;
                 gameVariables.ATP -= 1;
                 gameVariables.geneCheck=true;
                 gameVariables.geneValue = 0;
        } else if (gameVariables.ATP>=1 && gene === "1"){
            DOM.displayContainer.textContent = `The DNA is transcribed to RNA. The gene instructs that the following amino acids
            are required to make this protein: ${this.arrayDNA[gene]}`;
            gameVariables.ATP -= 1;
            gameVariables.geneCheck = true;
            gameVariables.geneValue = 1;
        } else if (gameVariables.ATP >=1 && gene === "2"){
            DOM.displayContainer.textContent = `The DNA is transcribed to RNA. The gene instructs that the following amino acids
            are required to make this protein: ${this.arrayDNA[gene]}`;
            gameVariables.ATP -= 1;
            gameVariables.geneCheck = true;
            gameVariables.geneValue = 2;
        } else if (gameVariables.ATP >= 1 && gene === "3"){
            DOM.displayContainer.textContent = `The DNA is transcribed to RNA. The gene instructs that the following amino acids
            are required to make this protein: ${this.arrayDNA[gene]}`;
            gameVariables.ATP -= 1;
            gameVariables.geneCheck = true;
            gameVariables.geneValue = 3;
        }
    },

    getDNA(){
        let codons = ["TAC"];
        for(i=0; i<3; i++)
        {
            randomCodon = [];
            for(j=0; j<3; j++){
                let randomBase = this.arrayDNAbases[Math.floor(Math.random()*this.arrayDNAbases.length)];
                
                randomCodon.push(randomBase);

            }
        codons.push(randomCodon.join(''));    

          }

        for(i=1; i<5; i++){
            if(codons[i]=== "TAC" || codons[i] === "UAA" || codons[i] === "UAG" || codons[i]=== "UGA"){
                codons[i] = "CCC"
            }
        }

        gameVariables.DNAString = codons;
        return codons

    },

    transcribeDNA(){
        dnaCodons = gameVariables.DNAString;
        console.log(dnaCodons);
        rnaCodons = [];
        for (const dnaCodon of dnaCodons) {
            const userInput = prompt(`Transcribe the DNA codon "${dnaCodon}" to RNA:`);
            const rnaMapping = { 'A': 'U', 'T': 'A', 'C': 'G', 'G': 'C' };
            const transcribedRNA = dnaCodon.split('').map(nucleotide => rnaMapping[nucleotide]).join('');
        
            if (userInput.toUpperCase() === transcribedRNA) {
              rnaCodons.push(transcribedRNA);
              alert('Correct transcription!');
            } else {
              alert(`Incorrect transcription for "${dnaCodon}"`);
              return; 
            }
          }
        
          gameVariables.RNAstring = rnaCodons;
          return rnaCodons;


    }
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