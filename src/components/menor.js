export default function menorel(vetor) {
    let menor = vetor[0]
    for (var cada of vetor) {
        if (menor > cada) {
           menor = cada
        }
    }
    return menor
}
