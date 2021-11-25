// 1. Написать фунцкию, которая принимает на вход 
//    hex код цвета, а возвращает rgb код

//    #ffffff -> rgb(255, 255, 255);
//    #f5f5f5 -> rgb(245, 245, 245);
//    #873a3a -> rgb(135, 58, 58);


const getRGBFromHex = (hexCode) => {
    // const red = hexCode.slice(1, 3);
    // const green = hexCode.slice(3, 5);
    // const blue = hexCode.slice(5, 7);
  
    // console.log(`red`, red)
    // console.log(`green`, green)
    // console.log(`blue`, blue)
  
    // const decimalRed = parseInt(red, 16);
    // const decimalGreen = parseInt(green, 16);
    // const decimalBlue = parseInt(blue, 16);
  
    // return `rgb(${decimalRed}, ${decimalGreen}, ${decimalBlue})`

    


    let codes = ''; // 255, 255, 255
  
    for (let i = 1; i < hexCode.length; i += 2) {
      console.log(`i`, i)
      const color = hexCode.slice(i, i + 2);
      let parsedColor = parseInt(color, 16)
      console.log(`color`, color)
  
      if (i !== hexCode.length - 2) {
        parsedColor = `${parsedColor}, `
      }
  
      // codes += (i !== hexCode.length - 2) ? `${color}, ` : color
  
  
      codes += parsedColor
    }
  
    return `rgb(${codes})`
  }
  
const rgbResult = getRGBFromHex('#ffffff');
console.log(`rgbResult`, rgbResult)



// 2. Написать функцию, которая принимает на вход 3 аргумента
//    red, green и blue, каждый их которых отвечеат за соответсвующий
//    канал цвета, и возвращает hex код типа #ffffff



const getHexFromRGB = (r, g, b) => {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
  }
  
const resultHex = getHexFromRGB(123, 34, 78);
console.log(`resultHex`, resultHex);
  




// 3. Написать функуию, которая может замаскировать номер карты
//    На вход она принимает строку, содержащую номер, а
//    возвращает замаскированную карут

//    4141414141414141 -> 4141 **** **** 4141
//    5168111147864573 -> 5168 **** **** 4573



// MSV!
const maskCreditCard = (cardNumber) => {
    const MASK = '****';
    let result = '';
  
    for(let i = 0, j = 1; i < cardNumber.length; i += 4, j++) {
      const numbers = cardNumber.slice(i, i + 4);
      let maskingResult;
      console.log(`numbers`, numbers);
  
      if (j === 2 || j === 3) {
        maskingResult = MASK
      } else {
        maskingResult = numbers
      }
  
      if (j !== 4) {
        result += `${maskingResult} `
      } else {
        result += maskingResult
  
      }
  
  
    }
  
    return result
  }
  
  const res = maskCreditCard('5168111147864573');
  
  console.log(`res`, res)