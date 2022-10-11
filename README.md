# PokéFave

What's your favorite Pokémon?

## Wireframe & Component Composition

![See text for explanation](https://github.com/jefgodesky/pokefave/blob/main/wireframe.png?raw=true)

Here's a wireframe of what we're trying to build.

* `App` is our only container component (a.k.a.
  , “smart” component), meaning that it’s 
  responsible for handling our application 
  state (_see_ **State** below).
  * When `App` mounts, it’s going to call our 
    `getPokemon` method. This method checks 
    local storage first, but if it can’t find 
    any Pokémon there, it checks the PokéAPI 
    for a listing, saves that listing to local 
    storage for next time, and then sets the 
    state.
  * It lists three `Tab` components which 
    allow users to sort the list in ascending 
    order by Pokédex, in alphabetical order by 
    name, or filter the list to just their 
    favorites. Each of these is done by the 
    `App` component by passing a method to its 
    `Tab` children, which they call when 
    they’re clicked.
  * It lists all of the Pokémon in state as 
    `Pokemon` components, passing a `PokeData` 
    object to each one. It passes a method to 
    each `Pokemon` component that it can call 
    when a user favorites it, so that `App` 
    can update the state.
* `Tab` is a presentational component that  
  presents options for how to order our 
  Pokémon. Clicking on it calls a method given 
  to it by the `App` component that changes that 
  component’s `sortOrder` state variable.
* `Pokemon` is a presentational component that 
  displays a particular Pokémon. It renders an 
  image, its name, a `PokemonTypeIcon` component 
  for each of the Pokémon's types, and a `Fave` 
  component. This component renders a wrapper 
  with the Pokémon's first type as a class, so 
  that CSS can render it with the appropriate 
  color (y’know, like a Pokémon card would be).
* `PokemonTypeIcon` is a presentational component 
  that displays the icon for the Pokémon type 
  that it's given.
* `Fave` is a presentational component. It 
  displays a grayed-out star if this isn't one 
  of your favorite Pokémon, or a gold star if 
  it is. Clicking on it calls a method passed 
  down from the `App` component which toggles the 
  Pokémon's favorite status.

### State

State is managed exclusively by the `App` type,
though it does pass methods to its children 
that prompt it to make changes in response to 
user interaction.

Variable | Type | Description
--- | --- | ---
`pokemon` | `PokeData[]` | This is an array of `PokeData` objects that detail all of the Pokémon that the system knows about, including whether or not it’s one of your favorites.
`sortOrder` | `string` | This can be `pokedex` (meaning the `pokemon` array should be sorted in ascending numerical order by Pokédex number), `name` (meaning the `pokemon` array should be sorted in alphabetical order by name), or `faves` (meaning that the `pokemon` array should be sorted in alphabetical order by name but also filtered to just your favorites). (Default: `pokedex`)

### Data Handling

We’ll want to write some methods to handle 
data to make things a little simpler in our 
React components. The PokéAPI’s Fair Use 
Policy requires that we cache resources 
whenever we request them, so we’ll be leaning 
heavily on local storage for that. This also 
gives us a degree of persistence (but don’t 
count on it too much).

#### `getPokemon`

This method will be called by the `App` 
component when it loads. It will check local 
storage first, but if it can’t find any 
Pokémon there, it will send a request to the 
PokéAPI. This will supply us with names and 
Pokédex numbers for all of our Pokémon in a 
request, which this method will transform into 
an array of `PokeData` objects, save to local 
storage, and then return.

#### `fetchPokemon`

This method will be called by our `Pokemon` 
components, but only when they are visible to 
the user. Our `PokeData` objects will be 
tracking a `loaded` boolean to know if we’ve 
already asked the PokéAPI for more detailed 
information about this Pokémon, but if not, 
we’ll make a request. This will provide our 
`PokeData` objects with a URL to the official 
artwork and an array of types for our Pokémon.

#### `savePokemon`

This is a method that will save our array of 
`PokeData` objects to local storage. It’s dead 
simple, but we’ll have to call it in several 
different places, so we’ll want to keep it in 
one place.

## Available Scripts

In the project directory, you can run:

### `npm start`

Compiles Sass into CSS and then runs the app 
in development mode. Open 
[http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You 
will also see any lint errors in the console.

### `npm test`

Lints code to Standard TS and then launches the 
test runner in the interactive watch mode.

### `npm run dev`

Runs the app in development mode. Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You
will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` 
folder. It correctly bundles React in production mode 
and optimizes the build for the best performance. The build is minified and the filenames 
include the hashes. Your app is ready to be deployed!

### `npm run jest`

Launches the test runner in the interactive watch mode.

### `npm run lint`

Lints code to Standard TS and reports errors.

### `npm run lint-fix`

Lints code to Standard TS, fixes what problems 
it can, and reports what it can't.

### `npm run sass`

Compiles Sass into CSS.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
