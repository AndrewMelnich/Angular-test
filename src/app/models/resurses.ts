export interface IResurs {
  id?: number;
  name?: string;
  year?: string;
  color?: string;
  pantone_value?: string;
}

export interface IResursResponse {
  data?: IResurs;
}

export interface ResursResponse {
  data?: IResurs[];
}
