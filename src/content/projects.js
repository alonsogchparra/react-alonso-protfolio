import translate from "../i18n/translate";

export const projects = [
  {
    name: "Autocorrector (Tiny)",
    description_en:
      "Autocorrector (Tiny) is a web application where you as an user you can add the misspelled word and the right word. That way the application on the textarea once you write the word (misspelled, as you added previously) when you press the space button this will update the content with the right word. If you want to add a misspelled word and it is already added, the application won't let you add it for that reason. Also you will have the Correction's list to check the words you have and you can use to make the autocorrector works.",
    description_es:
      "Autocorrector (Tiny) es una aplicación web donde tú como usuario puedes agregar la palabra mal escrita y la palabra correcta. De esa manera, la aplicación en el área de texto una vez que escriba la palabra (mal escrita, como agregó anteriormente) cuando presione el botón de espacio, esto actualizará el contenido con la palabra correcta. Si desea agregar una palabra mal escrita y ya está agregada, la aplicación no le permitirá agregarla por ese motivo. También tendrás la lista de Correcciones para comprobar las palabras que tienes y puedes usar para hacer que el autocorrector funcione.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fautocorrector.png?alt=media&token=cd08949e-0315-49f5-9613-6119992fe80b",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fautocorrector.png?alt=media&token=cd08949e-0315-49f5-9613-6119992fe80b",
    developed: ["React.js", "Bootstrap 5", "Animate.css", "Github(Page)"],
    link: "https://alonsogchparra.github.io/autocorrector-react/",
    projectLink: "autocorrector",
    githubLink: "https://github.com/alonsogchparra/autocorrector-react",
    video: "https://www.youtube.com/embed/b2_ZAxv3Wn0",
    id: 11,
  },
  {
    name: translate("myWebsite"),
    description_en:
      "I developed my website with React.js and the main purpose of doing this is so that everyone can see that the projects I have done, either programming and illustration, I also hope to show the projects where I have been able to collaborate. In addition to showing the information of the projects, I will share the link so that you can see the project live and the repository so that you can review how it was developed. I hope to keep updating my website with more projects and have the opportunity to provide support in other projects that allow me to meet more people and acquire new skills. I also see it as a different way to show that I am looking for new opportunities.",
    description_es:
      "Mi sitio web lo desarrollé con React.js y el principal proposito de para realizar esto, es para que todos vean que los proyectos que he realizado, bien sea de programación e ilustración, tambien espero mostrar los proyectos en donde he podido colaborar. Además de mostrar la información de los proyectos, compartiré el link para que puedan ver el proyecto en vivo y el repositorio para que puedan revisar como fue desarrollado. Espero seguir actualizando mi sitio web con más proyectos y tener la oportunidad de brindar apoyo en otros proyectos que me permitan conocer más personas y adquirir nuevas habilidades. También lo veo como una forma distinta para mostrar que estoy buscando nuevas oportunidades.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fmy_website.png?alt=media&token=96d95054-3ec6-45a5-a348-b8c9e5b31525",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fmy_website.png?alt=media&token=96d95054-3ec6-45a5-a348-b8c9e5b31525",
    developed: ["React.js", "Redux", "Redux Thunk", "Material UI", "i18next"],
    link: "https://alonsogchparra.web.app/",
    projectLink: "my_website",
    githubLink: "https://github.com/alonsogchparra/react-alonso-protfolio",
    video: "https://www.youtube.com/embed/fdwEjqPFZks",
    id: 10,
  },
  {
    name: "GuitaReact",
    description_en:
      "GuitaReact is a web app where you can create your song list adding the artist/band name and the song's name, once you have your song list created you can play them randomly. The version one (Random V1) will show show your song list randomly (only song's name and the artist/band name). The version two (Random V2), will have the feature of the Random V1 plus you can play the video or if your prefer the backing track version of the song title from your list. The version three (Random V3), it has the same features than the Random V2 the difference is that you will have more options of video that you can pick. If you play any instrument or you are learning to play some instrument, this web app is for you.",
    description_es:
      "GuitaReact es una aplicación web donde puede crear su lista de canciones agregando el nombre del artista/banda y el nombre de la canción, una vez que haya creado su lista de canciones, puede reproducirlas al azar. La versión uno (Random V1) mostrará su lista de canciones al azar (solo el nombre de la canción y el nombre del artista/banda). La versión dos (Random V2) tendrá la característica de Random V1 y además podrá reproducir el video o si prefiere la versión de la pista de acompañamiento del título de la canción de su lista. La versión tres (Random V3), tiene las mismas características que Random V2, la diferencia es que tendrás más opciones de video que puedes elegir. Si tocas cualquier instrumento o estás aprendiendo a tocar algún instrumento, esta aplicación web es para ti.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fguitareact.png?alt=media&token=b0e96b3a-d725-4d42-85eb-debc2780542e",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fguitareact.png?alt=media&token=b0e96b3a-d725-4d42-85eb-debc2780542e",
    developed: [
      "React.js",
      "Redux",
      "Firebase/Firestore",
      "Materialize CSS",
      "Youtube API",
    ],
    link: "https://guitareact.web.app/",
    projectLink: "guitareact",
    githubLink: "https://github.com/alonsogchparra/guitareact",
    video: "https://www.youtube.com/embed/I370AZCxWgk",
    id: 9,
  },
  {
    name: "Entre Grados",
    description_en:
      "This is the hangman but with the web show style of EntreGrados from Youtube. You can add a word or a phrase, making the game a challenge to find out what's the clue, and if you loose, you have to drink (If you are 18+ of course). And if you're drinking, don't drive please! The entire idea is having fun, but taking care each other. It's a classic game renewed to olders",
    description_es:
      "Es el juego del ahorcado con el toque del web show EntreGrados de Youtube. La particularidad de este juego es que ademas de palabras puedes agregar frases, haciendo que el juego tenga un reto mayor, y si pierdes, bebes (Claro si eres mayor de edad). Y si bebes no conduzcas, Por favor! La idea es que tu y los tuyos pasen un buen rato. Un juego clasico renovado para mayores.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fentregrados.png?alt=media&token=c69011ed-2bda-4280-b941-8c904c1181e0",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fentregrados.png?alt=media&token=c69011ed-2bda-4280-b941-8c904c1181e0",
    developed: [
      "React.js",
      "Redux",
      "Bootstrap",
      "React-Router-Dom",
      "Adobe Illustrator",
    ],
    link: "https://entre-grados-game.web.app/",
    projectLink: "entre_grados",
    githubLink: "https://github.com/alonsogchparra/react-entre-grados",
    video: "https://www.youtube.com/embed/xvWx7gs6OEQ",
    id: 8,
  },
  {
    name: "Crema La Baragüeña",
    description_en:
      "It is a commercial video that I built for my uncle showing the quality of his product. The illustrations for the commercial I used Adobe Illustrator, the animations I used Adobe After Effects, the voice over I used my own voice and put all these elements together with Camtasia. If you have the opportunity, give a shot with La Baragüeña products, you will get amazed!",
    description_es:
      "Es un video comercial que le realice a un tio mostrando la calidad de su producto. Las ilustraciones del video los hice con Adobe Illustrator, las animaciones use Adobe After Effects, para el voice over use mi voz y la union de todos los elementos para crear el video use Camtasia. Si tienen la oportunidad de probar los productos de La Baragüeña, se van a dar un banquete.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fcrema.png?alt=media&token=7c87b8d6-14af-4870-9c92-f397db8be3e0",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fcrema.png?alt=media&token=7c87b8d6-14af-4870-9c92-f397db8be3e0",
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
      "It is a web app where you can sign in or sign up and post notes. The original project it's from The Net Ninja (You can find him on YouTube). The Challenge here was update the project using Firebase/Firestore V3 and make the project works as well like the original version (The original project works with a previous version of Firebase/Firestore). The result is the same but the configuration to make work the project with React.js it changed, so it worked to do this project on this way, more people know will how to work with this new version.",
    description_es:
      "Es una aplicación web donde puede iniciar sesión o registrarse y publicar notas. El proyecto original es de The Net Ninja (puedes encontrarlo en YouTube). El desafío aquí fue actualizar el proyecto usando Firebase / Firestore V3 y hacer que el proyecto funcione tan bien como la versión original (el proyecto original funciona con una versión anterior de Firebase / Firestore). El resultado es el mismo pero la configuración para hacer funcionar el proyecto con React.js cambió, por lo que funcionó para hacer este proyecto de esta manera, más gente sabrá cómo trabajar con esta nueva versión.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fmario-bros-plans.png?alt=media&token=e2b4ace1-745a-4578-b6c0-ac2e20956479",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fmario-bros-plans.png?alt=media&token=e2b4ace1-745a-4578-b6c0-ac2e20956479",
    developed: ["React.js", "Redux", "Firebase/Firestore", "MaterializeCSS"],
    link: "https://mario-bros-plans.firebaseapp.com/",
    projectLink: "mario_bros_plans",
    githubLink: "https://github.com/alonsogchparra/react-mario-bros-plans",
    video: null,
    id: 6,
  },
  {
    name: "React + Lottie + Bootstrap",
    description_en:
      "This project was for a client who wanted to move the design from photoshop to web. Besides the client wanted this project responsive, wanted also added some animation from some images, so what I did was take the design to recreate the website with React.js and Bootstrap and I took some images and illustrate other ones to build the animations with Adobe After Effects. Using Bodymovin I could translate those animation to React with Lottie. The result was amazing, and it was very interesting how I could handled differents things to put all of them together on the same project. I really enjoyed the result of this project.",
    description_es:
      "Este proyecto fue para un cliente que quería trasladar el diseño de photoshop a web. Además, el cliente quería que este proyecto fuera responsive, también quería agregar algo de animación de algunas imágenes, así que lo que hice fue tomar el diseño para recrear el sitio web con React.js y Bootstrap y tomé algunas imágenes e ilustre otras para construir las animaciones con Adobe After Effects. Usando Bodymovin pude traducir esas animaciones a React con Lottie. El resultado fue asombroso, y fue muy interesante cómo se pudo manejar diferentes cosas para juntarlas todas en el mismo proyecto. Realmente disfruté el resultado de este proyecto.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Freact_lottie_bootstrap.png?alt=media&token=6ef5a8f2-122a-4a61-8804-892b7db941da",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Freact_lottie_bootstrap.png?alt=media&token=6ef5a8f2-122a-4a61-8804-892b7db941da",
    developed: ["React.js", "Bootstrap", "Lottie", "After Effects"],
    link: "https://hardcore-shirley-1f9fff.netlify.app/",
    projectLink: "react_lottie_bootstrap",
    githubLink: null,
    video: null,
    id: 5,
  },
  {
    name: translate("reactCounter"),
    description_en:
      "This project or These projects despite the final result is the same the way to get the result is different. What I wanted with this project is to show how you can build a project with others UI frameworks or with other way to get the values. These projects will show you that. The counter will increment + 1, decrement -1, add + 10 and subtract - 15. If you are starting programming and you have knowledge of HTML, CSS and Javascript. The next step is this and the plus of learning you can do it with Redux, that way you will be more secure about build a big project or be part of one. Check the repository or CodeSandBox, I hope this helps you.",
    description_es:
      "Este proyecto o estos proyectos a pesar de que el resultado final es el mismo, la forma de obtener el resultado es diferente. Lo que quería con este proyecto es mostrar cómo se puede construir un proyecto con otros marcos de interfaz de usuario o con otra forma de obtener los valores. Estos proyectos te lo mostrarán. El contador aumentará + 1, disminuirá -1, sumará + 10 y restará - 15. Si está comenzando a programar y tiene conocimientos de HTML, CSS y Javascript. El siguiente paso es este y la ventaja de aprender que puedes hacerlo con Redux, de esa manera estarás más seguro acerca de construir un gran proyecto o ser parte de uno. Consulten el repositorio o CodeSandBox, espero que esto les ayude.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fcounter.png?alt=media&token=74491063-3fcd-4421-93aa-8d47c8f08921",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fcounter.png?alt=media&token=74491063-3fcd-4421-93aa-8d47c8f08921",
    developed: ["React.js", "Redux"],
    link: "https://codesandbox.io/s/counterownstyle-ijlig",
    projectLink: "react_counter",
    githubLink: "https://github.com/alonsogchparra/counter-react/tree/develop",
    video: null,
    id: 4,
  },
  {
    name: "Ping Pong What!?",
    description_en:
      "This project was inspired on the classic pong, but trying to built something that makes it different or new. Ping Pong What!? has that with monkeys. Did I say monkeys? Well, yes. You can play it with a friends of yours and make a sane bet, that way the looser will wash the dishes or buy the dinner.",
    description_es:
      "Este proyecto fue inspirado por el clasico pong, pero tratando de construir que lo haga diferente o que luzca como nuevo. Ping Pong What!? Tiene eso con monos. ¿Dije Monos? Bueno, si. Puedes jugarlo con un amigo y hacer una apuesta sana, en donde el perdedor lava los platos o invita la comida.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fppw_card.png?alt=media&token=7e35dc76-fb9a-4e9f-bf9b-5fceb18f0ea5",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fppw.png?alt=media&token=07b0d51f-3549-47d2-8fb2-5617512ec25d",
    developed: ["Unity", "Adobe Illustrator"],
    link: "https://aliens9889.itch.io/ping-pong-what",
    projectLink: "ping_pong_what",
    githubLink: "https://github.com/alonsogchparra/ping-pong-what",
    video: null,
    id: 3,
  },
  {
    name: "Oki & Doki",
    description_en:
      "This is a Puzzle game where the player has to do specific tasks to advance the next level, but to do this have be clever, some people considerate an easy game other ones not so much. What kind the player you are? This game is able on web and Android devices. Do your best. Good Luck!",
    description_es:
      "Es es un juego rompecabeza dondeel jugador tiene que hacer unas tareas especificas para poder avanzar de nivel, pero para hacer esto el jugador tiene que se habilidoso, algunos consideran el juego facil, otros no tanto. ¿Que tipo de jugador eres tú? Este juego esta disponible para web y dispositivos Android. Haz tu mejor esfuerzo. ¡Buena suerte!",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Foki_card.png?alt=media&token=b568d0db-e3d9-48a1-a659-8b700a2e6624",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Foki.png?alt=media&token=264aea23-27b5-4ec2-9e52-c53c153c64c8",
    developed: ["Unity", "Adobe Illustrator"],
    link: "https://aliens9889.itch.io/okidoki",
    projectLink: "oki_and_doki",
    githubLink: "https://github.com/alonsogchparra/OkiDoki",
    video: "https://www.youtube.com/embed/fQ_I80zTxlk",
    id: 2,
  },
  {
    name: "Vg 4 Kids",
    description_en:
      "It is an app where children can build their own 2D platform game. The children have the liberty to create their own character, their own levels and also can pick the visitors on their game. Be a Builder of your own game.",
    description_es:
      "Es una app donde los niños pueden construir su propia juego de plataforma en 2D. Los niños tienen la libertad de crear sus propios personajes, sus propios niveles e incluso agregar los visitantes en su juego. Se el constructor de tu propio juego.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fvg_4_kids_card.png?alt=media&token=014f6993-e8f1-4c2f-a5e8-ae1cf74c1afe",
    imageDetail:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fvg_4_kids.png?alt=media&token=34eb9f54-eb03-4b93-9756-acbd3c00f796",
    developed: ["Unity", "Adobe Illustrator"],
    link: "https://play.google.com/store/apps/details?id=com.likinvent.vg4kids",
    projectLink: "vg_4_kids",
    githubLink: null,
    video: "https://www.youtube.com/embed/TPR7YTQOPAk",
    id: 1,
  },
];
