import { Row, Col, Image, Container } from "react-bootstrap";
import { BsClockHistory } from "react-icons/bs";
import { Bs0SquareFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
// testing

export function SimpleCounter(props) {
  const d1 = Math.floor((props.seconds / Math.pow(10, 1 - 1)) % 10);
  const d2 = Math.floor((props.seconds / Math.pow(10, 2 - 1)) % 10);
  const d3 = Math.floor((props.seconds / Math.pow(10, 3 - 1)) % 10);
  const d4 = Math.floor((props.seconds / Math.pow(10, 4 - 1)) % 10);
  const d5 = Math.floor((props.seconds / Math.pow(10, 5 - 1)) % 10);
  const d6 = Math.floor((props.seconds / Math.pow(10, 6 - 1)) % 10);

  return (
    
    <Row style={{ backgroundColor: "#1a1a1a", padding: "10px", border: "1px solid gray", margin: "3px -1px"}}>
      
      
      <Col style={{ margin: "0px -1px", padding: "0px"}}>
      <div style={{ backgroundColor: "black", color: "white", padding: "5px", textAlign: "center", height: "100px", width: "100px", fontSize: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid gray"}}>
          <FaClock style={{ fontSize: "40px" }} />
        </div>
      </Col>
      
        
      <Col style={{ margin: "0px -1px", padding: "0px" }}>
        <div style={{ backgroundColor: "black", color: "white", padding: "1px", textAlign: "center", height: "100px", width: "100px", fontSize: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid gray"}}>

          {d6}
      </div></Col>
      <Col style={{ margin: "0px -1px", padding: "0px" }}>
      <div style={{ backgroundColor: "black", color: "white", padding: "1px", textAlign: "center", height: "100px", width: "100px", fontSize: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid gray"}}>

          {d5}
      </div></Col>
      <Col style={{ margin: "0px -1px", padding: "0px" }}>
      <div style={{ backgroundColor: "black", color: "white", padding: "5px", textAlign: "center", height: "100px", width: "100px", fontSize: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid gray"}}>

          {d4}
      </div></Col>
      <Col style={{ margin: "0px -1px", padding: "0px"}}>
      <div style={{ backgroundColor: "black", color: "white", padding: "5px", textAlign: "center", height: "100px", width: "100px", fontSize: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid gray"}}>

          {d3}
      </div></Col>
      <Col style={{ margin: "0px 0px", padding: "0px"}}>
        <div style={{ backgroundColor: "black", color: "white", padding: "5px", textAlign: "center", height: "100px", width: "100px", fontSize: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid gray"}}>

          {d2}
          </div></Col>
      <Col style={{ margin: "0px -1px", padding: "0px"}}>
      <div style={{ backgroundColor: "black", color: "white", padding: "5px", textAlign: "center", height: "100px", width: "100px", fontSize: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid gray"}}>

          {d1}
        </div>
        </Col>
    </Row>
  );
}