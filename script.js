
// --------------------------------------------------
// SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add fields for each scene, as relevant, to match your mockup
// 2) customize the scenes to fit your story
// 3) add any new fields to the function below
// --------------------------------------------------

// First, we create a variable for the current scene being displayed
let currentScene = "floor6";

// Then, we create an object that stores the data for each scene,
const scenes = {
  // See "backyard" for the first example
  floor6: {
    title: "Location: Floor 6",
    character: "Interviewee: you",
    text: "You are in your apartment and your friend is missing. Which floor do you want to search?",
    // you can choose how many choices to include
    // each choice can have text, an action, and/or nextScene
    choices: [
      {
        text: "Floor 1",
        action: function () {
        pickUpItem("friend's mail");
          updateTime(5);
        },
        nextScene: "floor1"
      },
      {
        text: "Floor 2",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor2"
      },
      {
        text: "Floor 3",
        action: function () {
          pickUpItem("friend's clothes");
          updateTime(5);
        },
        nextScene: "floor3"
      },
      {
        text: "Floor 4",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor4"
      },
      {
        text: "Floor 5",
        action: function () {
          pickUpItem("friend's food");
          updateTime(5);
        },
        nextScene: "floor5"
      },
    ]
  },

  floor1: {
    title: "Location: Floor 1",
    character: "Interviewee: Doorman",
    text: "The doorman says he hasn't seen your friend in over 24 hours, but gives you your friends mail. Where do you want to search next?",
    choices: [
       {
        text: "Floor 2",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor2"
      },
      {
        text: "Floor 3",
        action: function () {
          pickUpItem("friend's clothes");
          updateTime(5);
        },
        nextScene: "floor3"
      },
      {
        text: "Floor 4",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor4"
      },
      {
        text: "Floor 5",
        action: function () {
          pickUpItem("friend's food");
          updateTime(5);
        },
        nextScene: "floor5"
      },
      {
        text: "Floor 6",
        action: function () {
          updateTime(5);
          gobackhome();
        },
      }
    ]
  },

  floor2: {
    title: "Location: Floor 2",
    character: "Interviewee: Family",
    text: "The family says they don't know where your friend is. They seem pretty busy, where do you want to search?",
    choices: [
      {
        text: "Floor 1",
        action: function () {
        pickUpItem("friend's mail");
          updateTime(5);
        },
        nextScene: "floor1"
      },
      {
        text: "Floor 3",
        action: function () {
          pickUpItem("friend's clothes");
          updateTime(5);
        },
        nextScene: "floor3"
      },
      {
        text: "Floor 4",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor4"
      },
      {
        text: "Floor 5",
        action: function () {
          pickUpItem("friend's food");
          updateTime(5);
        },
        nextScene: "floor5"
      },
      {
        text: "Floor 6",
        action: function () {
          updateTime(5);
          gobackhome();
        },
      }
    ]
  },

   floor3: {
     title: "Location: Floor 3",
    character: "Interviewee: Couple",
    text: "The couple says they haven't seen your friend, but gives you a pile of her clothes that she left in the laundry room. Where to next?",
    choices: [
      {
        text: "Floor 1",
        action: function () {
        pickUpItem("friend's mail");
          updateTime(5);
        },
        nextScene: "floor1"
      },
      {
        text: "Floor 2",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor2"
      },
      
      {
        text: "Floor 4",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor4"
      },
      {
        text: "Floor 5",
        action: function () {
          pickUpItem("friend's food");
          updateTime(5);
        },
        nextScene: "floor5"
      },
      {
        text: "Floor 6",
        action: function () {
          updateTime(5);
          gobackhome();
        },
      }
    ]
  },

  floor4: {
     title: "Location: Floor 4",
    character: "Interviewee: Old man",
    text: "The old man is very grumpy and tells you to leave. Where do you search next?",
    choices: [
      {
        text: "Floor 1",
        action: function () {
        pickUpItem("friend's mail");
          updateTime(5);
        },
        nextScene: "floor1"
      },
      {
        text: "Floor 2",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor2"
      },
      
      {
        text: "Floor 3",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor3"
      },
      {
        text: "Floor 5",
        action: function () {
          pickUpItem("friend's food");
          updateTime(5);
        },
        nextScene: "floor5"
      },
      {
        text: "Floor 6",
        action: function () {
          updateTime(5);
          gobackhome();
        },
      }
    ]
  },
  floor5: {
     title: "Location: Floor 5",
    character: "Interviewee: Young woman",
    text: "The woman says your friends doordash order accidentally got dropped off at her place. She also says that she hasn't seen your friend since when they went to pilates this morning. What do you want to do next?",
    choices: [
      {
        text: "Floor 1",
        action: function () {
        pickUpItem("friend's mail");
          updateTime(5);
        },
        nextScene: "floor1"
      },
      {
        text: "Floor 2",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor2"
      },
      {
        text: "Floor 3",
        action: function () {
          pickUpItem("friend's clothes");
          updateTime(5);
        },
        nextScene: "floor3"
      },
      
      {
        text: "Floor 4",
        action: function () {
          updateTime(5);
        },
        nextScene: "floor4"
      },
      {
        text: "Floor 6",
        action: function () {
          updateTime(5);
          gobackhome();
        },
      }
    ]
  },

   solution: {
    title: "Location: Floor 6",
    text: "You go back to your apartment to drop off the food and find your friend taking a nap on the couch. You solved the mystery!",
    
  }
};

