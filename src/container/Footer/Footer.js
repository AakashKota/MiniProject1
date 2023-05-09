import React from "react";
import { Container, List, Divider, Image } from "semantic-ui-react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Img1 from "../../Assets/Sale/Sale.png";
import Jordan from"../../Assets/Sale/Jordan.jpg";
import {BsExclamationTriangleFill} from "react-icons/bs";
function Footer() {
  return (
    <div className="footer">
       <Marquee className="d-flex"><img src={Img1} alt="" width={100} height={20}/> &nbsp;&nbsp;&nbsp; <strong> <h2>Jordans <img src={Jordan} alt="" height={40}/> are back in stock!!! &nbsp;&nbsp;<BsExclamationTriangleFill style={{color:"yellow",width:20,height:20}}/></h2></strong></Marquee>
        <Container textAlign="center" className="footer__container">
          
          <Image
            centered
            size="mini"
            src="https://img.icons8.com/doodle/96/000000/user-male-circle.png"
            alt="userPic"
          />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Mini Project
            </List.Item>
            <List.Item as="a" href="#">
              Date
            </List.Item>
            <List.Item as="a" href="">
              <Link to="/contact">
              Team
              </Link>
            </List.Item>
          </List>
        </Container>
     
    </div>
  );
}

export default Footer;
