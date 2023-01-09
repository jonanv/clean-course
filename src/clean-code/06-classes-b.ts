(() => {

  // No aplica el principio de responsabilidad única
  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender; 
      this.birthdate = birthdate; 
    }
  }

  interface UserProps {
    name: string;
    gender: Gender;
    birthdate: Date;
    email: string;
    role: string;
  }

  class User extends Person {
    public email: string
    public role: string
    public lastAccess: Date;

    constructor({ name, gender, birthdate, email, role }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredential(): boolean {
      return true;
    }
  }

  interface UserSettingsProps {
    workDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workDirectory = workDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  let userSettings = new UserSettings({
    workDirectory: '/usr/giovanni',
    lastOpenFolder: '/downloads',
    email: 'giovanni@gmail.com',
    role: 'root',
    name: 'Giovanni',
    gender: 'M',
    birthdate: new Date('1992-01-23')
  });
  console.log({ userSettings, areCredencialsValid: userSettings.checkCredential() });

})();