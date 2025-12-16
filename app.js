console.log('Hello from app.js');

/* 
🐢 STEP 2 — map()(Transforming Arrays Safely)
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

const people2 = ['nice jerks', 'elephant jerks', 'jerks', 'nice people', 'jerks', 'nice people', 'nice people'];

const notJerks2 = people2.filter(person => !person.includes('jerks'));

/* log the filtered result */
console.log(notJerks2);


/* 
🦊 STEP 4 — find() & findIndex()
🎯 Skill unlocked

Finding ONE thing in an array without looping manually
*/
/* array of numbers */
const numbers = [3, 7, 12, 5, 9];

/* find the first number greater than 10 */
const firstBigNumber = numbers.find((number) => {
    /* return true when condition is met */
    return number > 10;
});

/* find the index of the first number greater than 10 */
const firstBigNumberIndex = numbers.findIndex((number) => {
    /* return true when condition is met */
    return number > 10;
});

/* log results */
console.log(firstBigNumber);
console.log(firstBigNumberIndex);

/* 
🐼 STEP 5 — some() & every()
🎯 Skill unlocked

Asking questions about arrays without looping or counting
*/

/* array of test scores */
const scores = [95, 82, 67, 88, 91];

/* check if SOME scores are failing */
const hasFailingScore = scores.some((score) => {
    /* return true if any score is below 70 */
    return score < 70;
});

/* check if EVERY score is passing */
const allPassing = scores.every((score) => {
    /* return true only if all scores are 70 or higher */
    return score >= 70;
});

/* log results */
console.log(hasFailingScore);
console.log(allPassing);

/* 
🦁 STEP 6 — Pro Decision - Making Mindset
🎯 Skill unlocked

Instantly knowing which array method to use(industry intuition)
*/