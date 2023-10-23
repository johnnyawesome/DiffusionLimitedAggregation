/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let walkers = [];
const walkerSize = 10;
const maxCurrentWalkers = 100;
const maxNumberOfFrozenWalkers = 1000;

function setup() {

  angleMode(DEGREES);
  createCanvas(650, 650, P2D);
  background(0);
  fill(0, 255, 0);
  noStroke();

  //Initialize the walkers
  initWalkers(maxCurrentWalkers);
}

function draw() {

  background(0);

  //Go through all walkers and...
  for (const walker of walkers) {
    //...calculate their new position...
    walker.calcNextPos();
    //...check if they get frozen...
    walker.freezeCheck();
    //...and finally display them
    walker.display();
  }

  //Adds a new walker when a walker gets frozen
  if (walkers.length < 1000) addNewWalkers();
}

//Initialize the walkers
function initWalkers(numOfWalkers) {

  for (let i = 0; i < numOfWalkers; i++) walkers.push(new RandomWalker());
}

//Adds a new walker when a walker gets frozen
function addNewWalkers() {

  const currentNumberOfFrozenWalkers = walkers.filter(w => !w.frozen).length
  if (currentNumberOfFrozenWalkers < maxCurrentWalkers
    && currentNumberOfFrozenWalkers < maxNumberOfFrozenWalkers) walkers.push(new RandomWalker());
}

//Resets the animation
function mouseClicked() {
  walkers = [];
  initWalkers(maxCurrentWalkers);
}