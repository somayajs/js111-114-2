
const form = document.querySelector("form")
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const age = document.querySelector("#age");
const skills = document.querySelector("#skills");
// sessionStorage.clear();
// display the choises on page
//first check for storage
if(sessionStorage["userInputs"]) {
  let deserializedStorage = JSON.parse(sessionStorage["userInputs"])[0];
  if(deserializedStorage.fName) firstName.value = deserializedStorage.fName;
  if(deserializedStorage.lName) lastName.value = deserializedStorage.lName;
  if(deserializedStorage.age) age.value = deserializedStorage.age;
  if(deserializedStorage.skill) skills.querySelector(`[value="${deserializedStorage.skill}"]`).setAttribute("selected", "true");
}

form.addEventListener("change", (e) => {
  e.preventDefault();
  let selected = e.target;
  let targetValue = e.target.value;
  // if there are storage, we will add to them, if not we create a new object
  let deserializedStorage = typeof sessionStorage["userInputs"] !== "undefined" ? JSON.parse(sessionStorage["userInputs"]) : [{}];
    if (selected.name === "first-name") deserializedStorage[0]["fName"] = targetValue;
    if (selected.name === "last-name") deserializedStorage[0]["lName"] = targetValue;
    if (selected.name === "age") deserializedStorage[0]["age"] = targetValue;
    if (selected.name === "skills") deserializedStorage[0]["skills"] = targetValue;

    // add values to sessionStorage
    sessionStorage.userInputs = JSON.stringify(deserializedStorage)
})

