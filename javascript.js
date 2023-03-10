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
        btn1.innerHTML = "Des";
        btn2.innerHTML = "Get Glucose";
        btn3.innerHTML = "Get Amino Acid";
        btn4.innerHTML = "Get Oxygen";
        btn5.innerHTML = "Release Carbon Dioxide";
        btn1.classList.add("btn-action");
        btn2.classList.add("btn-action");
        btn3.classList.add("btn-action");
        btn4.classList.add("btn-action");
        btn5.classList.add("btn-action");
      //  DOM.cellMemActionsContainer.append(btn1);
        DOM.cellMemActionsContainer.append(btn2);
        DOM.cellMemActionsContainer.append(btn3);
        DOM.cellMemActionsContainer.append(btn4);
        DOM.cellMemActionsContainer.append(btn5);
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
    ATP: 2,
    oxygen: 1,
    co2: 0,
    proteins: 0,
    ser: 0,
    met: 0,
    val:0,
    geneCheck: false,
    geneValue: 0,
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
    }
}

const nucleus = {
    name: "nucleus",
    sayDes(){
        DOM.displayContainer.textContent=(`Ths ${this.name} is the control center of the cell. The DNA is stored here.`)
    },

    arrayDNA: [["SER","MET","VAL"],["SER", "SER", "MET"],["MET", "VAL", "VAL"],["SER", "MET" ,"MET"]],

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