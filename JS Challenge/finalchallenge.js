function separateByGender(peoples) {
    const females = [];
    const males = [];
  
    for (let i = 0; i < peoples.length; i++) {
      let person = peoples[i].trim();
      const [name, age, gender] = person.split(", ");
      const [firstName, lastName] = name.split(" ");
  
      const personObject = {
        "second-name": lastName,
        age: parseInt(age)
      };
  
      if (gender === "female") {
        females.push({ [firstName]: personObject });
      } else if (gender === "male") {
        males.push({ [firstName]: personObject });
      }
    }
  
    return { females, males };
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
  
  let result = separateByGender(abantu);
  
  console.log(result.females);
  console.log(result.males);