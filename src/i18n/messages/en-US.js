import { LOCALES } from '../locales';

export default {
  [LOCALES.ENGLISH]: {
    // Dashboard
    hi: "Hi! I'm looking for new opportunities!",
    profession: 'Software Developer and more!',
    checkMoreAboutMe: 'Check more about me!',
    // About Me
    aboutMe: 'About me',
    aboutSub:
      'Software Developer • Frontend Developer • Illustrator • and more',
    aboutLineOne: 'Hi everyone! My name is  ',
    name: 'Alonso Parra',
    aboutLineOneNext:
      "I'm a System Engineer who enjoy creating projects and learning new stuff.",
    aboutLineTwo: 'I had the honor of getting my degree at',
    college: 'Universidad de los Andes',
    aboutLineTwoNext:
      'Being there I could see so many things that helped me more about the routes I could take mixing developing, designing and other things that could be a plus on any project.',
    aboutLineThree: 'My technical interests are',
    frontend: 'Frontend Development',
    mobile: 'Mobile Development',
    illustration: 'Illustration',
    and: 'and',
    game: 'Game Development',
    aboutLineThreeNext: 'The most experience that I have with',
    javascript: 'Javascript',
    aboutLineThreeNextOne: "it's been developing with",
    react: 'React.js',
    with: 'with',
    csharp: 'C#',
    developing: 'developing with',
    unity: 'Unity',
    for: 'For',
    illustrations: 'illustrations',
    work: 'I work with',
    ai: 'Adobe Illustrator',
    aboutLineThreeNextTwo: 'The next steps I want to follow is learning about',
    native: 'React Native',
    try: 'for mobile development and',
    nextjs: 'Next.js',
    toKnowFramework:
      'to learn from this framework and about the server side working on a project.',
    whyNot:
      'to get a better understaing how to work front-end and learning back-end in the same project',
    live: 'I currently living in',
    vzla: 'Venezuela',
    aboutLineFour:
      'In my spare time, I like playing guitar, watch series, movies and play videogames.',
    aboutLineFive: 'Feel free to check my',
    projects: 'projects',
    aboutLineFiveOne:
      'that I enjoyed to built and learnt so much on the process of create them.',
    aboutLineSix: "At this moment I'm looking for new opportunities!",
    aboutLineSeven: 'You can check more info about me',
    here: 'here',
    // Projects
    projectTitle: 'Projects',
    illustrationTitle: 'Illustrations',
    pageNumber: 'Page Nº:',
    projectsType: `Projects's type`,
    personals: 'Personals',
    professionals: 'Professionals',
    // Project
    myWebsite: 'My Website',
    reactCounter: 'React Counter',
    description: 'Description',
    workplace: 'Workplace',
    tools: 'Tools',
    team: 'Team',
    // Project Description
    desReactGroceryStore: `React Grocery Store is an app simulation of an online store. One of the challenges here was to work with redux toolkit to handle the states of the store like have the quantity of products, what I got in the cart, having the total that you added, how delete a product from the cart and how to restore(update) the quantity of the product you deleted on the cart get them back to the store. Another challenge here was how I'm going to handle the change of theme to get a light/dark theme for the project. For this it was a mix to have the final result with sass + redux toolkit + javascript. I considered a good approach on how I could use flex and grid to avoid the media query. I'm not saying that they are not necessary, but if you have the opportunity to work without it, do it. What I like about the style is watching how I could work on a project with these two tools (grids and flex), they are going to help you a lot. If you need a project practice or get new knowledge this one is a good first step.`,
    descReactTables:
      'React tables is a project built with React.js(Vite), to obtain the information from an API I used React Query and to build the table I used Material UI. The objective of the project is the interaction of both tables, you can  select a element of the first table and this selection will appear in the second table, and if the content of the second table is deleted, it will be deselected from the first table. The intention of the project was to check a different way of working with React and to see how to maintain and update the information in both tables.',
    descCustomPagination:
      'Custom Pagination shows you two ways in which you can work the pagination in a project, the first pagination is custom, because you as a developer work the logic of how to show the number of pages that the view will have, which allows you to use it in any project with any user interface tool if it does not have a pagination, the second one, taking advantage of the fact that MUI is being used, has a pagination among its elements and the process to add it is more direct than the previous one. What I am looking for here is to show how both things can be different but work towards the same end. What both have in common is that a useState is needed to add it to the link and thus the pagination is updated according to the number it shows.',
    descReactJSONView:
      'React JSON View Modified is a project built with React.js and the purpose is to show how you can modify the content of a JSON so that it looks less like code and more like text. What was done was to play with the .replace() method to make the changes visible. The project shows two versions, the first is using JSON.stringify() with the pre tag to display the information as JSON code. The second one works in the same way to show it with the difference that it additionally has the .replace() method, where the brackets, braces and quotes are removed from the keys. The idea of the project is to show how it is possible to present the information in a different way than what we are used to seeing and that is a little more friendly for the common user.',
    descAutocorrector:
      "Autocorrector (Tiny) is a web application where you as an user you can add the misspelled word and the right word. That way the application on the textarea once you write the word (misspelled, as you added previously) when you press the space button this will update the content with the right word. If you want to add a misspelled word and it is already added, the application won't let you add it for that reason. Also you will have the Correction's list to check the words you have and you can use to make the autocorrector works.",
    descMyWebsite:
      'I developed my website with React.js and the main purpose of doing this is so that everyone can see that the projects I have done, either programming and illustration, I also hope to show the projects where I have been able to collaborate. In addition to showing the information of the projects, I will share the link so that you can see the project live and the repository so that you can review how it was developed. I hope to keep updating my website with more projects and have the opportunity to provide support in other projects that allow me to meet more people and acquire new skills. I also see it as a different way to show that I am looking for new opportunities.',
    descGuitaReact:
      "GuitaReact is a web app where you can create your song list adding the artist/band name and the song's name, once you have your song list created you can play them randomly. The version one (Random V1) will show show your song list randomly (only song's name and the artist/band name). The version two (Random V2), will have the feature of the Random V1 plus you can play the video or if your prefer the backing track version of the song title from your list. The version three (Random V3), it has the same features than the Random V2 the difference is that you will have more options of video that you can pick. If you play any instrument or you are learning to play some instrument, this web app is for you.",
    descEntreGrados:
      "This is the hangman but with the web show style of EntreGrados from Youtube. You can add a word or a phrase, making the game a challenge to find out what's the clue, and if you loose, you have to drink (If you are 18+ of course). And if you're drinking, don't drive please! The entire idea is having fun, but taking care each other. It's a classic game renewed to olders",
    descCrema:
      'It is a commercial video that I built for my uncle showing the quality of his product. The illustrations for the commercial I used Adobe Illustrator, the animations I used Adobe After Effects, the voice over I used my own voice and put all these elements together with Camtasia. If you have the opportunity, give a shot with La Baragüeña products, you will get amazed!',
    descMario:
      "It is a web app where you can sign in or sign up and post notes. The original project it's from The Net Ninja (You can find him on YouTube). The Challenge here was update the project using Firebase/Firestore V3 and make the project works as well like the original version (The original project works with a previous version of Firebase/Firestore). The result is the same but the configuration to make work the project with React.js it changed, so it worked to do this project on this way, more people know will how to work with this new version.",
    descReactLottie:
      'This project was for a client who wanted to move the design from photoshop to web. Besides the client wanted this project responsive, wanted also added some animation from some images, so what I did was take the design to recreate the website with React.js and Bootstrap and I took some images and illustrate other ones to build the animations with Adobe After Effects. Using Bodymovin I could translate those animation to React with Lottie. The result was amazing, and it was very interesting how I could handled differents things to put all of them together on the same project. I really enjoyed the result of this project.',
    descReactCounter:
      'This project or These projects despite the final result is the same the way to get the result is different. What I wanted with this project is to show how you can build a project with others UI frameworks or with other way to get the values. These projects will show you that. The counter will increment + 1, decrement -1, add + 10 and subtract - 15. If you are starting programming and you have knowledge of HTML, CSS and Javascript. The next step is this and the plus of learning you can do it with Redux, that way you will be more secure about build a big project or be part of one. Check the repository or CodeSandBox, I hope this helps you.',
    descPingPong:
      'This project was inspired on the classic pong, but trying to built something that makes it different or new. Ping Pong What!? has that with monkeys. Did I say monkeys? Well, yes. You can play it with a friends of yours and make a sane bet, that way the looser will wash the dishes or buy the dinner.',
    descOkiDoki:
      'This is a Puzzle game where the player has to do specific tasks to advance the next level, but to do this have be clever, some people considerate an easy game other ones not so much. What kind the player you are? This game is able on web and Android devices. Do your best. Good Luck!',
    descVg4Kids:
      'It is an app where children can build their own 2D platform game. The children have the liberty to create their own character, their own levels and also can pick the visitors on their game. Be a Builder of your own game.',
    // Navigation
    home: 'Home',
    about: 'About',
    project: 'Projects',
    resume: 'Resume',
    changeTheme: 'Change Theme',
    chooseYourVillage: 'Choose your Village',
    // Resume
    education: 'Education',
    january: 'January',
    december: 'December',
    experience: 'Experience',
    devFrontend: 'Front-End Developer',
    devGame: 'Game Developer',
    illustrator: 'Illustrator',
    freelancer: 'Freelancer',
    technologies: 'Technologies',
    currently: 'Currently',
    systemEngineer: 'System Engineer',
    // Professional Works
    // Description Project
    asaiPreview:
      "Asai Gas is a project that its goal is to do automatic billing, faster and easier. From the Asai Gas's mobile app, get gas station bill instantly with artificial intelligence.",
  },
};
