const DOM = {
    header: document.querySelector(".header"),
    gameContainer: document.querySelector(".game-container"),
    mainContainer: document.querySelector(".main-container"),
    variableContainer: document.querySelector(".variable-container"),
    displayContainer: document.querySelector(".display-container"),
    aminoAcidContainer: document.createElement("div"),
    organelleButtons: document.querySelector(".cell-buttons-container"),
    organelleActions: document.querySelector(".cell-actions-container"),
    mitoActionsContainer: document.createElement("div"),
    cellMemActionsContainer: document.createElement("div"),
    mitoBtn: document.querySelector("#mitochondria"),
    cellMemBtn: document.querySelector("#cell-membrane"),


    createEl(element){
        return document.createElement(element)
    },

    mitoBtnCreated: false,
    cellMemBtnCreated: false,

    aminoAcidBtnCreated:false,
    aminoAcidText: false,

}

DOM.mitoBtn.addEventListener("click", function(){
    if(!DOM.mitoBtnCreated){
        const btn1 = DOM.createEl("button");
        const btn2 = DOM.createEl("button");
        const btn3 = DOM.createEl("button");
        btn1.textContent = "Des";
        btn2.textContent = "Instr";
        btn3.textContent = "Produce";
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
})

DOM.cellMemBtn.addEventListener("click", function(){
    if(!DOM.cellMemBtnCreated){
        const btn1 = DOM.createEl("button");
        const btn2 = DOM.createEl("button");
        const btn3 = DOM.createEl("button");
        btn1.textContent = "Des";
        btn2.textContent = "Glucose";
        btn3.textContent = "Amino Acid";
        btn1.classList.add("btn-action");
        btn2.classList.add("btn-action");
        btn3.classList.add("btn-action");
        DOM.cellMemActionsContainer.append(btn1);
        DOM.cellMemActionsContainer.append(btn2);
        DOM.cellMemActionsContainer.append(btn3);
        DOM.cellMemActionsContainer.classList.add("active");
        DOM.organelleActions.append(DOM.cellMemActionsContainer);
        DOM.cellMemBtnCreated= true;
        btn3.addEventListener("click",function(){
            if(!DOM.aminoAcidBtnCreated){
                const btn1 = DOM.createEl("button");
                const btn2 = DOM.createEl("button");
                const btn3 = DOM.createEl("button");
               // const title = DOM.createEl("p");
                btn1.textContent = "SER";
                btn2.textContent = "MET";
                btn3.textContent= "VAL";
               // title.textContent = "Choose an amino acid!"
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
                   // DOM.aminoAcidContainer.style.display = "none"
                   DOM.aminoAcidContainer.remove();
                   
                   
                    
                })

                btn2.addEventListener("click", function(){
                    cellMembrane.getAminoAcid("met");
                    DOM.aminoAcidContainer.style.display = "none"
                })

                btn3.addEventListener("click",function(){
                    cellMembrane.getAminoAcid("val");
                    DOM.aminoAcidContainer.style.display = "none"
                })

            }
            
               DOM.displayContainer.textContent="";
               
            
            
           // DOM.aminoAcidContainer.style.display = "flex"
           DOM.displayContainer.append(DOM.aminoAcidContainer);
          


        })
    }

    

    DOM.mitoActionsContainer.style.display = "none";
    DOM.cellMemActionsContainer.style.display = "flex";
})


const gameVariables = {
    glucose: 1,
    ATP: 10,
    oxygen: 1,
    proteins: 0,
    ser: 1,
    met: 1,
    val:1,
    geneCheck: false,
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
            DOM.displayContainer.textContent="One SER amino acid entered the cell!"
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
            for (i=0; i<nucleus.arrayDNA[0].length; i++){
                if(nucleus.arrayDNA[0][i]=== "SER"){
                    serCheck += 1;
                } else if(nucleus.arrayDNA[0][i]==="MET"){
                    metCheck += 1;
                } else if(nucleus.arrayDNA[0][i]==="VAL"){
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
                if(userAminoAcid[i]!==nucleus.arrayDNA[0][i]){
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
        } else if(gameVariables.ATP>=1 && gene === "one"){
                console.log(`The DNA is transcribed to RNA. The gene instructs that the following amino acids
                 are required to make this protein: ${this.arrayDNA[0]}`);
                 gameVariables.ATP -= 1;
                 gameVariables.geneCheck=true;
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

//buttons for each organelle and a div which brings up the function choices for each organelle as additional buttons

//a display area to display messages

//a display area to display game variables

//a way to select different genes

//transcription gameplay (select gene, transcribe into RNA, then replace codons with correct amino acids)

//after checking for right number of amino acids, select them in the right order - done

//a way to display which proteins have been produced(or just a counter)

//a way to check if all proteins have been produced (game over)

//image of cell which highlights different organelles upon selection?