export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
  type: string;
};

export const products = [
    {
      id: '1',
      name: 'Наушники Apple',
      price: 2999,
      image: '/Apple BYZ S8521.png',
      oldPrice: 3999,
      rating: 4.5,
      type: 'wired'
    },
    {
      id: '2',
      name: 'Наушники Sony',
      price: 3499,
      image: '/sony-headphones.png',
      oldPrice: 4499,
      rating: 4.8,
      type: 'wired'
    },
    {
      id: '3',
      name: 'Наушники Хорошие',
      price: 3499,
      image: '/sony-headphones.png',
      oldPrice: 4499,
      rating: 4.8,
      type: 'wired'
    },
    {
      id: '42',
      name: 'Наушники Плохие',
      price: 3499,
      image: '/sony-headphones.png',
      oldPrice: 4499,
      rating: 4.8,
      type: 'wired'
    },]
    