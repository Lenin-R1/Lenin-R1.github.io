$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the GridtoggleGrid();
    //toggleGrid()

    // TODO 2 - Create Platforms
    createPlatform(900, 600, 200, 20, "black");
    createPlatform(500, 680, 300, 20, "black");
    createPlatform(500, 500, 250, 20, "black");
    createPlatform(200, 400, 300, 20, "black");
    createPlatform(600, 300, 300, 20, "black");
    createPlatform(900, 200, 100, 20, "black");
    createPlatform(1100, 200, 100, 20, "black");
    // TODO 3 - Create Collectables
    createCollectable("diamond", 900, 500, 1.5, 0.2);
    createCollectable("diamond", 200, 170, 1.5, 0.2);
    createCollectable("diamond", 600, 340, 1.5, 0,2);
    createCollectable("diamond", 1100, 100, 1.5, 0,2);
    createCollectable("diamond", 100, 100, 1.5, 0,2);
    // TODO 4 - Create Cannons
    createCannon("top", 500, 1000);
    createCannon("right", 400, 2000);
    createCannon("left", 500, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
