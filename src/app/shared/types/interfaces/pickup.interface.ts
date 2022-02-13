
export interface Image {
  _id: string;
  url: string;
  size: string;
  register_date: string;

}

export interface Pickup {
  image?: Image[];
  descript?: string;
  date?: string;
}
