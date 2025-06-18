import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./styles/rosco.css";

import cabeceraAudio from "../../assets/audios/cabecera.mp3";
import { useLocation } from "react-router-dom";

import audioA from "../../assets/audios/A.mp3";
import audioB from "../../assets/audios/B.mp3";
import audioC from "../../assets/audios/C.mp3";
import audioD from "../../assets/audios/D.mp3";
import audioE from "../../assets/audios/E.mp3";
import audioF from "../../assets/audios/F.mp3";
import audioG from "../../assets/audios/G.mp3";
import audioH from "../../assets/audios/H.mp3";
import audioI from "../../assets/audios/I.mp3";
import audioJ from "../../assets/audios/J.mp3";
import audioK from "../../assets/audios/K.mp3";
import audioL from "../../assets/audios/L.mp3";
import audioM from "../../assets/audios/M.mp3";
import audioN from "../../assets/audios/N.mp3";
import audioÑ from "../../assets/audios/Ñ.mp3";
import audioO from "../../assets/audios/O.mp3";
import audioP from "../../assets/audios/P.mp3";
import audioQ from "../../assets/audios/Q.mp3";
import audioR from "../../assets/audios/R.mp3";
import audioS from "../../assets/audios/S.mp3";
import audioT from "../../assets/audios/T.mp3";
import audioU from "../../assets/audios/U.mp3";
import audioV from "../../assets/audios/V.mp3";
import audioW from "../../assets/audios/W.mp3";
import audioX from "../../assets/audios/X.mp3";
import audioY from "../../assets/audios/Y.mp3"; 
import audioZ from "../../assets/audios/Z.mp3"; 

// declaramos constante fuera del componente porque es una lista estática que no cambia
//const letters = "HIJKLMNÑOPQRSTUVWXYZABCDEFG".split("");
const letters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

