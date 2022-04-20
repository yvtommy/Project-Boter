/// Variabelen \\\
const X_vakje = 'x'  ///vakje voor de X\\\-------------------------
const O_vakje = 'O'  ///HOOFDLETTER O\\\--------------------------

//////////////////////////BOTER/KAAS/EIEREN////////////////////
////////////// 3x 3x 3x ---------------------------------------
////////////// 3x 3x 3x ---------------------------------------
////////////// 3x 3x 3x ---------------------------------------
//////////////  -------------------- ( 9x klikbaar vakjes )----
////////////// Speler X / Speler O ----------------------------

//- 3X3X3X -\\
const COMBINEREN_RESULTAAT_RESETTEN = [ 
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
] 
/// Linken met HTML, ID \\\
/// Variabelen \\\
const rijtje = document.getElementById('rijtje')
const vakjeElements = document.querySelectorAll('[opslaan-vakje]')
const opnieuwKnop = document.getElementById('opnieuwKnop')
const werkendeFunctieVoorBerichtenElement = document.getElementById('werkende-functie-voor-berichten')
const resultaatTekstBerichtElement = document.querySelector('[resultaat-tekst-bericht]') /// Resultaat na het W/G met een pop up bericht\\\
let circleTurn

///--------------------------------------------------------------------------------------------------------\\\ GEEN PUNTKOMMA 

startGame()
/// Start het spel
// Place Mark
// Cursor pointer (muisklik) functie
// Winnen controleren
// Gelijkspelen controleren
// Functie om de spelers aan de beurt te spelen voor speler X en speler O
opnieuwKnop.addEventListener('click', startGame)
///Klik,Speler X en Speler O functie\\\
function startGame() {
  circleTurn = false
  vakjeElements.forEach(vakje => { 
    ///SPEL OPNIEUW\\\
    vakje.classList.remove(X_vakje)
    vakje.classList.remove(O_vakje)
    vakje.removeEventListener('click', handleClick) 
    vakje.addEventListener('click', handleClick, { once: true })
  })
  setRijtjeHoverClass()
  werkendeFunctieVoorBerichtenElement.classList.remove('show')
}

function handleClick(e) {
  const vakje = e.target
  const currentClass = circleTurn ? O_vakje : X_vakje
  placeMark(vakje, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setRijtjeHoverClass()
  }
}
///Resultaat bericht na een 1 ronde\\\
function endGame(draw) {
  if (draw) {
    resultaatTekstBerichtElement.innerText = 'Gelijkspel'
  } else {
    resultaatTekstBerichtElement.innerText = `${circleTurn ? "Speler O" : "Speler X"} Heeft gewonnen`
  }
  werkendeFunctieVoorBerichtenElement.classList.add('show')
}

function isDraw() {
  return [...vakjeElements].every(vakje => {
    return vakje.classList.contains(X_vakje) || vakje.classList.contains(O_vakje)
  })
}

function placeMark(vakje, currentClass) {
  vakje.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}
///Verwijderen van X en O\\\
function setRijtjeHoverClass() {
  rijtje.classList.remove(X_vakje)
  rijtje.classList.remove(O_vakje)
  if (circleTurn) {
    rijtje.classList.add(O_vakje)
  } else {
    rijtje.classList.add(X_vakje)
  }
}

function checkWin(currentClass) {
  return COMBINEREN_RESULTAAT_RESETTEN.some(combination => {
    return combination.every(index => {
      return vakjeElements[index].classList.contains(currentClass);
    })
  })
}



