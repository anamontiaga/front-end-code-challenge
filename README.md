# Front-end code challenge

## Set up

1. `git clone` repo
2. `yarn`
3. `yarn start`

## Run tests

* To run component tests run `yarn test` on the project root.
* To run end2end tests run `yarn run cypress open` on the project root. Ensured that the baseUrl configured in the **`cypress.json`** matches the url of your local

## Demo


## Libraries/Tools used

* Airbnb + Prettier + React Eslint configurations
* Layouting with [styled-components](https://styled-components.com)
* Uses [sypress](https://www.cypress.io) for end2end testing
* Uses [react-testing-library](https://testing-library.com) for component testing
* Formating dates with [date-fns](https://date-fns.org)
* Basic router with [react-router-dom](https://reactrouter.com)
* Animation with [react-spring](https://react-spring.io)
* Double slider with [react-range](https://github.com/tajo/react-range)
* Deploy with gitHub Pages
* Validate data with PropTypes

## Requirements

## Optional goals

1. **Text inside first layer**. Comes as two props, a named title with a fact-check title ready for future action, and another called text to place text inside.
2. **Short layers**. Each section is wrapped by a DragContainer that manages the order and drag and drop the sections. The hardest part was not overlaying the slider event on the drag event.
3. **Timeline section**. I first tried to make a double thumb slider component manually, but eventually it didn't fit very well, so I looked into npm trends for a popular, documented and maintained component over time, and decided to use react-range. It allows to establish initial values and obtain the data of the chosen range. It is possible to capture both startData and endData values through lengendDates state whick is in the HOME.

## Mobile devices
https://user-images.githubusercontent.com/51995866/119395145-65faf900-bcd3-11eb-9b39-196c43134b67.mov



