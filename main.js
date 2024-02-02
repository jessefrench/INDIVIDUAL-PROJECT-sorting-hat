/////////////////////////// DATA ///////////////////////////

const houses = [
  {
    id: 1,
    name: "Gryffindor",
    crest: "images/gryffindor-crest.png"
  },
  {
    id: 2,
    name: "Hufflepuff",
    crest: "images/hufflepuff-crest.png"
  },
  {
    id: 3,
    name: "Ravenclaw",
    crest: "images/ravenclaw-crest.png"
  },
  {
    id: 4,
    name: "Slytherin",
    crest: "images/slytherin-crest.png"
  }
]

const students = [];
const voldemortsArmy = [];

/////////////////////////// DATA ///////////////////////////
/////////////////////////// READ ///////////////////////////

// render to dom utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

// get the input form on the dom
const inputFormOnDom = () => {
  let domString = 
  `<div class="card no-border align-items-center">
    <h5 class="card-title">Enter First Year's Name</h5>
    <form class="row row-cols-lg-auto g-3 align-items-center">
      <div class="col">
        <label class="col-form-label">Student:</label>
      </div>
      <div class="col">
        <input type="text" class="form-control" id="name" placeholder="Name">
      </div>
      <div class="col">
        <button onclick="filterButtonsOnDom()" type="submit" class="btn btn-primary">Sort</button>
      </div>
    </form>
  </div>`;
  renderToDom("#input-form", domString);
}

// inputFormOnDom();

// get the filter buttons on the dom
const filterButtonsOnDom = () => {
  let domString =
  `<div class="filter card-body text-center">
    <h6 class="card-title">Filter Students</h6>
    <button type="button" class="btn btn-primary" id="all">All</button>
    <button type="button" class="btn btn-primary" id="gryffindor">Gryffindor</button>
    <button type="button" class="btn btn-primary" id="hufflepuff">Hufflepuff</button>
    <button type="button" class="btn btn-primary" id="ravenclaw">Ravenclaw</button>
    <button type="button" class="btn btn-primary" id="slytherin">Slytherin</button>
  </div>`;
  renderToDom("#filter-buttons", domString);
}

// filterButtonsOnDom();

// get the first years cards on the dom
const firstYearsOnDom = (students) => {
  let domString =
  `<div class="col first-years">
    <h5 class="card-title">First Years</h5>`
    students.forEach(student => {
      domString +=
      `<div class="card mb-3 first-years" style="max-width: 325px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${student.crest}" class="img-fluid rounded-start" alt="House Crest">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.house}</p>
              <button type="button" class="btn btn-danger" id="expel--${student.id}">EXPEL</button>
            </div>
          </div>
        </div>
      </div>`;
    });
  domString +=
  `</div>`;
  renderToDom("#first-years", domString);
}

// firstYearsOnDom(students);

// get the voldemorts army cards on the dom
const voldemortsArmyOnDom = (voldemortsArmy) => {
  let domString =
  `<div class="col voldemorts-army">
    <h5 class="card-title">Voldemort's Army</h5>`
    voldemortsArmy.forEach(member => {
      domString +=
      `<div class="card mb-3 voldemorts-army" style="max-width: 325px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="images/dark-mark.jpg" class="img-fluid rounded-start" alt="Dark Mark">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">Sadly, <b>${member.name}</b> has joined Voldemort's army!</p>
            </div>
          </div>
        </div>
      </div>`;
    });
  domString +=
  `</div>`;
  renderToDom("#voldemorts-army", domString);
}

// voldemortsArmyOnDom(voldemortsArmy);

// target house buttons on the dom
const allBtn = document.querySelector("#all");
const gryffindorBtn = document.querySelector("#gryffindor");
const hufflepuffBtn = document.querySelector("#hufflepuff");
const ravenclawBtn = document.querySelector("#ravenclaw");
const slytherinBtn = document.querySelector("#slytherin");

// add click events to filter students by house
if (allBtn) {
  allBtn.addEventListener("click", () => {
    firstYearsOnDom(students);
  });
}

if (gryffindorBtn) {
  gryffindorBtn.addEventListener("click", (e) => {
    if (e.target.id.includes("gryffindor")) {
      const gryffindorStudents = students.filter((student) => student.house === "Gryffindor");
      firstYearsOnDom(gryffindorStudents);
    }
  });
}

if (hufflepuffBtn) {
  hufflepuffBtn.addEventListener("click", (e) => {
    if (e.target.id.includes("hufflepuff")) {
      const hufflepuffStudents = students.filter((student) => student.house === "Hufflepuff");
      firstYearsOnDom(hufflepuffStudents);
    }
  });
}

if (ravenclawBtn) {
  ravenclawBtn.addEventListener("click", (e) => {
    if (e.target.id.includes("ravenclaw")) {
      const ravenclawStudents = students.filter((student) => student.house === "Ravenclaw");
      firstYearsOnDom(ravenclawStudents);
    }
  });
}

if (slytherinBtn) {
  slytherinBtn.addEventListener("click", (e) => {
    if (e.target.id.includes("slytherin")) {
      const slytherinStudents = students.filter((student) => student.house === "Slytherin");
      firstYearsOnDom(slytherinStudents);
    }
  });
}

// function to hide elements
// const toggleHidden = () => {
//   const hiddenElements = document.querySelector(".hidden");
//   if (hiddenElements.style.display === "flex") {
//     hiddenElements.style.display = "none";
//   } else {
//     hiddenElements.style.display = "flex";
//   }
// }

// function to scroll to section of page on click
// function scrollFunction() {
//   let e = document.querySelector("#main");
//   e.scrollIntoView({
//     block: 'start',
//     behavior: 'smooth',
//     inline: 'start'
//   });
// }

/////////////////////////// READ ///////////////////////////
////////////////////////// CREATE //////////////////////////

// target the form on the dom
const form = document.querySelector("form");

// create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new student
const addNewStudent = (e) => {
  e.preventDefault(); // every time you create a form

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
  firstYearsOnDom(students);
  form.reset();
}

// add an event listener for the form submit and pass it the function
if (form) {
  form.addEventListener("submit", addNewStudent);
}

////////////////////////// CREATE //////////////////////////
////////////////////////// DELETE //////////////////////////

// target the first years div
const firstYears = document.querySelector("#first-years");

// add an event listener to capture clicks
firstYears.addEventListener("click", (e) => {

  // check e.target.id includes "expel"
  if (e.target.id.includes("expel")) {

    // destructure and split at "--"
    const [, id] = e.target.id.split("--");

    // .findIndex() returns index of first element that meets condition
    const index = students.findIndex(student => student.id === Number(id));

    // remove expelled students from students array
    const expelledStudent = students.splice(index, 1)[0];

    // push expelled students to voldemorts army array
    voldemortsArmy.push(expelledStudent);

    // repaint the dom with the updated array
    firstYearsOnDom(students);
    voldemortsArmyOnDom(voldemortsArmy);
  }
});

////////////////////////// DELETE //////////////////////////

// const startApp = () => {
//   firstYearsOnDom(students);
//   voldemortsArmyOnDom(voldemortsArmy);
//   inputFormOnDom();
//   filterButtonsOnDom();
// }

// startApp();
