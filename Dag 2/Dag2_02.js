//Basal måde at tilføre et tooltip ved hjælp af JavaScript.
function showToolTip1() {
    document.getElementById("h1overskrift1").title="Dette er et tooltip - prøv det";
}

//Avanceret emne om -> Module pattern & Object Literals
//Vi vil i højere grad inkapsulere dele af koden. Herunder vises hvordan vi bruger Module
//Pattern til at indkapsle relationelle objekter.
//I javascript kan vi inkapsulere metoder og variabler inde i et enkelt objekt, og dermed
//beskytte disse fra det globale scope.
function showToolTip2(){
    document.getElementById("h1overskrift2").title=toolTips.showTooltip();
};
//Module
var toolTips = {
    toolTip1: "Tooltip gyldig", //Object Literals er name/value par, seperaret med komma.
    toolTip2: "Tooltip ugyldig",
    
    toolTipConfig: {
        language: "en",
        active: true
    },
    
    showTooltip: function() {
        return this.toolTipConfig.active ? this.toolTip1 : this.toolTip2
    }
};
