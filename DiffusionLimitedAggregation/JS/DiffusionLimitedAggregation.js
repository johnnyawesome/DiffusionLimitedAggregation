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
  initWalkers(maxCurrentWalkers);
}

function draw() {

  background(0);

  for (const walker of walkers) {
    walker.calcNextPos();
    walker.freezeCheck();
    walker.display();
  }

  if (walkers.length < 1000) addNewWalkers();
}

function initWalkers(numOfWalkers) {

  for (let i = 0; i < numOfWalkers; i++) walkers.push(new RandomWalker());
}

function addNewWalkers() {

  const currentNumberOfFrozenWalkers = walkers.filter(w => !w.frozen).length
  if (currentNumberOfFrozenWalkers < maxCurrentWalkers
    && currentNumberOfFrozenWalkers < maxNumberOfFrozenWalkers) walkers.push(new RandomWalker());
}

function mouseClicked() {
  walkers = [];
  initWalkers(maxCurrentWalkers);
}