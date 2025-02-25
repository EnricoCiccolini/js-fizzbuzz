
// ciclo di conteggio fino a 100
for (let i = 1; i <= 100; i++) {

    // dichiarazione e calcolo per controllare che siano divisibili per il contatore 
    let div3 = (i % 3) === 0 
    let div5 = (i % 5) === 0

    // prima if se il numero e divisibile per tutti e due gli opratori 
    if (div3 && div5) {
        console.log(`fizz buzz`)
    }

    // seconda if se il numero e divisibile solo per il primo 
    else if (div3 ) {
        console.log(`fizz `)
    }

    // seconda if se il numero e divisibile solo per il secondo 
    else if (div5) {
        console.log(`buzz`)
    }
    // altrimenti se non e divisibile per nessun operatore 
    else {
        console.log(i)
    }
}