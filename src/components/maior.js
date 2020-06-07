export default function maiorel(vetor) {
    let maior = vetor[0]
    for (var cada of vetor) {
        if (maior < cada) {
           maior = cada
        }
    }
    return maior
}