const Rosco = () => {
  const [juegoIniciado, setJuegioIniciado] = useState(false); //se inicializa a false porque al cargar la pagina el juego no se ha inicializado
  const [tiempoRestante, setTiempoRestante] = useState(180); // valor inicial para temporizador
  const [letraActual, setLetraActual] = useState(null); // empieza en la A (posición 0 del array)
  const [respuestaUsuario, setRespuestaUsuario] = useState(""); //Guarda la respuesta del usuario)
  const [estadoLetras, setEstadoLetras] = useState(Array(letters.length).fill("pendiente"));
  const audioRef = useRef(null);

  const location = useLocation();
  const [animacionIntro, setAnimacionIntro] = useState(false);

  const audioCabeceraRef = useRef(null);

  const audioMap = {
    a: audioA,
    b: audioB,
    c: audioC,
    d: audioD,
    e: audioE,
    f: audioF,
    g: audioG,
    h: audioH,
    i: audioI,
    j: audioJ,
    k: audioK,
    l: audioL,
    m: audioM,
    n: audioN,
    ñ: audioÑ,
    o: audioO,
    p: audioP,
    q: audioQ,
    r: audioR,
    s: audioS,
    t: audioT,
    u: audioU,
    v: audioV,
    w: audioW,
    x: audioX,
    y: audioY,    
    z: audioZ,
  };

  const respuestas = [
    "android",    // para la letra A (posición 0)
    "debug",  // para la B (posición 1)
    "css",// para la C (posición 2)
    "mongodb",      // para la D (posición 3)
    "editor",   // para la E (posición 4)
    "framework",  // para la F (posición 5)
    "git",    // para la G (posición 6)
    "html",    // para la H (posición 7)
    "interfaz",  // para la I (posición 8)
    "javascript",   // para la J (posición 9)
    "kotlin",  // para la K (posición 10)
    "less",     // para la L (posición 11)
    "mysql", // para la M (posición 12)
    "node",  // para la N (posición 13)
    "ñ",     // para la Ñ (posición 14)
    "orientado a objetos", // para la O (posición 15)
    "php",     // para la P (posición 16)
    "sql",   // para la Q (posición 17)      
    "react",    // para la R (posición 18)
    "ssl",  // para la S (posición 19)
    "typescript",  // para la T (posición 20)
    "ui",  // para la U (posición 21)
    "versionado",  // para la V (posición 22)
    "web responsive",   // para la W (posición 23)
    "xml",     // para la X (posición 24)
    "yaml",    // para la Y (posición 25)
    "z-index",  // para la Z (posición 26)
  ];

  useEffect(() => {
    if (location.state?.animar) {
      setAnimacionIntro(true);
      if (audioCabeceraRef.current) {
        audioCabeceraRef.current.currentTime = 0;
        audioCabeceraRef.current.play();
      }
    }
  }, [location.state]);

  useEffect(() => {
    //este useEffect se ejecuta para el temporizador
    if (!juegoIniciado) return; // si el juego no ha empezado no hacemos nada

    const interval = setInterval(() => {
      //setInterval es una funcion que ejecuta una funcion cada x tiempo, en este caso 1000ms
      setTiempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [juegoIniciado]);

  const handleStartGame = () => {
    if (audioCabeceraRef.current) {
      audioCabeceraRef.current.pause();
      audioCabeceraRef.current.currentTime = 0;
    }
  
    setAnimacionIntro(false);
    setTiempoRestante(180);
    setLetraActual(0);
    setJuegioIniciado(true);
  };

  useEffect(() => {
    if (letraActual !== null) {
      const letraKey = letters[letraActual].toLowerCase();
      const audioFile = audioMap[letraKey];
  
      if (audioRef.current && audioFile) {
        audioRef.current.src = audioFile;
        audioRef.current.play();
      }
    }
  }, [letraActual]);


  const handleEnviarRespuesta = () => {
    const respuestaCorrecta = respuestas[letraActual].toLowerCase().trim();
    const respuestaUsuarioLimpia = respuestaUsuario.toLowerCase().trim();

    if (respuestaUsuarioLimpia === respuestaCorrecta) {
      setEstadoLetras(prev => {
        const newEstado = [...prev];
        newEstado[letraActual] = "correcta";
        return newEstado;
      });
    } else {
      setEstadoLetras(prev => {
        const newEstado = [...prev];
        newEstado[letraActual] = "incorrecta";
        return newEstado;
      });
    }

    // Limpiar el input
    setRespuestaUsuario("");

    // Pasar a la siguiente letra
    setLetraActual((prev) => {
      let next = prev;
      do {
        next = (next + 1) % letters.length;
      } while (estadoLetras[next] !== "pendiente" && next !== prev);
      return next;
    });
  };

  // Manejar Pasapalabra: solo avanzar a la siguiente letra sin marcarla
  const handlePasapalabra = () => {
    setLetraActual((prev) => {
      let next = prev;
      do {
        next = (next + 1) % letters.length;
      } while (estadoLetras[next] !== "pendiente" && next !== prev);
      return next;
    });
  };

  useEffect(() => {
    if (audioCabeceraRef.current) {
      audioCabeceraRef.current.play();
    }
  }, []);

  return (
    <>
      <div className={`roscoContainer ${animacionIntro ? 'animacionIntro' : ''}`}>
        <audio ref={audioCabeceraRef} src={cabeceraAudio} />
        <audio ref={audioRef}></audio>
        <div className="roscoWrapper">
          <div className="roscoContent">
            {letters.map((letter, index) => {
              const angle = (360 / letters.length) * index - 90;
              const radius = 220; // Increased radius for a larger circle
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={index}
                  className={`roscoLetter 
                    ${index === letraActual ? "letraActiva" : ""} 
                    ${estadoLetras[index] === "correcta" ? "letraCorrecta" : ""} 
                    ${estadoLetras[index] === "incorrecta" ? "letraIncorrecta" : ""}`}
                  style={{
                    top: `${y + 100}px`,
                    left: `${x + 230}px`
                  }}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        </div>
        <div className="roscoInfo">
          {!juegoIniciado && (
            <button className="roscoStartBtn" onClick={handleStartGame}>
              Comenzar
            </button>
          )}
        </div>
        {juegoIniciado && (
          <div className="roscoInputWrapper">
            <div className="roscoInputRow">
              <div className="circularTimerWrapper">
                <CircularProgressbar
                  value={tiempoRestante}
                  maxValue={180}
                  text={`${tiempoRestante}`}
                  className="circularTimer"
                />
              </div>
              <input
                type="text"
                className="roscoInput"
                value={respuestaUsuario}
                onChange={(e) => setRespuestaUsuario(e.target.value)}
                placeholder="Escribe tu respuesta..."
              />
            </div>
            <div className="roscoInputButtons">
              <button className="roscoButton" onClick={handlePasapalabra}>Pasapalabra</button>
              <button className="roscoButton" onClick={handleEnviarRespuesta}>Enviar respuesta</button>
            </div>
          </div>
        )}
      </div>{" "}
      {/* cierre de roscoContainer */}
    </>
  );
};

export default Rosco;
