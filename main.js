document.addEventListener("DOMContentLoaded", function() {
  let interpretBtn =  document.getElementById("interpretBtn"),
  resultContentWrapper = document.getElementById("resultContentWrapper"),
  delay = document.getElementById("delay"),
  inputedContent = document.getElementById("inputedValue"),
  copyBtn = document.getElementById("copyIcon"),
  copiedWrapper = document.getElementById("copiedSpan"),
  inputedContentInTextField = document.getElementById("inputedContentInTextField"),
  i = 0

  // interpretBtn.addEventListener("click", setAnimation)
  interpretBtn.addEventListener("click", interpret)
  copyBtn.addEventListener("click", copy)

  let character = [
    ["01000001", "A"],
    ["01000010", "B"],
    ["01000011", "C"],
    ["01000100", "D"],
    ["01000101", "E"],
    ["01000110", "F"],
    ["01000111", "G"],
    ["01001000", "H"],
    ["01001001", "I"],
    ["01001010", "J"],
    ["01001011", "K"],
    ["01001100", "L"],
    ["01001101", "M"],
    ["01001110", "N"],
    ["01001111", "O"],
    ["01010000", "P"],
    ["01010001", "Q"],
    ["01010010", "R"],
    ["01010011", "S"],
    ["01010100", "T"],
    ["01010101", "U"],
    ["01010110", "V"],
    ["01010111", "W"],
    ["01011000", "X"],
    ["01011001", "Y"],
    ["01011010", "Z"],
    ["01100001", "a"],
    ["01100010", "b"], 
    ["01100011", "c"], 
    ["01100100", "d"], 
    ["01100101", "e"], 
    ["01100110", "f"], 
    ["01100111", "g"], 
    ["01101000", "h"], 
    ["01101001", "i"], 
    ["01101010", "j"], 
    ["01101011", "k"], 
    ["01101100", "l"], 
    ["01101101", "m"], 
    ["01101110", "n"],
    ["01101111", "o"],
    ["01110000", "p"],
    ["01110001", "q"], 
    ["01110010", "r"], 
    ["01110011", "s"], 
    ["01110100", "t"], 
    ["01110101", "u"], 
    ["01110110", "v"], 
    ["01110111", "w"], 
    ["01111000", "x"], 
    ["01111001", "y"], 
    ["01111010", "z"],
    ["00110000", "0"], 
    ["00110001", "1"], 
    ["00110010", "2"], 
    ["00110011", "3"], 
    ["00110100", "4"], 
    ["00110101", "5"], 
    ["00110110", "6"], 
    ["00110111", "7"], 
    ["00111000", "8"], 
    ["00111001", "9"],
    ["00100000", " "],
    ["00101110", "."],
    ["00101111", "/"],
    ["01100000", "`"],
    ["01111110", "~"],
    ["00100001", "!"], 
    ["01000000", "@"], 
    ["00100011", "#"], 
    ["00100100", "$"], 
    ["00100101", "%"], 
    ["01011110", "^"], 
    ["00100110", "&"], 
    ["00101010", "*"], 
    ["00101000", "("], 
    ["00101001", ")"], 
    ["01011111", "_"], 
    ["00101011", "+"], 
    ["01111011", "{"], 
    ["01111101", "}"], 
    ["01011011", "["], 
    ["01011101", "]"], 
    ["01111100", "|"], 
    ["01011100", "\\"], 
    ["00100010", '"'], 
    ["00111011", ";"], 
    ["00111010", ":"], 
    ["00100111", "'"], 
    ["00111111", "?"], 
    ["00101111", "/"], 
    ["00101110", "."], 
    ["00111110", ">"], 
    ["00101100", ","], 
    ["00111100", "<"],
    ["00101101", "-"],
    ["00001010", "\n"]
  ]

  function interpret() {
    resultContentWrapper.textContent = ""
    i = 0
    setTimeout(function() {
      if (containsAnyLetter(inputedContent.value)) {
        toBinary()
      } else {
        toAlphabet()
      }
    }, delay.value)
  }

  function toAlphabet() {
    let inputedValueArray = inputedContent.value.split(" ")
    if (inputedValueArray.length > i) {
      interpretBtn.setAttribute("disabled", true)
      let arr = character.map(function(element){
        if (inputedValueArray[i] == element[0]) {
          return element[1]
        } else {
          return null
        }
      })
      i++
      result = arr.filter(element => {
        return element !== null;
      });
      setTimeout(function() {
        if (result.length > 0) {
          resultContentWrapper.insertAdjacentHTML("beforeend", result[0])
        } else {
          resultContentWrapper.insertAdjacentHTML("beforeend", "?")
        }
        toAlphabet()
      }, delay.value)
    } else {
      inputedContent.value = ""
      interpretBtn.removeAttribute("disabled", true)
    }
  }

  function toBinary() {
    let inputedValueArray = inputedContent.value.split("")
    if (inputedValueArray.length > i) {
      interpretBtn.setAttribute("disabled", true)
      let arr = character.map(function(element){
        if (inputedValueArray[i] == element[1]) {
          return element[0]
        } else {
          return null
        }
      })
      i++
      result = arr.filter(element => {
        return element !== null;
      });
      setTimeout(function() {
        if (result.length > 0) {
          resultContentWrapper.insertAdjacentHTML("beforeend", result[0]+" ")
        } else {
          resultContentWrapper.insertAdjacentHTML("beforeend", "?")
        }
        toBinary()
      }, delay.value)
    } else {
      inputedContent.value = ""
      interpretBtn.removeAttribute("disabled", true)
    }
  }
  
  // function setAnimation() {
  //   let inputedValue = inputedContent.value,
  //   delay = document.getElementById("delay").value,
  //   i = 0,
  //   x = inputedValue.split("").length
  //   resultContentWrapper.textContent = ""
  //   updateSpanContent(resultContentWrapper, inputedValue, delay, i, x)
  // }

  // function updateSpanContent(resultContentWrapper, inputedValue, delay, i, x) {
  //   setTimeout(function() {
  //     if (inputedValue != "") {
  //       interpretBtn.setAttribute("disabled", true)
  //       resultContentWrapper.insertAdjacentHTML("beforeend", inputedValue.split("")[i])
  //       i++            
  //       if (i < x) {
  //         updateSpanContent(resultContentWrapper, inputedValue, delay, i, x)  
  //       } else if (i === x) {
  //         interpretBtn.removeAttribute("disabled", true)
  //       }
  //     } else {
  //       resultContentWrapper.textContent = ""
  //     }
  //   }, delay)
  // }

  function containsAnyLetter(str) {
    let alphabet = /[a-zA-Z]/, 
    specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if (str == " ") {
      return true
    } else if (alphabet.test(str) || specialChars.test(str)) {
      return true
    } else {
      return false
    }
  }

  function copy() {
    console.log(copiedWrapper.textContent != "")
    if (copiedWrapper.textContent == "") {
      copiedWrapper.insertAdjacentHTML("beforeend", "COPIED")
      setTimeout(function () {
        copiedWrapper.textContent = ""
      }, 3000)
    }
    inputedContentInTextField.value = resultContentWrapper.textContent
    inputedContentInTextField.classList.remove("d-none")
    inputedContentInTextField.select();
    document.execCommand('copy')
    inputedContentInTextField.classList.add("d-none")
  }
})