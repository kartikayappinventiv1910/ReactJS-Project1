import React, { useEffect, useState } from "react";

function PasswordGenerator() {
  const [passLength, setPassLength] = useState();
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [passwordGen, setPasswordGen] = useState();

  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=";

  console.log(passLength, "passlen");

  function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
  }

  function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  }

  function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function generatePassword() {
    let len = passLength;
    let password = "";

    if (upperCase) {
      password += getUppercase();
      if (len === 0) {
        setUpperCase(false);
      }
      len = len - 1;
    }

    if (lowerCase) {
      password += getLowercase();
      if (len === 0) {
        setLowerCase(false);
      }
      len = len - 1;
    }

    if (number) {
      password += getNumber();
      if (len === 0) {
        setNumber(false);
      }
      len = len - 1;
    }

    if (symbol) {
      password += getSymbol();
      if (len === 0) {
        setSymbol(false);
      }
      len = len - 1;
    }
    while (len !== 0) {
      let x = generateX();
      password += x;
    }
    console.log(password, "password");
    // setPasswordGen(password);
    // console.log(passwordGen, "generated password");
  }

  function generateX() {
    const xs = [];
    if (upperCase) {
      xs.push(getUppercase());
    }

    if (lowerCase) {
      xs.push(getLowercase());
    }

    if (number) {
      xs.push(getNumber());
    }

    if (symbol) {
      xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
  }
  //   console.log(upperCase, "upp");
  return (
    <div>
      {/* <div class="pw-header">
        <div class="pw">
          <span id="pw">l823Zs78#Css09@</span>
          <button id="copy">Copy</button>
        </div>
      </div> */}
      <div class="pw-body">
        <div class="form-control">
          <label for="len">Password Length</label>
          <input
            // value="15"
            type="number"
            min="2"
            max="30"
            onChange={(e) => setPassLength(e.target.value)}
          />
        </div>
        <div class="form-control">
          <label for="upper">Contain Uppercase Letters</label>
          <input
            name={upperCase}
            onChange={(e) => {
              setUpperCase(e.target.checked);
            }}
            type="checkbox"
          />
        </div>
        <div class="form-control">
          <label for="lower">Contain Lowercase Letters</label>
          <input
            name={lowerCase}
            // onChange={(e) => lowerCaseCheck(e.target.checked)}
            onChange={(e) => {
              setLowerCase(e.target.checked);
            }}
            type="checkbox"
          />
        </div>
        <div class="form-control">
          <label for="number">Contain Numbers</label>
          <input
            // onChange={(e) => numberCheck(e.target.checked)}
            onChange={(e) => {
              setNumber(e.target.checked);
            }}
            type="checkbox"
          />
        </div>
        <div class="form-control">
          <label for="symbol">Contain Symbols</label>
          <input
            // onChange={(e) => symbolCheck(e.target.checked)}
            onChange={(e) => {
              setSymbol(e.target.checked);
            }}
            type="checkbox"
          />
        </div>
        <button class="generate" onClick={generatePassword}>
          Generate Password
        </button>
        <p>{passwordGen}</p>
      </div>
    </div>
  );
}

export default PasswordGenerator;

// const string = "abcdefghijklmnopqrstuvwxyz";
// const numeric = "0123456789";
// const punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// const [length, setLength] = useState(10);
//   const [password, setPassword] = useState("");

//   const generatePassword = (e) => {
//     e.preventDefault();
//     const formValid = +length > 0;
//     if (!formValid) {
//       return;
//     }
//     let character = "";
//     let password = "";
//     while (password.length < length) {
//       const entity1 = Math.ceil(string.length * Math.random() * Math.random());
//       const entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
//       const entity3 = Math.ceil(
//         punctuation.length * Math.random() * Math.random()
//       );
//       let hold = string.charAt(entity1);
//       hold = password.length % 2 === 0 ? hold.toUpperCase() : hold;
//       character += hold;
//       character += numeric.charAt(entity2);
//       character += punctuation.charAt(entity3);
//       password = character;
//     }
//     password = password
//       .split("")
//       .sort(() => {
//         return 0.5 - Math.random();
//       })
//       .join("");
//     setPassword(password.substr(0, length));
//   };

{
  /* <form onSubmit={generatePassword}>
        <div>
          <label>length</label>
          <input value={length} onChange={(e) => setLength(e.target.value)} />
        </div>
        <button type="submit">generate password</button>
      </form>
      <div>{password}</div> */
}
