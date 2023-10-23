# Diffusion-Limited Aggregation 

[Diffusion-Limited Aggregation](https://en.wikipedia.org/wiki/Diffusion-limited_aggregation) written in P5JS

![DiffusionLimitedAggregationStatic](https://github.com/johnnyawesome/DiffusionLimitedAggregation/blob/main/DiffusionLimitedAggregation/DemoImages/DiffusionLimitedAggregation.gif?raw=true)

I also made a [3D-Version](https://github.com/johnnyawesome/DiffusionLimitedAggregation/blob/main/DiffusionLimitedAggregation3D/DemoImages/DiffusionLimitedAggregation3D.gif?raw=true) of the algo:

![DiffusionLimitedAggregationAnimated3D](https://github.com/johnnyawesome/DiffusionLimitedAggregation/blob/main/DiffusionLimitedAggregation3D/DemoImages/DiffusionLimitedAggregation3D.gif?raw=true)

Here's the 2D-Code code without displaying the [random walkers](https://en.wikipedia.org/wiki/Random_walk):

![DiffusionLimitedAggregationAnimated](https://github.com/johnnyawesome/DiffusionLimitedAggregation/blob/main/DiffusionLimitedAggregation/DemoImages/DiffusionLimitedAggregationJustGrowth.gif?raw=true)

Hers's a static image of one of the final structures you can achieve using my code:

![DiffusionLimitedAggregationAnimated](https://raw.githubusercontent.com/johnnyawesome/DiffusionLimitedAggregation/main/DiffusionLimitedAggregation/DemoImages/DiffusionLimitedAggregation.jpg)


## The Diffusion-Limited Aggregation Algorithm

The algorithm to build this [fractal-pattern](https://en.wikipedia.org/wiki/Fractal) is super simple! 🤩

In a Nutshell:

- Place a fixed point in the middle of the screen (or wherever you want)
- We call this fixed point "frozen"
- Generate a bunch of [random walkers](https://en.wikipedia.org/wiki/Random_walk) that randomly walk around the screen
  (Notice: The walkers in my code aren't entirely random, I used [perlin noise](https://en.wikipedia.org/wiki/Perlin_noise) to make the motion look more natural)
- If a random walker hits a frozen point, the walker itself gets frozen, too
- And that's all!

 So this entire image, with all it's branches and forks, *is created out of randomness*! That's super cool! 😎

 Sorry for the super bad framerate, but you can kind of see in the image below how the walkers walk randomly and then get stuck on the frozen center and slowly start building the [fractal](https://en.wikipedia.org/wiki/Fractal):

![DiffusionLimitedAggregationStatic](https://github.com/johnnyawesome/DiffusionLimitedAggregation/blob/main/DiffusionLimitedAggregation/DemoImages/DiffusionLimitedAggregation.gif?raw=true)

Enjoy!
