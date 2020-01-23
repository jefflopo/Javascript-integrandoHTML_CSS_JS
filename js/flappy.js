function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reserva = false) {
    this.elemento = novoElemento('div', 'barreira')
// console.log(this.elemento.appendChild(reserva ? borda : corpo))
    const borda = novoElemento('div','borda')
    const corpo = novoElemento('div','corpo')
    this.elemento.appendChild(reserva ? corpo : borda)
    this.elemento.appendChild(reserva ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`

}

const b = new Barreira(true)
b.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(b.elemento)