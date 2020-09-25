import React, { useState } from "react";
import Modal from "react-modal";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import phone from "../images/phone.png";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="footer">
      <Modal
        isOpen={modalIsOpen}
        style={{
          content: {
            backgroundColor: "black",
          },
        }}
      >
        <button
          onClick={() => setModalIsOpen(false)}
          style={{
            width: "10%",
            height: "60px",
            fontSize: "large",
            marginLeft: "45%",
            marginBottom: "30px",
            marginTop: "10px",
            color: "black",
            fontWeight: "bold",
            border: "solid 5px wheat",
            boxShadow: "0px 0px 20px #00ccff",
            inset: "0px 0px 60px #00ffff",
            borderRadius: "5px",
          }}
        >
          Hide the modal
        </button>
        <div className="modalFooter">
          <h1 style={{ marginTop: "50px", color: "whitesmoke" }}>
            STAMBOULI AMINE
          </h1>
          <a
            href="https://www.linkedin.com/in/stambouli-d%C3%A9veloppeur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt = "myLinkedin" src={linkedin} style={{ width: "5%" }} />
            <button
              style={{
                width: "18%",
                borderRadius: "5px",
                height: "60px",
                fontSize: "large",
                fontWeight: "bolder",
                marginLeft: "10px",
                marginBottom: "30px",
                marginTop: "10px",
                color: "black",
                border: "solid 5px wheat",
                boxShadow: "0px 0px 20px #00ccff",
                inset: "0px 0px 60px #00ffff",
              }}
            >
              My Linkedin
            </button>
          </a>
          <br />
          <a
            href="https://github.com/STAM0283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img  alt = "My GitHub" src={github} style={{ width: "5%" }} />
            <button
              style={{
                width: "18%",
                height: "60px",
                fontSize: "large",
                fontWeight: "bolder",
                borderRadius: "5px",
                marginLeft: "10px",
                marginBottom: "30px",
                marginTop: "10px",
                color: "black",
                border: "solid 5px wheat",
                boxShadow: "0px 0px 20px #00ccff",
                inset: "0px 0px 60px #00ffff",
              }}
            >
              My GitHub
            </button>
          </a>
          <br />

          <img  alt = "My E-mail" src={email} style={{ width: "5%" }} />
          <button
            style={{
              height: "60px",
              width: "18%",
              borderRadius: "5px",
              fontSize: "large",
              fontWeight: "bolder",
              marginLeft: "10px",
              marginBottom: "30px",
              marginTop: "10px",
              color: "black",
              border: "solid 5px wheat",
              boxShadow: "0px 0px 20px #00ccff",
              inset: "0px 0px 60px #00ffff",
            }}
          >
            aminestambouli00780@gmail.com
          </button>
          <br />
          <img   alt = "My Phone" src={phone} style={{ width: "5%" }} />
          <button
            style={{
              height: "60px",
              borderRadius: "5px",
              width: "18%",
              fontSize: "large",
              fontWeight: "bolder",
              marginLeft: "10px",
              marginBottom: "30px",
              marginTop: "10px",
              color: "black",
              border: "solid 5px wheat",
              boxShadow: "0px 0px 20px #00ccff",
              inset: "0px 0px 60px #00ffff",
            }}
          >
            06 99 06 93 90
          </button>
        </div>
      </Modal>
      <button
        className="btn btn-outline-danger btn-lg"
        onClick={() => setModalIsOpen(true)}
        style={{
          width: "13%",
          height: "50px",
          fontSize: "x-large",
          fontWeight: "bolder",
          marginLeft: "10px",
          marginBottom: "30px",
          marginTop: "10px",
        }}
      >
        CONTACT
      </button>
    </div>
  );
};

export default Footer;
