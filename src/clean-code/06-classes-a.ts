(() => {

  // No aplica el principio de responsabilidad única
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

  // let newPerson = new Person('Giovanni', 'M', new Date('1992-01-23'));
  // console.log({ newPerson });

  class User extends Person {

    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredential(): boolean {
      return true;
    }
  }

  class UserSettings extends User {

    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  let userSettings = new UserSettings(
    '/usr/giovanni',
    '/downloads',
    'giovanni@gmail.com',
    'root',
    'Giovanni',
    'M',
    new Date('1992-01-23')
  );
  console.log({ userSettings, areCredencialsValid: userSettings.checkCredential() });

})();