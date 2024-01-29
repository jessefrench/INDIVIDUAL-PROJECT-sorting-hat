const houses = [
  {
    id: 1,
    name: "Gryffindor",
    colors: "Red & Gold",
    crest: "images/gryffindor-crest.png"
  },
  {
    id: 2,
    name: "Hufflepuff",
    colors: "Yellow & Black",
    crest: "images/hufflepuff-crest.png"
  },
  {
    id: 3,
    name: "Ravenclaw",
    colors: "Blue & Bronze",
    crest: "images/ravenclaw-crest.png"
  },
  {
    id: 4,
    name: "Slytherin",
    colors: "Green & Silver",
    crest: "images/slytherin-crest.png"
  }
]

// ******************** //
// ****** CREATE ****** //
// ******************** //

// target the form on the DOM
const form = document.querySelector("form");

// create empty array to store new students
const students = [];

// create empty array to store expelled students
const voldermortsArmy = [];

// create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new student
const addNewStudent = (e) => {
  e.preventDefault(); // EVERY TIME YOU CREATE A FORM

  // create a function to generate a random house
  function getRandomHouse() {
    const randomIndex = Math.floor(Math.random() * houses.length);
    const randomHouse = houses[randomIndex];
    return {
      name: randomHouse.name,
      crest: randomHouse.crest
    };
  }

  // store random house function as a variable
  const randomHouse = getRandomHouse();

  // new student object
  const newStudent = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: randomHouse.name,
    crest: randomHouse.crest
  }

  students.push(newStudent);
  cardsOnDom(students);
  form.reset();
}

// add an event listener for the form submit and pass it the function
form.addEventListener("submit", addNewStudent);

// ******************** //
// ******* READ ******* //
// ******************** //

// render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

// get the cards on the DOM
const cardsOnDom = (students) => {
  let domString = "";
  domString += `
    <div class="row text-center">
      <div class="col" id="first-years">
        <h5>First Years</h5>
      </div>
      <div class="col" id="voldermorts-army">
        <h5>Voldermort's Army</h5>
      </div>
    </div>
  `;
  for (const student of students) {
    domString += `
      <div class="card mb-3" style="max-width: 325px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${student.crest}" class="img-fluid rounded-start" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.house}</p>
              <button type="button" class="btn btn-danger" id="expel--${student.id}">EXPEL</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  renderToDom("#app", domString);
}

// target house buttons on the DOM
const allBtn = document.querySelector("#all");
const gryffindorBtn = document.querySelector("#gryffindor");
const hufflepuffBtn = document.querySelector("#hufflepuff");
const ravenclawBtn = document.querySelector("#ravenclaw");
const slytherinBtn = document.querySelector("#slytherin");

// add click events to filter students by house
allBtn.addEventListener("click", (e) => {
  cardsOnDom(students);
});

gryffindorBtn.addEventListener("click", (e) => {
  if (e.target.id.includes("gryffindor")) {
    const gryffindorStudents = students.filter((student) => student.house === "Gryffindor");
    cardsOnDom(gryffindorStudents);
  }
});

hufflepuffBtn.addEventListener("click", (e) => {
  if (e.target.id.includes("hufflepuff")) {
    const hufflepuffStudents = students.filter((student) => student.house === "Hufflepuff");
    cardsOnDom(hufflepuffStudents);
  }
});

ravenclawBtn.addEventListener("click", (e) => {
  if (e.target.id.includes("ravenclaw")) {
    const ravenclawStudents = students.filter((student) => student.house === "Ravenclaw");
    cardsOnDom(ravenclawStudents);
  }
});

slytherinBtn.addEventListener("click", (e) => {
  if (e.target.id.includes("slytherin")) {
    const slytherinStudents = students.filter((student) => student.house === "Slytherin");
    cardsOnDom(slytherinStudents);
  }
});

// ******************** //
// ****** DELETE ****** //
// ******************** //

// target the app div
const app = document.querySelector("#app");

// add an event listener to capture clicks
app.addEventListener("click", (e) => {

  // check e.target.id includes "expel"
  if (e.target.id.includes("expel")) {

    // destructure and split at "--"
    const [, id] = e.target.id.split("--");

    // .findIndex() returns index of first element that meets condition
    const index = students.findIndex(student => student.id === Number(id));

    // .splice() modifies the original array
    const expelledStudent = students.splice(index, 1)

    // place expelled students in voldermortsArmy array
    voldermortsArmy.push(expelledStudent);

    // repaint the DOM with the updated array
    cardsOnDom(students);
  }
});

// render dynamically generated HTML
const startApp = () => {
  cardsOnDom(students);
}

startApp();
