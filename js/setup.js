function setup() {
  textFont(myFont);
  //textSize(40);
  textSize(25);
  textAlign(CENTER);
  noCursor();

  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 1500; i++) {
    allWorms.push(new Worm(random(width), random(height)));
  }

  conv0 = new Conversation([new Passcode()]);
  conv1 = new Conversation([
    new TXT("Hello", 60),
    new TXT("I'm Evelyn", 70),
    new TXT("I'm a programmer and a game developer", 120),
    //new TXT("Press [enter] to continue to my website", 250),
  ]);
  navs = [
    new Nav("MY PROJECTS", width * 0.3, height * 0.1, true),
    new Nav("CV", width * 0.5, height * 0.1),
    new Nav("CONTACT ME", width * 0.7, height * 0.1),
  ];

  projsX = width * 0.2;
  projs = [
    new Link(
      "Random Island Generator",
      "http://random",
      projsX,
      height * 0.25,
      true
    ),
    new Link("Terraria Inspired Game", "http://random", projsX, height * 0.4),
    new Link("Maze Generator & Solver", "http://random", projsX, height * 0.55),
    new Link("Evolution of Video Games", "http://random", projsX, height * 0.7),
    new Link("Pixel Art Workshop 2020", "http://random", projsX, height * 0.85),
  ];

  projX = width * 0.53;
  proj0 = [
    new Desc("Overview", projX, height * 0.25, 25),
    new Desc(
      "Random Island Generator is a Procedural Content",
      projX,
      height * 0.3
    ),
    new Desc(
      "Generation algorithm that outputs natural-looking",
      projX,
      height * 0.35
    ),
    new Desc(
      "game environments. The algorithm is designed to",
      projX,
      height * 0.4
    ),
    new Desc("generate flexible and customizable maps.", projX, height * 0.45),
    new Button(
      "View Project",
      "https://github.com/zhixuanevelynwu/random_island_generator"
    ),
  ];

  proj1 = [
    new Desc("Overview", projX, height * 0.25, 25),
    new Desc(
      "This is an open-world game inspired by Terraria. ",
      projX,
      height * 0.3
    ),
    new Desc(
      "In the game, you can collect materials, craft ",
      projX,
      height * 0.35
    ),
    new Desc(
      "furnitures, and interact with different items.",
      projX,
      height * 0.4
    ),
    new Desc(
      "A complete walkthrough of the game can be found",
      projX,
      height * 0.45
    ),
    new Desc("below.", projX, height * 0.5),
    new Button(
      "View Project",
      "https://drive.google.com/file/d/14A3ED_Bb8Y9gSPYR-Q-LoUoXUU_xSChf/view?usp=sharing"
    ),
  ];

  proj2 = [
    new Desc("Overview", projX, height * 0.25, 25),
    new Desc(
      "This is a random maze generator & maze solver",
      projX,
      height * 0.3
    ),
    new Desc(
      "that is implemented using various maze generation",
      projX,
      height * 0.35
    ),
    new Desc(
      "algorithms including Sidewinder, Aldous-Broder,",
      projX,
      height * 0.4
    ),
    new Desc("Random Walk, etc.", projX, height * 0.45),
    new Button(
      "View Project",
      "https://github.com/zhixuanevelynwu/maze_generator"
    ),
  ];

  proj3 = [
    new Desc("Overview", projX, height * 0.25, 25),
    new Desc(
      "This is a story-telling visualization system of ",
      projX,
      height * 0.3
    ),
    new Desc(
      "the history of worldwide video games. It includes",
      projX,
      height * 0.35
    ),
    new Desc(
      "up to three views and supports linked highlighting",
      projX,
      height * 0.4
    ),
    new Desc("and filters.", projX, height * 0.45),
    new Button(
      "View Project",
      "https://github.com/zhixuanevelynwu/game-evolution-datavis"
    ),
  ];

  proj4 = [
    new Desc("Overview", projX, height * 0.25, 25),
    new Desc(
      "Pixel Art Workshop is a website for users to ",
      projX,
      height * 0.3
    ),
    new Desc(
      "create pixel arts. It supports login, saving, ",
      projX,
      height * 0.35
    ),
    new Desc("and cross-device saving features.", projX, height * 0.4),
    new Button(
      "View Project",
      "https://github.com/zhixuanevelynwu/pixel_workshop"
    ),
  ];

  passcode = new Passcode();

  contacts = [new TXT("Email: zw1887@nyu.edu")];

  footer = new Footer(
    "Evelyn Wu 2021",
    100,
    width / 2,
    height * 0.93,
    false,
    20
  );
}
