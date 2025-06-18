import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/startScreen.css";

const StartScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/rosco', { state: { animar: true } });
  };

  return (
    <div className="startScreenContainer">
      <h1>pasapalabra</h1>
      <button className="startButton" onClick={handleStart}>Empezar</button>
    </div>
  );
};

export default StartScreen;
