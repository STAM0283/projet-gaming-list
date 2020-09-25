import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

const GameList = () => {
  const [listGames, setListGames] = useState(null);
  const [bestGame, setBestGame] = useState("");
  const [actionGame, setActionGame] = useState(null);
  const [shooterGame, setShooterGame] = useState(null);
  const [rpgGame, setRpgGame] = useState(null);
  const [adventureGame, setAdventureGame] = useState(null);
  const [allGames, setAllGame] = useState("");
  const [modalGameIsOpen, setModalGameIsOpen] = useState(false);
  const [screenshots, setScreenshots] = useState(null);
  const [idScreenshots, setIdScreenshots] = useState(0);
  useEffect(() => {
    axios.get("https://wild-games.herokuapp.com/api/v1").then((response) => {
      setListGames(response.data.map((item) => item));
      setBestGame(response.data.filter((note) => note.rating >= 4.5));
      setAllGame(response.data.map((item) => item));
      setScreenshots(response.data.map((item) => item.short_screenshots));
      setActionGame(
        response.data
          .map((item) => item.genres[0])
          .filter((item) => item.name === "Action")
      );
      setShooterGame(
        response.data
          .map((item) => item.genres[0])
          .filter((item) => item.name === "Shooter")
      );
      setRpgGame(
        response.data
          .map((item) => item.genres[0])
          .filter((item) => item.name === "RPG")
      );
      setAdventureGame(
        response.data
          .map((item) => item.genres[0])
          .filter((item) => item.name === "Adventure")
      );
    });
  }, []);
  const deleteGame = (e) => {
    let id = parseInt(e.target.id);
    setListGames((prevState) => prevState.filter((game) => game.id !== id));
  };
  return listGames !== null && screenshots !== null && actionGame !== null ? (
    <div className="app">
      <button onClick={() => setListGames(bestGame)}>Best Games</button>
      <button onClick={() => setListGames(allGames)}>All Games</button>
      <button onClick={() => setListGames(actionGame)}>Action Games</button>
      <button onClick={() => setListGames(shooterGame)}>Shooter Games</button>
      <button onClick={() => setListGames(rpgGame)}>RPG Games</button>
      <button onClick={() => setListGames(adventureGame)}>
        Adventure Games
      </button>
      {listGames.map((item, i) => {
        return (
          <div key={i} className="listPicture">
            <Modal
              isOpen={modalGameIsOpen}
              style={{
                content: {
                  backgroundColor: "black",
                },
              }}
            >
              <button
                style={{
                  width: "10%",
                  height: "40px",
                  fontSize: "large",
                  fontWeight: "bolder",
                  marginLeft: "40%",
                  marginBottom: "10px",
                  marginTop: "10px",
                  backgroundColor: "transparent",
                  color: "white",
                  background: "transparent",
                  border: "solid 5px wheat",
                  boxShadow: "0px 0px 20px #00ccff",
                  inset: "0px 0px 20px #00ccff",
                }}
                onClick={() => setModalGameIsOpen(false)}
              >
                Hide the modal
              </button>{" "}
              <button
                style={{
                  width: "10%",
                  height: "40px",
                  fontSize: "large",
                  fontWeight: "bolder",
                  marginLeft: "10px",
                  marginBottom: "30px",
                  marginTop: "10px",
                  color: "white",
                  backgroundColor: "transparent",
                  background: "transparent",
                  border: "solid 5px wheat",
                  boxShadow: "0px 0px 20px #00ccff",
                  inset: "0px 0px 20px #00ccff",
                }}
                onClick={() => setIdScreenshots(idScreenshots + 1)}
              >
                {" "}
                + Screenshots
              </button>
              <div>
                {screenshots.map((item, i) => {
                  return (
                    <div key={i}>
                      <img
                        alt={"picture : " + item.name}
                        style={{
                          marginBottom: "30px",
                          width: "80%",
                          marginLeft: "10%",
                          border: "solid 5px wheat",
                          boxShadow: "0px 0px 20px #00ccff",
                          inset: "0px 0px 20px #00ccff",
                        }}
                        src={item[idScreenshots].image}
                      />
                    </div>
                  );
                })}
              </div>
              <button
                style={{
                  width: "10%",
                  height: "40px",
                  fontSize: "large",
                  fontWeight: "bolder",
                  marginLeft: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                onClick={() => setModalGameIsOpen(false)}
              >
                Hide the modal
              </button>
              <button
                style={{
                  width: "10%",
                  height: "40px",
                  fontSize: "large",
                  fontWeight: "bolder",
                  marginLeft: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                onClick={() => setIdScreenshots(idScreenshots + 1)}
              >
                {" "}
                + Screenshots
              </button>
            </Modal>
            <div
              className="contour-listGame"
              style={{
                borderRadius: "5%",
                width: "90%",
                marginBottom: "30px",
                backgroundColor: "black",
              }}
            >
              <p>Name : {item.name}</p>
              <p>Release : {item.released || "Action Game 2019"}</p>
              <img
                src={item.background_image || item.image_background}
                alt={"picture-game : " + item.name}
              />
              <p>Evaluation : {item.rating || "Good Game"}/5</p>
              <label htmlFor="file"></label>

              <progress id="file" max="5" value={item.rating || 4.5}>
                {" "}
              </progress>
              <button onClick={() => setModalGameIsOpen(true)}>
                Screenshots
              </button>
              <button id={item.id} onClick={deleteGame}>
                Delete
              </button>
            </div>
          </div>
        );
      })}

      <button onClick={() => setListGames(bestGame)}>Best Games</button>
      <button onClick={() => setListGames(allGames)}>All Games</button>
    </div>
  ) : (
    <p>Pas de data</p>
  );
};

export default GameList;
