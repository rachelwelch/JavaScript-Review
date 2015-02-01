//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  var Animal = function(species, name, legs, color, food) {
    this.species = species;
    this.name =name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  }


//Now create a person function that creates an object and returns it (not in constructor form) 
//that has the following parameters. name, age, height, gender

  var Person = function(name, age, height, gender) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.gender = gender;
  }


//Create a animal array and a person array.

  var animalArr = [];
  var personArr = [];


//Create two instances of Animal and push those into your animal array

  animalArr.push(new Animal('mammal', 'giraffe', 4, 'orange', 'leaves'));
  animalArr.push(new Animal('mammal', 'dolphin', 0, 'gray', 'fish'));


//Create two instances of person and push those into your person array.

  personArr.push(new Person('Rachel', 28, '5 ft. 7 in.', 'female'));
  personArr.push(new Person('Bobby', 26, '5 ft. 9 in.', 'male'));


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances 
//food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/