import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const MovieGame = () => {
  const [listGame, setListGame] = useState(null);
  const [previewGames, setPreviewGames] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idGame, setIdGame] = useState(0);
  useEffect(() => {
    axios.get("https://wild-games.herokuapp.com/api/v1").then((response) => {
      //console.log(response.data.map((item) => item.clip));
      setListGame(response.data.map((item) => item.clip.clips));
      setPreviewGames(response.data.map((item) => item.clip));
    });
  }, []);
  const handleId = () => {
    setIdGame(idGame + 1);
    setModalIsOpen(true);
  };
  return listGame !== null && previewGames !== null ? (
    <div className="movie">
      <p style={{ color: "white", fontSize: "xx-large", fontWeight: "bold" }}>
        There are : {previewGames.length} videos
      </p>
      {listGame.map((item) => {
        return (
          <div className="movieGame">
            <Modal
              isOpen={modalIsOpen}
              style={{
                content: {
                  backgroundColor: "black",
                },
              }}
            >
              <div>
                <button
                  style={{
                    width: "10%",
                    height: "40px",
                    fontSize: "large",
                    fontWeight: "bolder",
                    marginLeft: "45%",
                    marginBottom: "30px",
                    marginTop: "10px",
                    color: "white",
                    backgroundColor: "transparent",
                    background: "transparent",
                    border: "solid 5px wheat",
                    boxShadow: "0px 0px 20px #00ccff",
                    inset: "0px 0px 20px #00ccff",
                  }}
                  onClick={() => setModalIsOpen(false)}
                >
                  Hide the modal
                </button>
                <img
                  alt="video"
                  className="imgPreview"
                  src={previewGames[idGame].preview}
                />
                ;
              </div>

              <button
                style={{
                  width: "10%",
                  height: "40px",
                  fontSize: "large",
                  fontWeight: "bolder",
                  marginLeft: "45%",
                  marginBottom: "30px",
                  marginTop: "10px",
                  color: "white",
                  backgroundColor: "transparent",
                  background: "transparent",
                  border: "solid 5px wheat",
                  boxShadow: "0px 0px 20px #00ccff",
                  inset: "0px 0px 20px #00ccff",
                }}
                onClick={() => setModalIsOpen(false)}
              >
                Hide the modal
              </button>
            </Modal>
            <video id="video" controls>
              <source src={item.full} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div></div>
            <button
              style={{
                width: "10%",
                height: "40px",
                fontSize: "large",
                fontWeight: "bolder",
                marginLeft: "50%",
                marginBottom: "30px",
                marginTop: "10px",
                color: "white",
                backgroundColor: "transparent",
                background: "transparent",
                border: "solid 5px wheat",
                boxShadow: "0px 0px 20px #00ccff",
                inset: "0px 0px 20px #00ccff",
              }}
              onClick={handleId}
            >
              previeuw
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <p>Pas de data</p>
  );
};

export default MovieGame;
