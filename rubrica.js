function mostraaggiunta(){
    document.getElementById("sfondoscuro").style.display = "block";
    document.getElementById("mostracompilazione").style.display = "flex";
}


function chiudiaggiunta(){
    document.getElementById("sfondoscuro").style.display = "none";
    document.getElementById("mostracompilazione").style.display = "none";
    
    document.getElementById("input-nome").style.border = "";
    document.getElementById("input-cognome").style.border = "";
    document.getElementById("input-telefono").style.border = "";

     document.getElementById("input-nome").value = "";
     document.getElementById("input-cognome").value = "";
     document.getElementById("input-telefono").value = "";


}
let contatti =[];
function ricercautenti(){
    let inputSearch = document.getElementById("input-search").value;

    if(!inputSearch){
        for(let i=0; i<contatti.length; i++) {
            document.getElementById(`container-${i}-contatti`).style.display = "block";
        }
        document.getElementById("noResultP").style.display = "none";
        return;
    };
    


    let listacontatti = contatti.filter((contatto) => {
        return contatto.nome.startsWith(inputSearch) || contatto.cognome.startsWith(inputSearch) || contatto.numero.startsWith(inputSearch);

    })

    let listaIdContatti = listacontatti.map((contatto)=>{
        return contatto.indice;
    })

    if(listaIdContatti.length == 0){
        document.getElementById("noResultP").style.display = "block";
     }   else{
            document.getElementById("noResultP").style.display = "none";
        }
    

    console.log(listaIdContatti)
    for(let i=0; i<contatti.length; i++){
        

       
        let id = document.getElementById(`container-${i}-contatti`).id.split("-")[1];
        
        if(!listaIdContatti.includes(parseInt(id))){
            document.getElementById(`container-${i}-contatti`).style.display = "none";
        }
    }
  }




let indicecontatto = 0;


function salvacontatto(){
    let nome = document.getElementById("input-nome").value;
    let cognome = document.getElementById("input-cognome").value;
    let telefono = document.getElementById("input-telefono").value;

   if(!nome || !cognome || !telefono) {

      if(!nome) {
        document.getElementById("input-nome").style.border = "1px solid red";

      }

      if(!cognome) {
        document.getElementById("input-cognome").style.border = "1px solid red";

      }

      if(!telefono){
        document.getElementById("input-telefono").style.border = "1px solid red";

      }

      return;
   }


   let contatto = {
    nome: nome,
    cognome: cognome,
    numero:telefono,
    indice: indicecontatto,
  }

  contatti.push(contatto);

        
    
            document.getElementById("contatti-salvati").innerHTML+= ` 
        <div id = "container-${indicecontatto}-contatti">
            <div id= "div-${indicecontatto}-contatto" class="contenitore-contatto-aggiunto">
            <div class="contenitore-nome-contatto">
              <h4 id="${indicecontatto}-nome">${nome}</h4>
              <h4 id="${indicecontatto}-cognome">${cognome}</h4>
            </div>
            <div class="contenitore-numero-contatto">
             <h4 id="${indicecontatto}-telefono">${telefono}</h4>
           </div>
           <div class="contenitore-edit-x">
             <div onClick= "modificacontatto(${indicecontatto})" class="contenitore-edit">
              <h5>edit</h5>
             </div>
             <div onClick = "eliminacontatto(${indicecontatto})"class="contenitore-x">
               <img class="x-icona" src="icone/x-rossa.png">
             </div>
           </div>
    
          </div>
          <div id= "div-${indicecontatto}-modifica-contatto" class="contenitore-contatto-modifica">
           <div class="contenitore-nome-contatto">
             <input id="${indicecontatto}-modifica-nome" placeholder="nome" class="input-nome-cognome-telefono-modifica">
             <input id="${indicecontatto}-modifica-cognome" placeholder="cognome" class="input-nome-cognome-telefono-modifica" style="margin-left: 10px;">
           </div>
           <div class="contenitore-numero-contatto">
            <input id="${indicecontatto}-modifica-telefono" placeholder="numero" class="input-nome-cognome-telefono-modifica">
          </div>
          <div class="contenitore-edit-x">
            <div onClick= "annullamodifica(${indicecontatto})" class="contenitore-edit-2">
             <h5>Annulla</h5>
            </div>
            <div onClick = "salvamodifica(${indicecontatto})" class="contenitore-edit">
             <h5>Salva</h5>
            </div>
          </div>
    
         </div>
        </div>`;

        
    
         chiudiaggiunta();
         indicecontatto++;
           
        ;
    }

     


function modificacontatto(indice){
  document.getElementById(`div-${indice}-contatto`).style.display ="none";
  document.getElementById (`div-${indice}-modifica-contatto`).style.display ="flex";


  let nome = document.getElementById(`${indice}-nome`).innerHTML;
  let cognome = document.getElementById(`${indice}-cognome`).innerHTML;
  let telefono = document.getElementById(`${indice}-telefono`).innerHTML;

  
  
 
    document.getElementById(`${indice}-modifica-nome`).value = nome;
    document.getElementById(`${indice}-modifica-cognome`).value = cognome;
    document.getElementById(`${indice}-modifica-telefono`).value = telefono;
  

}

function annullamodifica(indice){
    document.getElementById(`div-${indice}-contatto`).style.display ="flex";
    document.getElementById (`div-${indice}-modifica-contatto`).style.display ="none";
}

function eliminacontatto(indice){
    document.getElementById(`container-${indice}-contatti`).remove();
}

function salvamodifica(indice){
    
    let nomeaggiornato = document.getElementById(`${indice}-modifica-nome`).value;
    let cognomeaggiornato = document.getElementById(`${indice}-modifica-cognome`).value;
    let telefonoaggiornato = document.getElementById(`${indice}-modifica-telefono`).value;

    document.getElementById(`${indice}-nome`).innerHTML = nomeaggiornato;
    document.getElementById(`${indice}-cognome`).innerHTML = cognomeaggiornato;
    document.getElementById(`${indice}-telefono`).innerHTML = telefonoaggiornato;

    
    
    
    
    document.getElementById(`div-${indice}-contatto`).style.display ="flex";
    document.getElementById (`div-${indice}-modifica-contatto`).style.display ="none";



}