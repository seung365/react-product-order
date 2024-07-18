export type ThemeData = {
  id: number;
  key: string;
  label: string;
  title: string;
  description?: string;
  backgroundColor: string;
  imageURL: string;
};

export type RankingFilterOption = {
  targetType: 'ALL' | 'FEMALE' | 'MALE' | 'TEEN';
  rankType: 'MANY_WISH' | 'MANY_RECEIVE' | 'MANY_WISH_RECEIVE';
};

type Price = {
  basicPrice: number;
  discountRate: number;
  sellingPrice: number;
};

export type GoodsData = {
  id: number;
  name: string;
  imageURL: string;
  wish: {
    wishCount: number;
    isWished: boolean;
  };
  price: Price;
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
};

export type ProductsResponseData = {
  detail: {
    id: number;
    imageURL: string;
    isAccessableProductPage: boolean;
    name: string;
    price: Price;
  };
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
};
