import Theme from "./theme";

class Profile {
  name?: string;
  picture?: string;
  theme: Theme;

  constructor(name: string) {
    this.theme = new Theme();
    this.name = name;
  }
}

export default Profile;
