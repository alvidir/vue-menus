import Theme from "./theme";

class Profile {
  id: string;
  name: string;
  picture?: string;
  theme: Theme;

  constructor(id: string, name: string) {
    this.theme = new Theme();
    this.name = name;
    this.id = id;
  }
}

export default Profile;
