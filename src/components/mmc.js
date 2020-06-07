function maior(matriz) {
    return matriz.reduce(function (a, b) {
        return Math.max(a, b)
    })
}

function resto0(numero, matriz, p=0) {
    if ((maior(matriz) + p) % numero == 0) {
        return true
    }
    else {
        return false
    }
}

function achar_mmc(matriz, p=0) {
    return (matriz).every((cada) => {
        return resto0(cada, matriz, p)
    })
}

export default function tentativas(matriz, p=0) {
    var mmc = 0
    while (achar_mmc(matriz, p) == false) {
        mmc = maior(matriz) + p
        p += 1
    }
    return mmc + 1
}
