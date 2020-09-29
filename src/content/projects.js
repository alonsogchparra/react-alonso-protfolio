import guitareact from "../media/images/projects/guitareact.png";
import marioplans from "../media/images/projects/mario-bros-plans.png";
import lottie from "../media/images/projects/react_lottie_bootstrap.png";
import counter from "../media/images/projects/counter.png";
import ppw from "../media/images/projects/ppw_card.png";
import oki_card from "../media/images/projects/oki_card.png";
import vg from "../media/images/projects/vg_4_kids_card.png";
import entregrados from '../media/images/projects/entregrados.png';
import crema from '../media/images/projects/crema.png';

import oki_detail from "../media/images/projects/oki.png";
import vg_detail from "../media/images/projects/vg_4_kids.png";
import ppw_detail from "../media/images/projects/ppw.png";

export const projects = [
  {
    name: "GuitaReact",
    description_en:
      "GuitaReact is a web app where you can create your song list adding the artist/band name and the song's name, once you have your song list created you can play them randomly. The version one (Random V1) will show show your song list randomly (only song's name and the artist/band name). The version two (Random V2), will have the feature of the Random V1 plus you can play the video or if your prefer the backing track version of the song title from your list. The version three (Random V3), it has the same features than the Random V2 the difference is that you will have more options of video that you can pick. If you play any instrument or you are learning to play some instrument, this web app is for you.",
    description_es:
      "GuitaReact es una aplicación web donde puede crear su lista de canciones agregando el nombre del artista/banda y el nombre de la canción, una vez que haya creado su lista de canciones, puede reproducirlas al azar. La versión uno (Random V1) mostrará su lista de canciones al azar (solo el nombre de la canción y el nombre del artista/banda). La versión dos (Random V2) tendrá la característica de Random V1 y además podrá reproducir el video o si prefiere la versión de la pista de acompañamiento del título de la canción de su lista. La versión tres (Random V3), tiene las mismas características que Random V2, la diferencia es que tendrás más opciones de video que puedes elegir. Si tocas cualquier instrumento o estás aprendiendo a tocar algún instrumento, esta aplicación web es para ti.",
    image: guitareact,
    imageDetail: guitareact,
    developed: [
      "React.js",
      "Redux",
      "Firebase/Firestore",
      "MaterilizeCSS",
      "Youtube API",
    ],
    link: "https://guitareact.web.app/",
    projectLink: "guitareact",
    githubLink: "https://github.com/aliens9889/guitareact",
    video: "https://www.youtube.com/embed/I370AZCxWgk",
    id: 9,
  },
  {
    name: "Entre Grados",
    description_en:
      "This is the hangman but with the web show style of EntreGrados from Youtube. You can add a word or a phrase, making the game a challenge to find out what's the clue, and if you loose, you have to drink (If you are 18+ of course). And if you're drinking, don't drive please! The entire idea is having fun, but taking care each other. It's a classic game renewed to olders",
    description_es:
      "Es el juego del ahorcado con el toque del web show EntreGrados de Youtube. La particularidad de este juego es que ademas de palabras puedes agregar frases, haciendo que el juego tenga un reto mayor, y si pierdes, bebes (Claro si eres mayor de edad). Y si bebes no conduzcas, Por favor! La idea es que tu y los tuyos pasen un buen rato. Un juego clasico renovado para mayores.",
    image: entregrados,
    imageDetail: entregrados,
    developed: [
      "React.js",
      "Redux",
      "Bootstrap",
      "React-Router-Dom",
      "Adobe Illustrator"
    ],
    link: "https://entre-grados-game.web.app/",
    projectLink: "entre_grados",
    githubLink: "https://github.com/aliens9889/react-entre-grados",
    video: "https://www.youtube.com/embed/xvWx7gs6OEQ",
    id: 8,
  },
  {
    name: "Crema La Baragüeña",
    description_en:
      "It is a commercial video that I built for my uncle showing the quality of his product. The illustrations for the commercial I used Adobe Illustrator, the animations I used Adobe After Effects, the voice over I used my own voice and put all these elements together with Camtasia. If you have the opportunity, give a shot with La Baragüeña products, you will get amazed!",
    description_es:
      "Es un video comercial que le realice a un tio mostrando la calidad de su producto. Las ilustraciones del video los hice con Adobe Illustrator, las animaciones use Adobe After Effects, para el voice over use mi voz y la union de todos los elementos para crear el video use Camtasia. Si tienen la oportunidad de probar los productos de La Baragüeña, se van a dar un banquete.",
    image: crema,
    imageDetail: crema,
    developed: [
      "Camtasia",
      "Voice Over",
      "Adobe After Effects",
      "Adobe Illustrator",
    ],
    link: null,
    projectLink: "crema_la_baraguena",
    githubLink: null,
    video: "https://www.youtube.com/embed/tBfAzttYxDM",
    id: 7,
  },
  {
    name: "Mario Bros Plans",
    description_en:
      "It is an web app where you can sign in or sign up and post notes. The original project it's from The Net Ninja (You can find him on YouTube). The Challenge here was update the project using Firebase/Firestore V3 and make the project works as well like the original version (The original project works with a previous version of Firebase/Firestore). The result is the same but the configuration to make work the project with React.js it changed, so it worked to do this project on this way, more people know will how to work with this new version.",
    description_es:
      "Es una aplicación web donde puede iniciar sesión o registrarse y publicar notas. El proyecto original es de The Net Ninja (puedes encontrarlo en YouTube). El desafío aquí fue actualizar el proyecto usando Firebase / Firestore V3 y hacer que el proyecto funcione tan bien como la versión original (el proyecto original funciona con una versión anterior de Firebase / Firestore). El resultado es el mismo pero la configuración para hacer funcionar el proyecto con React.js cambió, por lo que funcionó para hacer este proyecto de esta manera, más gente sabrá cómo trabajar con esta nueva versión.",
    image: marioplans,
    imageDetail: marioplans,
    developed: ["React.js", "Redux", "Firebase/Firestore", "MaterilizeCSS"],
    link: "https://mario-bros-plans.firebaseapp.com/",
    projectLink: "mario_bros_plans",
    githubLink: "https://github.com/aliens9889/react-mario-bros-plans",
    video: null,
    id: 6,
  },
  {
    name: "React + Lottie + Bootstrap",
    description_en:
      "This project was for a client who wanted move the design from photoshop to web. Besides the client wanted this project responsive, wanted also added some animation from some images, so what I did was take the design to recreate the website with React.js and Bootstrap and I took some images and illustrate other ones to build the animations with Adobe After Effects. Using Bodymovin I could translate those animation to React with Lottie. The result was amazing, and it was very interesting how I could handled differents things to put all of them together on the same project. I really enjoyed the result of this project.",
    description_es:
      "Este proyecto fue para un cliente que quería trasladar el diseño de photoshop a web. Además, el cliente quería que este proyecto fuera responsive, también quería agregar algo de animación de algunas imágenes, así que lo que hice fue tomar el diseño para recrear el sitio web con React.js y Bootstrap y tomé algunas imágenes e ilustre otras para construir las animaciones con Adobe After Effects. Usando Bodymovin pude traducir esas animaciones a React con Lottie. El resultado fue asombroso, y fue muy interesante cómo se pudo manejar diferentes cosas para juntarlas todas en el mismo proyecto. Realmente disfruté el resultado de este proyecto.",
    image: lottie,
    imageDetail: lottie,
    developed: ["React.js", "Bootstrap", "Lottie", "After Effects"],
    link: "https://hardcore-shirley-1f9fff.netlify.app/",
    projectLink: "react_lottie_bootstrap",
    githubLink: null,
    video: null,
    id: 5,
  },
  {
    name: "React Counter",
    description_en:
      "This project or These projects despite the final result is the same the way to get the result is different. What I wanted with this project is to show how you can build a project with others UI frameworks or with other way to get the values. These projects will show you that. The counter will increment + 1, decrement -1, add + 10 and subtract - 15. If you are starting programming and you have knowledge of HTML, CSS and Javascript. The next step is this and the plus of learning you can do it with Redux, that way you will be more secure about build a big project or be part of one. Check the repository or CodeSandBox, I hope this helps you.",
    description_es:
      "Este proyecto o estos proyectos a pesar de que el resultado final es el mismo, la forma de obtener el resultado es diferente. Lo que quería con este proyecto es mostrar cómo se puede construir un proyecto con otros marcos de interfaz de usuario o con otra forma de obtener los valores. Estos proyectos te lo mostrarán. El contador aumentará + 1, disminuirá -1, sumará + 10 y restará - 15. Si está comenzando a programar y tiene conocimientos de HTML, CSS y Javascript. El siguiente paso es este y la ventaja de aprender que puedes hacerlo con Redux, de esa manera estarás más seguro acerca de construir un gran proyecto o ser parte de uno. Consulten el repositorio o CodeSandBox, espero que esto les ayude.",
    image: counter,
    imageDetail: counter,
    developed: ["React.js", "Redux"],
    link: "https://codesandbox.io/s/counterownstyle-ijlig",
    projectLink: "react_counter",
    githubLink: null,
    video: null,
    id: 4,
  },
  {
    name: "Ping Pong What!?",
    description_en:
      "This project was inspired on the classic pong, but trying to built something that makes it different or new. Ping Pong What!? has that with monkeys. Did I say monkeys? Well, yes. You can play it with a friends of yours and make a sane bet, that way the looser will wash the dishes or buy the dinner.",
    description_es:
      "Este proyecto fue inspirado por el clasico pong, pero tratando de construir que lo haga diferente o que luzca como nuevo. Ping Pong What!? Tiene eso con monos. ¿Dije Monos? Bueno, si. Puedes jugarlo con un amigo y hacer una apuesta sana, en donde el perdedor lava los platos o invita la comida.",
    image: ppw,
    imageDetail: ppw_detail,
    developed: ["Unity", "Adobe Illustrator"],
    link: "https://aliens9889.itch.io/ping-pong-what",
    projectLink: "ping_pong_what",
    githubLink: "https://github.com/aliens9889/ping-pong-what",
    video: null,
    id: 3,
  },
  {
    name: "Oki & Doki",
    description_en:
      "This is a Puzzle game where the player has to do specific tasks to advance the next level, but to do this have be clever, some people considerate an easy game other ones not so much. What kind the player you are? This game is able on web and Android devices. Do your best. Good Luck!",
    description_es:
      "Es es un juego rompecabeza dondeel jugador tiene que hacer unas tareas especificas para poder avanzar de nivel, pero para hacer esto el jugador tiene que se habilidoso, algunos consideran el juego facil, otros no tanto. ¿Que tipo de jugador eres tú? Este juego esta disponible para web y dispositivos Android. Haz tu mejor esfuerzo. ¡Buena suerte!",
    image: oki_card,
    imageDetail: oki_detail,
    developed: ["Unity", "Adobe Illustrator"],
    link: "https://aliens9889.itch.io/okidoki",
    projectLink: "oki_and_doki",
    githubLink: "https://github.com/aliens9889/OkiDoki",
    video: "https://www.youtube.com/embed/fQ_I80zTxlk",
    id: 2,
  },
  {
    name: "Vg 4 Kids",
    description_en:
      "It is an app where children can build their own 2D platform game. The children have the liberty to create their own character, their own levels and also can pick the visitors on their game. Be a Builder of your own game.",
    description_es:
      "Es una app donde los niños pueden construir su propia juego de plataforma en 2D. Los niños tienen la libertad de crear sus propios personajes, sus propios niveles e incluso agregar los visitantes en su juego. Se el constructor de tu propio juego.",
    image: vg,
    imageDetail: vg_detail,
    developed: ["Unity", "Adobe Illustrator"],
    link: "https://play.google.com/store/apps/details?id=com.likinvent.vg4kids",
    projectLink: "vg_4_kids",
    githubLink: null,
    video: "https://www.youtube.com/embed/TPR7YTQOPAk",
    id: 1,
  },
];