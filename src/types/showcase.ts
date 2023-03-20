export interface IShowcase {
  id: string;
  author: {
    username: string;
    profileImg: string;
  };
  image: string;
  likes: number;
  content: string;
}
