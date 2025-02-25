// dichiarazione variabili 
let div5 = 0
let div3 = 0

// ciclo di conteggio fino a 100
for(let i=1 ; i <= 100; i++){
    
    // calcolo per controllare che siano divisibili per le variabili
    div3 = (i % 3)
    div5 =  (i % 5) 

    // prima if se il numero e divisibile per tutti e due gli opratori 
    if (div3 === 0 && div5 === 0 ){
        console.log (`fizz buzz`)
    }

    // seconda if se il numero e divisibile solo per il primo 
    else if ( div3 === 0){
        console.log (`fizz `)
    }

    // seconda if se il numero e divisibile solo per il secondo 
    else if ( div5 === 0 ){
        console.log (`buzz`)
    }
    // altrimenti se non e divisibile per nessun operatore 
    else{
        console.log (i)
    }
}