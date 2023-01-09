(() => {

  // Aplicando el principio de responsabilidad única
  // Priorizar la composición frente a la hereancia

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
    email: string;
    role: string;
  }

  class User {
    public email: string
    public role: string
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredential(): boolean {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({ name, gender, birthdate, email, role, workingDirectory, lastOpenFolder }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }
  }

  let userSettings = new UserSettings({
    name: 'Giovanni',
    gender: 'M',
    birthdate: new Date('1992-01-23'),
    email: 'giovanni@gmail.com',
    role: 'root',
    workingDirectory: '/usr/giovanni',
    lastOpenFolder: '/downloads',
  });
  console.log({ userSettings, areCredencialsValid: userSettings.user.checkCredential() });

})();