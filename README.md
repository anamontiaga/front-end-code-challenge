# Front-end code challenge

## Set up

1. `git clone` repo
2. `yarn`
3. `yarn start`

## Run tests

* To run component tests run `yarn test` on the project root.
* To run end2end tests run `yarn run cypress open` on the project root. Ensured that the baseUrl configured in the **`cypress.json`** matches the url of your local

**Note** 
End-to-end test has been applied to test the route that a user would take in the total of the home screen. Component tests have been applied to the Choropleth and Toolbar components.

## Demo 

The project can be seen in the following url hosted on GitHub Page:

https://anamontiaga.github.io/front-end-code-challenge

## Libraries/Tools used

* Airbnb + Prettier + React Eslint configurations
* Layouting with [styled-components](https://styled-components.com)
* Uses [cypress](https://www.cypress.io) for end2end testing
* Uses [cypress drag-and-drop pluggin](https://github.com/4teamwork/cypress-drag-drop) for test drag feature.
* Uses [react-testing-library](https://testing-library.com) for component testing
* Formating dates with [date-fns](https://date-fns.org)
* Basic router with [react-router-dom](https://reactrouter.com)
* Animation with [react-spring](https://react-spring.io)
* Double slider with [react-range](https://github.com/tajo/react-range)
* Deploy with gitHub Pages
* Validate data with PropTypes

## Requirements

* **Create 3 different legend item components** Create, on the one hand, the **`Accordion`** component, which in turn contains the **`Toolbar`** component. These accordions are rendered on the **`Home`** screen with four types of component content: **`Basic`**, **`Choropleth`**, **`Gradient`**, and **`Timeline`** components.
* **Create the toolbar component which contains 3 different buttons, each of them has a tooltip with a short name** Toolbar component created with the buttons that activate `onChangeVisibility` (to show / hide the content), `onChangeInfo` (to show a modal with the description) and `onChangeCollapse` (to expand / close the collapsible). A **`Tooltip`** component has also been created to display messages and a **`Modal`** component too to display description.
* **Take care of mobile devices** A demo on a mobile device can be seen in the video below.
* **Work closely with the design, try to implement it as accurately as possible**  The Figma designs and the established measures have been taken into account for a development that is as similar as possible.

## Optional goals

1. **Text inside first layer**. Comes as two props, a named title with a fact-check title ready for future action, and another called text to place text inside.
2. **Short layers**. Each section is wrapped by a DragContainer that manages the order and drag and drop the sections. The hardest part was not overlaying the slider event on the drag event.
3. **Timeline section**. I first tried to make a double thumb slider component manually, but eventually it didn't fit very well, so I looked into npm trends for a popular, documented and maintained component over time, and decided to use react-range. It allows to establish initial values and obtain the data of the chosen range. It is possible to capture both startData and endData values through lengendDates state which is in the HOME.

## Mobile devices

https://user-images.githubusercontent.com/51995866/119614584-bc188b00-bdfe-11eb-997e-911dc3593086.mov


## Structure

**src**
* [api/](./src/api)
  * [api.js](./src/api/api.js)
* [assets/](./src/assets)
  * [icons/](./src/assets/icons)
    * [arrow-down.svg](./src/assets/icons/arrow-down.svg)
    * [cross.svg](./src/assets/icons/cross.svg)
    * [drag-dots.svg](./src/assets/icons/drag-dots.svg)
    * [hide.svg](./src/assets/icons/hide.svg)
    * [info.svg](./src/assets/icons/info.svg)
    * [show.svg](./src/assets/icons/show.svg)
* [components/](./src/components)
  * [Accordion/](./src/components/Accordion)
    * [accordion.js](./src/components/Accordion/accordion.js)
    * [accordion.style.js](./src/components/Accordion/accordion.style.js)
  * [Basic/](./src/components/Basic)
    * [basic.js](./src/components/Basic/basic.js)
    * [basic.style.js](./src/components/Basic/basic.style.js)
  * [Choropleth/](./src/components/Choropleth)
    * [choropleth.js](./src/components/Choropleth/choropleth.js)
    * [choropleth.style.js](./src/components/Choropleth/choropleth.style.js)
    * [choropleth.test.js](./src/components/Choropleth/choropleth.test.js)
  * [Gradient/](./src/components/Gradient)
    * [gradient.js](./src/components/Gradient/gradient.js)
    * [gradient.style.js](./src/components/Gradient/gradient.style.js)
  * [Heading/](./src/components/Heading)
    * [heading.js](./src/components/Heading/heading.js)
    * [heading.style.js](./src/components/Heading/heading.style.js)
  * [Modal/](./src/components/Modal)
    * [modal.js](./src/components/Modal/modal.js)
    * [modal.style.js](./src/components/Modal/modal.style.js)
  * [Slider/](./src/components/Slider)
    * [slider.js](./src/components/Slider/slider.js)
    * [slider.style.js](./src/components/Slider/slider.style.js)
  * [Timeline/](./src/components/Timeline)
    * [timeline.js](./src/components/Timeline/timeline.js)
    * [timeline.style.js](./src/components/Timeline/timeline.style.js)
  * [Toolbar/](./src/components/Toolbar)
    * [toolbar.constants.js](./src/components/Toolbar/toolbar.constants.js)
    * [toolbar.js](./src/components/Toolbar/toolbar.js)
    * [toolbar.style.js](./src/components/Toolbar/toolbar.style.js)
    * [toolbar.test.js](./src/components/Toolbar/toolbar.test.js)
  * [Tooltip/](./src/components/Tooltip)
    * [tooltip.js](./src/components/Tooltip/tooltip.js)
    * [tooltip.style.js](./src/components/Tooltip/tooltip.style.js)
* [config/](./src/config)
  * [router/](./src/config/router)
    * [paths.js](./src/config/router/paths.js)
* [fonts/](./src/fonts)
  * [Lato-Regular.woff](./src/fonts/Lato-Regular.woff)
  * [OpenSans-Regular.woff](./src/fonts/OpenSans-Regular.woff)
* [screens/](./src/screens)
  * [Home/](./src/screens/Home)
    * [home.constants.js](./src/screens/Home/home.constants.js)
    * [home.js](./src/screens/Home/home.js)
    * [home.style.js](./src/screens/Home/home.style.js)
* [styles/](./src/styles)
  * [global.js](./src/styles/global.js)
  * [mediaqueries.js](./src/styles/mediaqueries.js)
  * [theme.js](./src/styles/theme.js)
* [App.js](./src/App.js)
* [index.css](./src/index.css)
* [index.js](./src/index.js)
