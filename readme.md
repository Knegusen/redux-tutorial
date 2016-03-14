# Introduction

I am a fan of test driven development (TDD). I am a fan of React. I wanted to find a framework that made dealing with states easier.

I heard a lot about redux and wanted to go trough Dan Abramovs tutorial, [Egghead - Redux tutorial](https://egghead.io/series/getting-started-with-redux), using TDD.
 
## How to use this

Each commit corresponds to one episode with the same message as that episodes title. 
There are tests written to each new feature in every commit.

To make it easier to write tests i have not used a single js-file. I have instead extracted some functionality a little bit too early that was intended by Dan in to own files, but it's pretty straight forward what i have done.

## Tips and tricks

If you haven't used [wallaby.js](http://wallabyjs.com/), do it! Its an amazing tool if you want to get fast feedback in real time when writing unit tests for javascript.

## Getting started

### Clone repo

```git clone https://github.com/Knegusen/redux-tutorial.git```

### Install dependencies

Execute:

```$ npm install```

### Start server

Run the following command to enable React Hot Reloading:

```$ npm start```

It will start a minimal webpack-dev-server that listens for changes in your react components.

### Tests

#### Terminal

```$ npm test```

##### IDEA

Configure Wallaby for one of the supported IDEAs.

##### Configure Wallaby in Intellij

Open:

```
Run -> Edit Configurations..
```

Then add new configuration by clicking ```+```, name it Wallaby, and browse for the ```wallaby.js``` file that resides in the root directory of the repository.