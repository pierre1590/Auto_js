/*
Un rivenditore di auto deve poter gestire le vendite e le spese del suo concessionario. Questo viene fatto attraverso un libro contabile
Il libro contiene tutti gli ingressi e le spese
gestire un libro contabile, ogni riga del libro deve avere:
  - descrizione
  - importo
  - data
  - iva 
  - cliente
Inoltre ogni cliente è composto dai campi Nome, cognome, città.
Il rivenditore deve
  - poter aggiungere, modificare e cancellare righe dal libro.
  - poter visualizzare attraverso una selezione: l'intero libro, solo le entrate o solo le uscite.
  - stampare il guadagno giornaliero (ingressi - uscite). Il risultato deve essere colorato rosso se è in perdita, in verde se è in guadagno.
  - stampare tutti i movimenti di un dato cliente in input.*/

  // Classe per gestire un libro contabile
  class RigaContabile {
    constructor(descrizione, importo, data, iva, tipoMovimento) {
        this.descrizione = descrizione;
        this.importo = importo;
        this.data = data;
        this.iva = iva;
        this.tipoMovimento = tipoMovimento;
    }
  }    


  // Classe per gestire un cliente
    class Cliente {
        constructor(nome, cognome, citta) {
            this.nome = nome;
            this.cognome = cognome;
            this.citta = citta;
        }
    }


    var clienti = [new Cliente('Mario', 'Rossi', 'Milano'), new Cliente('Giovanni', 'Bianchi', 'Roma'), new Cliente('Luigi', 'Verdi', 'Napoli')];
    var libroContabile = [];
    var selectClienti = document.getElementById("cliente");
    //Selezionare un cliente dall'array clienti con il nome e cognome inserito
    for(cliente in clienti){
       selectClienti.add(new Option(clienti[cliente].nome + ' ' + clienti[cliente].cognome));
    }


    

    //Calcola iva e visualizza sulla pagina dopo aver digitato l'importo    
    function calcolaIva() {
    var iva = document.getElementById("iva");
    var importo = document.getElementById("importo").value;
    var ivaCalcolata = Math.floor(importo * 0.22).toFixed(2); 
    iva.innerHTML = ivaCalcolata;
}


    var descrizione = document.getElementById("descrizione").value;
    var importo = document.getElementById("importo").value;
    var data = document.getElementById("data").value;
    var iva = document.getElementById("iva").value;
    var tipo = document.getElementById("tipo").value;
    var cliente = document.getElementById("cliente").value;
   
    //Aggiungere una riga al libro contabile
    function aggiungiRiga() {
        var nuovaRigaLibro = new RigaContabile(descrizione, importo, data, iva, tipo, cliente);
        libroContabile.push(nuovaRigaLibro);
        console.log(libroContabile);
    }



  

    //modificare una riga dal libro contabile
    function modificaRiga() {
    }

    //cancellare una riga dal libro contabile
    function cancellaRiga() {
    }

  
   
   