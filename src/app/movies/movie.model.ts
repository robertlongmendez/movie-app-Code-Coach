
export class Movie {
  public name: string;
  public description: string;
  public imagePath: string;
  public date: string;

  constructor(name: string, desc: string, imagePath: string, date: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.date = date;
  }
}
