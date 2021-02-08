//The DNA strand is missing the pairing element. 
//Take each character, get its pair, and return the results as a 2d array.
//For the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]


function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }

  const arr = str.split("")
  return arr.map(element => [element, pairs[element]])
}

pairElement("GCG");