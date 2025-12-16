console.log('Hello from app.js');

// map() You Do
/* original array of instructors */
const instructors = ['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David'];

/* use map to create a NEW array */
const awesomeInstructors = instructors.map((instructor) => {
    /* take one name and return a new string */
    return `${instructor} is awesome`;
});

/* log the result so we can see it */
console.log(awesomeInstructors);
