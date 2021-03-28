export interface IProduct {
  uid: number;
  name: string;
  gender: string;
  new: boolean;
  sale: boolean;
  before_price: number;
  crr_price: number;
  imageURL: string;
  summary?: string;
  infoList?: {
    info: string;
    reviews: string;
    shipping: string;
  };
}
