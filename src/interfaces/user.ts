export interface UserModelIn {
  isAdmin: boolean;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  title: string;
  bio: string;
  hash?: string;
  salt?: string;
}

export interface UserInterface {
  _id: string;
  isAdmin: boolean;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  title: string;
  bio: string;
  hash?: string;
  salt?: string;
}

export interface CloudinaryInterface {
  obj: { imageUrl: string };
  publicId: string;
  result: { result: string };
}
