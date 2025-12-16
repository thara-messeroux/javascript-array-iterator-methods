console.log('Hello from app.js');

/* 
STEP 2 — map()(Transforming Arrays Safely)
🎯 Skill unlocked

Turning one array into a new array without breaking anything
map() You Do
*/

/* original array of instructors */
const instructors = ['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David'];

/* use map to create a NEW array */
const awesomeInstructors = instructors.map((instructor) => {
    /* take one name and return a new string */
    return `${instructor} is awesome`;
});

/* log the result so we can see it */
console.log(awesomeInstructors);


/* 
🐶 STEP 3 — filter()(Selecting, not transforming)
🎯 Skill unlocked

Creating a new array by keeping only what matches a rule  */

/* original array of people */
const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];

/* filter out jerks */
const notJerks = people.filter((person) => {
    /* keep only items that are NOT 'jerks' */
    return person !== 'jerks';
});

/* log the filtered result */
console.log(notJerks);



