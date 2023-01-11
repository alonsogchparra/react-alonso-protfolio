import { LOCALES } from '../locales';

export default {
  [LOCALES.SPANISH]: {
    // Dashboard
    hi: '¡Hola! ¡Estoy en busqueda de nuevas oportunidades!',
    profession: 'Desarrollador de Software y más.',
    checkMoreAboutMe: '¡Mira más sobre mí!',
    // About Me
    aboutMe: 'Sobre mi',
    aboutSub:
      'Desarrollador de Software • Desarrollador Frontend • Ilustrador • y más',
    aboutLineOne: '¡Hola a todos! Mi nombre es ',
    name: 'Alonso Parra',
    aboutLineOneNext:
      'Soy Ingeniero de Sistemas, disfruto crear proyectos y aprender nuevas cosas.',
    aboutLineTwo: 'Tuve el honor de recibir mi título en la',
    college: 'Universidad de los Andes',
    aboutLineTwoNext:
      'Estando allí, pude observar muchas cosas que me ayudaron sobre que rutas puedo tomar mezclando desarrollo, diseño y otras cosas que podrían ser aporte adicional en cualquier proyecto.',
    aboutLineThree: 'Mis intereses técnicos son el',
    frontend: 'Desarrollo Frontend',
    mobile: 'Desarrollo Móvil',
    illustration: 'Ilustración',
    and: 'e',
    game: 'Desarrollo de Juegos',
    aboutLineThreeNext: 'La mayor experiencia con',
    javascript: 'Javascript',
    aboutLineThreeNextOne: 'ha sido desarrollando con',
    react: 'React.js',
    with: 'con',
    csharp: 'C#',
    developing: 'desarrollando con',
    unity: 'Unity',
    for: 'Para',
    illustrations: 'ilustraciones',
    work: 'trabajo con',
    ai: 'Adobe Illustrator',
    aboutLineThreeNextTwo:
      'Los próximos pasos que quiero seguir es aprender sobre',
    native: 'React Native',
    try: 'para el desarrollo móvil y',
    nextjs: 'Next.js',
    toKnowFramework:
      'para conocer el framework y sobre el server side trabajandolo en un proyecto.',
    node: 'Node.js',
    whyNot:
      'para comprender mejor cómo trabajar el front-end y aprender back-end en un mismo proyecto',
    live: 'Actualmente vivo en',
    vzla: 'Venezuela',
    aboutLineFour:
      'En mi tiempo libre, me gusta tocar guitarra, ver series, peliculas y jugar videojuegos.',
    aboutLineFive: 'Sientanse libre de chequear mis',
    projects: 'proyectos',
    aboutLineFiveOne:
      'que he disfrutado construirlos y aprender mucho de ellos en el camino.',
    aboutLineSix: '¡En este momento estoy buscando nuevas oportunidades!',
    aboutLineSeven: 'Puedes consultar más información sobre mí',
    here: 'aquí',
    // Projects
    projectTitle: 'Proyectos',
    illustrationTitle: 'Ilustraciones',
    pageNumber: 'Pagina Nº:',
    projectsType: 'Tipo de proyectos',
    personals: 'Personales',
    professionals: 'Profesionales',
    // Project
    myWebsite: 'Mi sitio Web',
    reactCounter: 'Contador React',
    description: 'Descripción',
    workplace: 'Lugar de trabajo',
    tools: 'Herramientas',
    team: 'Equipo',
    // Project Description
    desReactGroceryStore:
      'React Grocery Store es una aplicación que simula una tienda online. Entre los retos para este proyecto fue trabajar con redux toolkit para manejar los estados como la cantidad de los productos, lo que este agregado en el carrito, tener el total de lo que se ha agregado, como borrar el producto del carrito de compra y restaurar la cantidad cuando se regrese a la tienda. Otro reto fue cómo voy a manejar el cambio de temas para visualizar el light/dark theme para el proyecto. Para lograr esto tuve que trabajar en conjunto con Sass + redux toolkit + javascript. Considero un buen alcance sobre cómo pude usar flex y grids para evitar el media query. No digo que no sea necesario, pero si se tiene la oportunidad de no usarlo, hazlo. Lo que me gusto sobre el estilo del proyecto es ver cómo estas herramientas (grids y flex), ayudaron mucho en lo que visual se trata. Si necesitas un proyecto para practicar o adquirir nuevos conocimientos, este proyecto es bueno para dar ese primer paso.',
    descReactTables:
      'React tables es un proyecto construido con React.js(Vite), para obtener la informacion de un API usé React Query y para la construccion de la tabla usé Material UI. El objetivo del proyecto es la interacción de ambas tablas para seleccionar el elmento de la primera tabla y esta seleccion aparecera en la segunda tabla, y si se elimina el contenido de la segunda tabla se deseleccionara de la primera tabla. La intencion del proyecto era ver una manera distinta de trabajar con React y ver como poder mantener y actualizar la informacion en ambas tablas.',
    descCustomPagination:
      'Custom Pagination te muestra dos formas en las puedes trabajar la paginación en un proyecto, la primera paginación es custom, porque tu como desarrollador trabajas la lógica de cómo mostrar la cantidad de páginas que tendrá la vista, lo que te permite usarlo en cualquier proyecto con cualquier herramienta de interfaz de usuario si esta no posee una paginación, la segunda aprovechando que se está usando MUI, entre sus elementos posee una paginación y el proceso para agregarlo es más directo que el anterior. Lo que busco aquí es mostrar cómo ambas cosas pueden ser diferentes pero trabajan en un mismo fin. Lo que ambas tienen en común es que se necesita un useState para agregarlo en el link y asi la paginacion se va actualizando acorde al número que muestra.',
    descReactJSONView:
      'React JSON View Modified es un proyecto construido con React.js y el propósito es mostrar cómo se puede modificar el contenido de un JSON para que se vea menos como un código y más como un texto. Lo que se hizo fue jugar con el método .replace() para hacer visible los cambios. El proyecto muestra dos versiones, la primera es usando JSON.stringify() con el tag pre para mostrar la información como código JSON. La segunda se trabaja de la misma forma para mostrarlo con la diferencia de que este adicionalmente posee el método .replace(), en donde se remueven los corchetes, llaves y comillas de las keys. La idea del proyecto es mostrar cómo es posible de presentar la información de una manera distinta a la que estamos acostumbrados a ver y que sea un poco más amigable para el usuario común.',
    descAutocorrector:
      'Autocorrector (Tiny) es una aplicación web donde tú como usuario puedes agregar la palabra mal escrita y la palabra correcta. De esa manera, la aplicación en el área de texto una vez que escriba la palabra (mal escrita, como agregó anteriormente) cuando presione el botón de espacio, esto actualizará el contenido con la palabra correcta. Si desea agregar una palabra mal escrita y ya está agregada, la aplicación no le permitirá agregarla por ese motivo. También tendrás la lista de Correcciones para comprobar las palabras que tienes y puedes usar para hacer que el autocorrector funcione.',
    descMyWebsite:
      'Mi sitio web lo desarrollé con React.js y el principal proposito de para realizar esto, es para que todos vean que los proyectos que he realizado, bien sea de programación e ilustración, tambien espero mostrar los proyectos en donde he podido colaborar. Además de mostrar la información de los proyectos, compartiré el link para que puedan ver el proyecto en vivo y el repositorio para que puedan revisar como fue desarrollado. Espero seguir actualizando mi sitio web con más proyectos y tener la oportunidad de brindar apoyo en otros proyectos que me permitan conocer más personas y adquirir nuevas habilidades. También lo veo como una forma distinta para mostrar que estoy buscando nuevas oportunidades.',
    descGuitaReact:
      'GuitaReact es una aplicación web donde puede crear su lista de canciones agregando el nombre del artista/banda y el nombre de la canción, una vez que haya creado su lista de canciones, puede reproducirlas al azar. La versión uno (Random V1) mostrará su lista de canciones al azar (solo el nombre de la canción y el nombre del artista/banda). La versión dos (Random V2) tendrá la característica de Random V1 y además podrá reproducir el video o si prefiere la versión de la pista de acompañamiento del título de la canción de su lista. La versión tres (Random V3), tiene las mismas características que Random V2, la diferencia es que tendrás más opciones de video que puedes elegir. Si tocas cualquier instrumento o estás aprendiendo a tocar algún instrumento, esta aplicación web es para ti.',
    descEntreGrados:
      'Es el juego del ahorcado con el toque del web show EntreGrados de Youtube. La particularidad de este juego es que ademas de palabras puedes agregar frases, haciendo que el juego tenga un reto mayor, y si pierdes, bebes (Claro si eres mayor de edad). Y si bebes no conduzcas, Por favor! La idea es que tu y los tuyos pasen un buen rato. Un juego clasico renovado para mayores.',
    descCrema:
      'Es un video comercial que le realice a un tio mostrando la calidad de su producto. Las ilustraciones del video los hice con Adobe Illustrator, las animaciones use Adobe After Effects, para el voice over use mi voz y la union de todos los elementos para crear el video use Camtasia. Si tienen la oportunidad de probar los productos de La Baragüeña, se van a dar un banquete.',
    descMario:
      'Es una aplicación web donde puede iniciar sesión o registrarse y publicar notas. El proyecto original es de The Net Ninja (puedes encontrarlo en YouTube). El desafío aquí fue actualizar el proyecto usando Firebase / Firestore V3 y hacer que el proyecto funcione tan bien como la versión original (el proyecto original funciona con una versión anterior de Firebase / Firestore). El resultado es el mismo pero la configuración para hacer funcionar el proyecto con React.js cambió, por lo que funcionó para hacer este proyecto de esta manera, más gente sabrá cómo trabajar con esta nueva versión.',
    descReactLottie:
      'Este proyecto fue para un cliente que quería trasladar el diseño de photoshop a web. Además, el cliente quería que este proyecto fuera responsive, también quería agregar algo de animación de algunas imágenes, así que lo que hice fue tomar el diseño para recrear el sitio web con React.js y Bootstrap y tomé algunas imágenes e ilustre otras para construir las animaciones con Adobe After Effects. Usando Bodymovin pude traducir esas animaciones a React con Lottie. El resultado fue asombroso, y fue muy interesante cómo se pudo manejar diferentes cosas para juntarlas todas en el mismo proyecto. Realmente disfruté el resultado de este proyecto.',
    descReactCounter:
      'Este proyecto o estos proyectos a pesar de que el resultado final es el mismo, la forma de obtener el resultado es diferente. Lo que quería con este proyecto es mostrar cómo se puede construir un proyecto con otros marcos de interfaz de usuario o con otra forma de obtener los valores. Estos proyectos te lo mostrarán. El contador aumentará + 1, disminuirá -1, sumará + 10 y restará - 15. Si está comenzando a programar y tiene conocimientos de HTML, CSS y Javascript. El siguiente paso es este y la ventaja de aprender que puedes hacerlo con Redux, de esa manera estarás más seguro acerca de construir un gran proyecto o ser parte de uno. Consulten el repositorio o CodeSandBox, espero que esto les ayude.',
    descPingPong:
      'Este proyecto fue inspirado por el clasico pong, pero tratando de construir que lo haga diferente o que luzca como nuevo. Ping Pong What!? Tiene eso con monos. ¿Dije Monos? Bueno, si. Puedes jugarlo con un amigo y hacer una apuesta sana, en donde el perdedor lava los platos o invita la comida.',
    descOkiDoki:
      'Es es un juego rompecabeza dondeel jugador tiene que hacer unas tareas especificas para poder avanzar de nivel, pero para hacer esto el jugador tiene que se habilidoso, algunos consideran el juego facil, otros no tanto. ¿Que tipo de jugador eres tú? Este juego esta disponible para web y dispositivos Android. Haz tu mejor esfuerzo. ¡Buena suerte!',
    descVg4Kids:
      'Es una app donde los niños pueden construir su propia juego de plataforma en 2D. Los niños tienen la libertad de crear sus propios personajes, sus propios niveles e incluso agregar los visitantes en su juego. Se el constructor de tu propio juego.',
    // Navigation
    home: 'Inicio',
    about: 'Sobre Mi',
    project: 'Proyectos',
    resume: 'Resumen',
    changeTheme: 'Cambiar Tema',
    chooseYourVillage: 'Elige tu aldea',
    // Resume
    education: 'Educación',
    january: 'Enero',
    december: 'Diciembre',
    experience: 'Experiencia',
    devFrontend: 'Desarrollador Frontend',
    devGame: 'Desarrollador Juego',
    illustrator: 'Ilustrador',
    freelancer: 'Freelancer',
    technologies: 'Tecnologías',
    currently: 'Actualmente',
    systemEngineer: 'Ingeniero de Sistemas',
    // Professional Works
    asaiPreview:
      'Asai Gas es un proyecto que tiene como objetivo realizar la facturación automática, rápida y fácil.',
  },
};
