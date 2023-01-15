export interface IUserName {
  title: string;
  first: string;
  last: string;
}

export interface IUserLocation {
  street: {
    number: number; 
    name: string
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  }
}

export interface IUserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface IUser {
  gender: string;
  name: IUserName;
  location: IUserLocation;
  email: string;
  login: IUserLogin;
  dob: {
    date: string;
    age: number;
  }
  registered: {
    date: string;
    age: number;
  }
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  }
  pictures: {
    large: string;
    medium: string;
    thumbnail: string;
  },
  nat: string;
}


export interface IFilteredUser {
  name: string;
  age: number;
  email: string;
  first?:string;
  last?:string;
}