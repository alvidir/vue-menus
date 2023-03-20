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

  static async fetch(url: string): Promise<Profile> {
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => Object.assign(new Profile("", ""), jsonData));
  }

  setStorageDomain = (domain: string) => {
    localStorage.setItem("domain", domain);
  };
}

export default Profile;
