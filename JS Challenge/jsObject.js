function peopleDetails(peoples) {
    const containerPerson = {};
  
    for (let i = 0; i < peoples.length; i++) {
      let person = peoples[i].trim();
      const [name, age, sex] = person.split(",");
      const [firstName, lastName] = name.trim().split(" ");
  
      const personObject = {
        firstName: firstName,
        lastName: lastName,
        age: parseInt(age),
        sex: sex.trim()
      };
  
      containerPerson[i + 1] = personObject;
    }
  
    return containerPerson;
  }
  
  let abantu = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, trans",
    "Patrick wyne, 40, male"
  ];
  let result1 = peopleDetails(abantu);
  
  console.log(result1);