// --------------------------------------------------
// UPDATE SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add a new const variable for each new field you added above
// Make sure to match the ids used in your mock up with the fields 
// 2) set the .textContent of each variable to the corresponding field in the scene object
// Use sceneTitle as a model
// --------------------------------------------------

// First, we create variables to hold the references to the HTML elements
// Technically you could just use document.getElementById('id-name') 
// in the function itself, but that would be very wordy 
// and make the code harder to read
const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices-container");
const characterName = document.getElementById("character-name");

// Then, we create a function to update the scene,
function updateScene(sceneName) {

  //This update the variable currentScene with the new scene passed as a parameter
  currentScene = sceneName;

  //This accesses the scene object based on the scene name
  const scene = scenes[sceneName];

  // Here, for each html element, you change the textContent to match
  // the appropriate text from the scene object
  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  characterName.textContent = scene.character;

  // Clear the old buttons before creating new ones
  choicesContainer.innerHTML = "";

  // Loop through each choice in the scene, connecting an action and nextScene if included
  scene.choices.forEach(function (choice) {
    const button = document.createElement("button");

    button.textContent = choice.text;

    button.addEventListener("click", function () {
      if (choice.action) {
        choice.action();
      }

      if (choice.nextScene) {
        updateScene(choice.nextScene);
      }
    });

    choicesContainer.appendChild(button);
  });
}

// This updates the screen with the current scene
updateScene(currentScene);


// --------------------------------------------------
// HEALTH
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// Either customize the name from health to steps, stress, etc...
// OR
// create a copy of each step for each additional state you want to track throughout the game
// --------------------------------------------------

// Create a variable for health
let timeSpent = 0;

// Display current health
const timeDisplay = document.getElementById("time-display");

// Create a function to update health 
function updateTime(amount) {
  timeSpent += amount;
  timeDisplay.textContent = timeSpent;
}

// This refreshes the health display
updateTime(0);

// --------------------------------------------------
// INVENTORY
// Read through the comments below to see what this section does
//
// For now, you are probably leaving this section as is. 
// --------------------------------------------------

// Create a variable for inventory
let inventory = [];

// Display current inventory
const inventoryDisplay = document.querySelector("#inventory-display");
const messageDisplay = document.getElementById("message-display");

// Create a function to update inventory 
function pickUpItem(itemName) {
    // Add itemName to the inventory array
    // Show the updated inventory on the page
  inventory.push(itemName);
  inventoryDisplay.textContent = inventory.join(", ");
}

// --------------------------------------------------
// CONDITIONAL 
// Depending on how you want to implement the conditional logic, you may 
// simply adjust the names below or you may need to expand upon this section
// --------------------------------------------------

// Create a function that checks if the inventory contains one item and if so shows the win condition scene.
function gobackhome() {
  if (inventory.includes("friend's food")) {
    messageDisplay.textContent = "You win";

    updateScene("solution");
  } else { 
    messageDisplay.textContent = "Cant go back home yet";
  }
}
