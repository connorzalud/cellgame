const gameVariables = {
    glucose: 1,
    ATP: 1,
    oxygen: 1,
    proteins: 0,
    ser: 0,
    met: 0,
    val:0,
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
    }

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
            console.log("One SER amino acid entered the cell!")
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
                if(nucleus.arrayDNA[0][i]=== "ser"){
                    serCheck += 1;
                } else if(nucleus.arrayDNA[0][i]==="met"){
                    metCheck += 1;
                } else if(nucleus.arrayDNA[0][i]==="val"){
                    valCheck += 1;
                }
            }
            let aminoAcidCheck = [];
            aminoAcidCheck.push(serCheck);
            aminoAcidCheck.push(metCheck);
            aminoAcidCheck.push(valCheck);
            console.log(aminoAcidCheck);

            if(gameVariables.ser>=aminoAcidCheck[0] && gameVariables.met>=aminoAcidCheck[1] && gameVariables.val>=aminoAcidCheck[2]){
                console.log("Protein produced!")
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

    arrayDNA: [["ser","met","val"]],

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