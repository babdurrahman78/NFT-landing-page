export interface INFTProps {
  id: number;
  title: string;
  description?: string;
  creator: string;
  owner?: string;
  imgUrl: string;
  tags?: string[];
  price: number;
  listedDate: string;
  soldDate?: string;
}
