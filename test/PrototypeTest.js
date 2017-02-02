var Animal = {
    name : null,
    type : null,
    setName : function (name) {
        this.name = name;
    },
    getName : function () {
        return this.name;
    },
    setType : function (type) {
        this.type = type;
    },
    getType : function () {
        return this.type;
    }
}


var Dog = Object.create(Animal);
Dog.weight = 0;
Dog.weight = 0;
Dog.setName = function (name) {
    this.name = name + "Dog";
}
Dog.setType = function (type) {
    this.type = type + "DogType";
}
Dog.setWeight = function (weight) {
    this.weight = weight;
}
Dog.getWeight = function () {
    return this.weight;
}
Dog.setHeight = function (height) {
    this.height = height;
}
Dog.getHeight = function () {
    return this.height;
}

var sample_animal1 = Object.create(Animal);
sample_animal1.setName("hyuko");
sample_animal1.setType("singer");
console.log("name : %s  type : %s\n", sample_animal1.getName(), sample_animal1.getType());

var sample_dog1 = Object.create(Dog);
sample_dog1.setName("susu");
sample_dog1.setType("sukut");
sample_dog1.setHeight(100);
sample_dog1.setWeight(50);

console.log("name : %s  type : %s  weight : %d  height : %d\n", sample_dog1.getName(), sample_dog1.getType(), sample_dog1.getWeight(), sample_dog1.getHeight());
console.log(Animal.isPrototypeOf(sample_dog1));
console.log(Dog.isPrototypeOf(sample_animal1));