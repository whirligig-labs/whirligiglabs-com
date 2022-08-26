---
title: Forking react-native-boring-avatars
publishDate: 30 Aug 2022
description: The open source community is amazing. However, sometimes you need to take things into your own hands.
---

Boring Avatars is a really cool library for creating placeholder images. It is programmatic and deterministic so the same string always creates the same image. It happens to be React specific but I needed it in a React Native app. It turns out that there was an existing library to get things into React Native.

### The Problem

The native library relies on react-native-svg. This is fine usually but it posed a problem for the library I was using. It used hardcoded values and a hardcoded base width and height.

In a web environment, this would not be an issue because the SVG would get scaled as expected and vector graphics are fine with that.

In the native case, though, the svg library uses the viewbox to create the image and then rasterizes the image at the size of the viewbox. This meant that the images were scaled as if they were 36 pixels across. This caused a lot of pixellization.

## Time to Fork

The library actually had an Issue for this exact bug. The biggest concern was the fact that the issue is over a year old and the library hasn't been touched in longer than that.

We needed this thing to work for Mealection, so it was time to fork it.

## The Process

Since most of the themes involved a BASE viewbox size, the first step was to create some utility functions that could transform other values in the components based on the BASE size.

Most of the components were easy. The trickiest was the BEAM component. It involved several values that needed to be scaled and a couple that actaally didn't need to be scaled. So, it took a bit of trial and error, but we got there.

## To PR or not to PR

In the process of making my changes, we altered a bunch of the build processes and dependencies. It just made sense to release the project under the whirligig namespace.

## Wrapping Up

We hope you can find this post useful and we also hope you might find our port of `react-native-boring-avatars` useful.
