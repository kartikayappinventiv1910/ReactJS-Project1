import { SnoozeSharp } from "@material-ui/icons";
import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  mainContainer: {
    marginTop: "0px",
  },
  mainHeading: {
    fontSize: "35px",
    fontWeight: "700",
  },
  buttonsDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  increaseBtn: {
    border: "none",
    outline: "none",
    fontSize: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#9cd1f0",
    padding: "3px 20px",
    borderRadius: "15px",
  },
  clearBtn: {
    border: "none",
    outline: "none",
    fontSize: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#e3876b",
    padding: "3px 20px",
    borderRadius: "15px",
  },
  changeBtn: {
    border: "none",
    outline: "none",
    fontSize: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#92c257",
    padding: "3px 20px",
    borderRadius: "15px",
  },
  circleBtn: {
    border: "none",
    outline: "none",
    fontSize: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#d4eb71",
    padding: "3px 20px",
    borderRadius: "15px",
  },
});

export function Canvas() {
  const classes = styles();
  const [isDrawing, setIsDrawing] = useState(false);
  const [isCircle, setIsCircle] = useState(false);
  const [isLine, setIsLine] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [size, setSize] = useState(2);
  const [color, setColor] = useState("black");
  let x1 , y1;

  useEffect(() => {
    prepareCanvas();
  }, [size, color]);

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    // canvas.width = window.innerWidth * 2;
    // canvas.height = window.innerHeight * 2;
    canvas.width = (window.innerWidth * 19) / 20;
    canvas.height = (window.innerHeight * 3) / 4;
    // canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    // context.scale(2, 2);
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineCap = "round";
    context.strokeStyle = color;
    context.lineWidth = size;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    x1=offsetX;
    y1=offsetY;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();

    if (isCircle) {
      const { offsetX, offsetY } = nativeEvent;
      drawCircle(offsetX, offsetY);
      setIsLine(false);
    }
    if (isLine) {
      const { offsetX, offsetY } = nativeEvent;
      drawLine(x1,y1,offsetX, offsetY);
      setIsCircle(false);
    }
  };
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
  function drawCircle(x, y) {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
  }
  function drawLine(x1, y1, x, y) {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x, y);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
  }
  function handleIncrease() {
    let currentsize = size;
    currentsize = currentsize + 2;
    if (currentsize > 50) {
      currentsize = 50;
    }
    setSize(currentsize);
    setIsCircle(false);
  }
  function handleDecrease() {
    let currentsize = size;
    currentsize = currentsize - 2;
    if (currentsize < 2) {
      currentsize = 2;
    }
    setSize(currentsize);
    setIsCircle(false);
  }
  function handleColor() {
    console.log("inside color");
    let currentcolor = color;
    console.log(currentcolor, "currentcolor");
    if (currentcolor === "black") {
      console.log("inside black");
      currentcolor = "red";
    }
    else {
      console.log("inside red");
      currentcolor = "black";
    }
    setColor(currentcolor);
  }

  return (
    <div className={classes.mainContainer}>
      <p className={classes.mainHeading}>DRAW HERE</p>
      <div>
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
        <div className={classes.buttonsDiv}>
          <button onClick={handleIncrease} className={classes.increaseBtn}>
            INCREASE
          </button>
          <span>{size}</span>
          <button onClick={handleDecrease} className={classes.increaseBtn}>
            DECREASE
          </button>
          <button onClick={() => setIsCircle(true)} className={classes.circleBtn}>CIRCLE</button>
          <button onClick={() => setIsLine(true)} className={classes.circleBtn}>LINE</button>
          <button onClick={handleColor} className={classes.changeBtn}>
            CHANGE COLOR
          </button>
          <span>{color}</span>
          <button onClick={clearCanvas} className={classes.clearBtn}>
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}

// const canvasRef = useRef(null);
//   const contextRef = useRef(null);
//   //   const canvas = canvasRef.current;
//   //   const [increseBtn, setIncreaseBtn] = useState();
//   //   const [decreseBtn, setdecreaseBtn] = useState();

//   const prepareCanvas = () => {
//     const canvas = canvasRef.current;
//     // canvas.width = window.innerWidth * 2;
//     // canvas.height = window.innerHeight * 2;
//     // canvas.style.width = `${window.innerWidth}px`;
//     // canvas.style.height = `${window.innerHeight}px`;

//     const context = canvas.getContext("2d");
//     // context.scale(2, 2);
//     // context.lineCap = "round";
//     // context.strokeStyle = "black";
//     // context.lineWidth = 5;
//     contextRef.current = context;
//   };

//   //   const context = canvas.getContext("2d");
//   let x, y;
//   function startDrawing({ nativeEvent }) {
//     const { offsetX, offsetY } = nativeEvent;
//     setIsDrawing(true);
//     x = e.offsetX;
//     y = e.offsetY;
//   }

//   function finishDrawing({ nativeEvent }) {
//     const { offsetX, offsetY } = nativeEvent;
//     setIsDrawing(false);
//     x = undefined;
//     y = undefined;
//   }

//   function draw({ nativeEvent }) {
//     const { offsetX, offsetY } = nativeEvent;
//     if (isDrawing) {
//       const x2 = e.offsetX;
//       const y2 = e.offsetY;

//       drawCircle(x2, y2);
//       drawLine(x, y, x2, y2);
//       x = x2;
//       y = y2;
//     }
//   }

//   function drawCircle(x, y) {
//     contextRef.beginPath();
//     contextRef.arc(x, y, size, 0, Math.PI * 2);
//     contextRef.fillStyle = color;
//     contextRef.fill();
//   }

//   function drawLine(x1, y1, x2, y2) {
//     contextRef.beginPath();
//     contextRef.moveTo(x1, y1);
//     contextRef.lineTo(x2, y2);
//     contextRef.strokeStyle = color;
//     contextRef.lineWidth = size * 2;
//     contextRef.stroke();
//   }
