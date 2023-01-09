(() => {

  type Gender = 'M' | 'F';

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender; 
      this.birthdate = birthdate; 
    }
  }

  let newPerson = new Person('Giovanni', 'M', new Date('1992-01-23'));
  console.log({ newPerson });

})();