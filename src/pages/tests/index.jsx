import { useState, useEffect } from "react";

import { H1, DivExternaGreen, Sobrepor, Posterior, DivFlexBox } from "./styles";


// ### component ###
const Tests = () => {

  // state
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState("green")

  useEffect(() => {
    if (count === 100) setCount(0)
  }, [count])

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "100vh" }}>

      <div style={{ marginRight: "50px" }}>
        <div style={{ width: "100px", overflow: "hidden" }}>
          <H1 count={count}>{count.toFixed(0).concat("%")}</H1>
        </div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>

      <DivExternaGreen toggle={toggle} onClick={() => toggle === "green" ? setToggle("red") : setToggle("green")}>
        <Sobrepor></Sobrepor>
        <Posterior></Posterior>
      </DivExternaGreen>

      <div>


        <DivFlexBox>
          <div>
            <p style={{ color: "blueviolet" }}>align-items: center</p>
            <div style={{ display: "flex", alignItems: "center", height: "140px", width: "140px", backgroundColor: "blueviolet" }}>
              <div>items 1</div>
              <div>items 2</div>
              <div>items 3</div>
            </div>
          </div>
          <div>
            <p>justify-content: center</p>
            <div style={{ display: "flex", justifyContent: "center", height: "140px", width: "300px", backgroundColor: "black" }}>
              <div style={{ color: "#fff" }}>content 1</div>
              <div style={{ color: "#fff" }}>content 2</div>
              <div style={{ color: "#fff" }}>content 3</div>
            </div>
          </div>
        </DivFlexBox>
      </div>

      {/* <div style={{width: '350px', border: "1px solid black"}}>opaaaaa</div> */}
    </div>
  )
}

export default Tests


// {refVideo.current.currentTime.toFixed(0) !== undefined &&

//     <div>{refVideo.current.currentTime.toFixed(0)}</div>
// }