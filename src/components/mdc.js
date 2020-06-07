function maior(matriz) {
    return matriz.reduce(function (a, b) {
        return Math.max(a, b)
    })
}

function resto0(numero, matriz, p) {
    if (numero % (maior(matriz) - p) == 0) {
        return true
    }
    else {
        return false
    }
}

function achar_mdc(matriz, p) {
    return (matriz).every((cada) => {
        return resto0(cada, matriz, p)
    })
}

export default function tentativas(matriz, p=0) {
    var mdc = 0
    while (achar_mdc(matriz, p) == false) {
        mdc = maior(matriz) - p
        p += 1
    }
    return mdc - 1
}
