export interface RealEstateDataType {
  id: number;
  name: string;
  area: string;
  type: string;
  postCode: number;
  address: string;
  space: number;
  layout: string;
  value: number;
  description: string;
  recommendation: number;
  createdAt: Date;
  year: number;
  buildingType: string;
  floor: number;
  allFloor: number;
}

export interface CoordsType {
  mitsune: {
    rent: number[];
    buy: number[];
  };
  okago: {
    rent: number[];
    buy: number[];
  };
  kashitate: {
    rent: number[];
    buy: number[];
  };
  nakanogo: {
    rent: number[];
    buy: number[];
  };
  sueyoshi: {
    rent: number[];
    buy: number[];
  };
}
