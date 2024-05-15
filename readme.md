###FizzBuzz
nome repo: js-fizzbuzz
1. Scrivi un programma che stampi in console i numeri da 1 a 100,
    1.1 ma che per i multipli di 3 stampi “Fizz” al posto del numero 
    1.2 e per i multipli di 5 stampi “Buzz”.
    1.3 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


1. ciclo for 1 <=100 
    1.1 se i % 3 = 0 stampa Fizz --> i % 3 =  0 = false -->  !(i%3) = true
    1.2 se i % 5 = 0 stampa Buzz --> i % 5 =  0 = false -->  !(i%5) = true
    1.3 se i % 3 = 0 & i % 5 = 0 stampa FizzBuzz --> !(i%3) && !(i%5)
    1.4 else stampa numero