/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

const inherit = (parent, child) =>
  (parent.prototype = Object.create(child.prototype));

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(obj) {
  this.createdAt = obj.createdAt;
  this.name = obj.name;
  this.dimensions = obj.dimensions;
}

// destroy() prototype function
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// Constructor
function CharacterStats(obj) {
  GameObject.call(this, obj);
  this.healthPoints = obj.healthPoints;
}

// CharacterStats.prototype = Object.create(GameObject.prototype);
inherit(CharacterStats, GameObject);

// takeDamage() prototype function
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
};

console.log(
  CharacterStats.prototype.takeDamage,
  CharacterStats.prototype.destroy,
  CharacterStats
);

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

// Constructor
function Humanoid(obj) {
  CharacterStats.call(this, obj);
  this.createdAt = obj.createdAt;
  this.dimensions = obj.dimensions;
  this.healthPoints = obj.healthPoints;
  this.name = obj.name;
  this.team = obj.team;
  this.weapons = obj.weapons;
  this.language = obj.language;
  this.identity = obj.identity;
  this.alignment = obj.alignment;
}

// Humanoid.prototype = Object.create(CharacterStats.prototype);
inherit(Humanoid, CharacterStats);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

// Analyze target obj (Character)
Humanoid.prototype.analyze = function(target) {
  // Determine target outcome

  // Varying factors that are considered.
  const team = target.team;
  const language = target.language;
  const weapons = target.weapons;
  const hp = target.healthPoints;

  // Alignments
  const alignment = target.alignment;

  // "Mage Guild"
  // "The Round Table"
  // "Forest Kingdom"

  // Preferences
  const pref = this.team;

  // Possible new traits
  // "Declared alignment" (Enemy / Allied)
  
  const possibleAlignmentTrait = undefined;
};

console.log(Humanoid.prototype);

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue",
  identity: undefined,
  alignment: undefined
});
// console.log(mage.bind(GameObject))

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue",
  identity: undefined,
  alignment: undefined
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish",
  identity: undefined,
  alignment: undefined
});

console.log(mage.language !== archer.language);

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
function Hero(objAttr) {
  // Constructor

  // base new bindings
  this.baseMultiplier = objAttr.baseMultiplier;

  // Exclusive new bindings
  this.defender = objAttr.defender;
}
function Villain(objAttr) {
  // Constructor

  // base new bindings
  this.baseMultiplier = objAttr.baseMultiplier;

  // Exclusive new bindings
  this.surpriseAttack = objAttr.surpriseAttack;
}

// Base setup later.
// Create some validation for identifying who gets hero / villain inheritance of their traits

inherit(Hero, Humanoid);
inherit(Villain, Humanoid);

console.log(Hero);
console.log(Villain);
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// const obj = Object.freeze();
