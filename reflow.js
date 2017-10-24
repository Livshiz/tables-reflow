

function tableReflow(x){

var title ="";
var arrTitles = [];
var tableV = document.getElementsByClassName(x); 

for(t = 0; t < tableV.length; t++) {
        for(c = 0; c < tableV[t].rows[0].cells.length; c++){
            if(tableV[t].rows[0].cells[c].getAttribute("colspan") != null || tableV[t].rows[0].cells[c].getAttribute("colspan") != undefined){
                colspanNum = +tableV[t].rows[0].cells[c].getAttribute("colspan");
                for(z=0; z < colspanNum -1 ; z++){
                   arrTitles.push(tableV[t].rows[0].cells[c].innerHTML);
                }
            }
            arrTitles.push(tableV[t].rows[0].cells[c].innerHTML);
        }

        for(i = 1; i < tableV[t].rows.length; i++){
           for(d = 0; d < arrTitles.length; d++){
               tableV[t].rows[i].cells[d].setAttribute("data-label", arrTitles[d]);
           }
        }
   arrTitles = []; 
}
 
 

}  //  -----  tableReflow end

tableReflow("reflow");
