import {IUser} from "../interfaces/userinterface";

export class User implements IUser{
  auth_key: string;
  cn: string;
  displayname: string;
  dn: string;
  id: number;
  inactive: boolean;
  mail: string;
  objectguid: string;
  objectsid: string;
  sn: string;
  thumbnailphoto: string;
  title: string;
  veryfied: boolean;

  constructor(user: IUser) {
    this.auth_key = user.auth_key;
    this.cn = user.cn;
  }

  getName() {
    return this.cn;
  }
}
