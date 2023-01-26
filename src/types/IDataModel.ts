import { IUser } from "./TUser"

export interface IDataModel {
    results: IUser[],
    info: {
      seed: string,
      results: number,
      pages: number,
      version: string
    }
  }