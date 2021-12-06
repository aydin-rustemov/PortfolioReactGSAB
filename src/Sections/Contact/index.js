// This is Contact component, it will contain contact form.
import React, { useRef } from 'react';
import Facebook from "../../assets/facebook-square-brands.svg";
import Linkedin from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";
import emailjs from 'emailjs-com';

const ContactSection = styled.div`
width:100vw;
padding: calc(2.5rem + 2.5vw) 0;
background-color:var(--black);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title = styled.h1`
color: #0a0b10;
display: inline-block;
font-size: calc(1rem + 1.5vw);
margin-top: 1.5rem;
margin-bottom:3rem;
position: relative;
color:var(--white);

&::before{
  content:'';
  height:1px;
  width:50%;
  position:absolute;
  left:50%;
  bottom:0;
  border-bottom:2px solid var(--pink);
  transform:translate(-50%);
}
`;
const Icons = styled.div`
display:inline;
margin-bottom:3rem;
a{
  &:not(:last-child){
    margin-right:2rem;
  }
&:hover{
  img{
    filter:invert(20%)
    sepia(100%) saturate(300%)
    hue-rotate(500deg)
    ;

  }
}

}

img{
  width:3rem;
  height:3rem;
}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-item:center;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea{
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button{
    padding:0.8rem 2rem;
    background-color:var(--white);
    border-radius:20px;
    font-size:1.2rem;
    cursor:pointer;
    transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  }
`;
const Row = styled.div`
@media only Screen and (max-width:40em){
  display:flex;
  flex-direction:column;
  input{
    &[name="name"]{
      margin-right:0;
    }
  }
}
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_duf3i0h', 'template_gzdoh9u', form.current, 'user_DLUb7VUEbiI60KFZcHHPt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };

  return <ContactSection id="contact">

    <Title>Get in touch</Title>
    <Icons>
      <a href="https://www.facebook.com/profile.php?id=100009532128843">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="https://www.Linkedin.com/" >
        <img src={Linkedin} alt="Linkedin" />
      </a>
      <a href="https://www.twitter.com/" >
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/rust3mov/" >
        <img src={Instagram} alt="Instagram" />
      </a>
    </Icons>
    <Form ref={form} onSubmit={sendEmail}>
      <Row>
        <input type="text" name="name" placeholder="your name" />
        <input type="email" name="email" placeholder="enter working email id" />
      </Row>
      <textarea name="message" cols="30" rows="2" placeholder="your message"></textarea>
      <div style={{ margin: "0 auto" }}>
        <button type="submit">Submit</button>
      </div>
    </Form>



  </ContactSection>;
};

export default Contact;
