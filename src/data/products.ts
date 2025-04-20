export type Product = {
  id: string;
  name: string;
  price: number | null;
  oldPrice: number | null;
  rating: number | null;
  image: string;
  type: string;
};

export const products = [
    {
      id: '11',
      name: 'Apple BYZ S8521',
      price: 2927,
      image: '/Apple BYZ S8521.png',
      oldPrice: 3527,
      rating: 4.5,
      type: 'wired'
    },
    {
      id: '13',
      name: 'Apple EarPods',
      price: 2327,
      image: '/Apple EarPods.png',
      oldPrice: null,
      rating: 4.5,
      type: 'wired'
    },
    {
      id: '21',
      name: 'Apple AirPods',
      price: 9527,
      image: '/Apple AirPods.png',
      oldPrice: null,
      rating: 4.7,
      type: 'wireless'
    },
    {
      id: '12',
      name: 'Apple EarPods in case',
      price: 2327,
      image: '/Apple EarPods in case.png',
      oldPrice: null,
      rating: 4.5,
      type: 'wired'
    },
    {
      id: '111',
      name: 'Apple BYZ S8521',
      price: 2927,
      image: '/Apple BYZ S8521.png',
      oldPrice: 3527,
      rating: 4.5,
      type: 'wired'
    },
    {
      id: '131',
      name: 'Apple EarPods',
      price: 2327,
      image: '/Apple EarPods.png',
      oldPrice: null,
      rating: 4.5,
      type: 'wired'
    },
    {
      id: '121',
      name: 'Apple EarPods in case',
      price: 2327,
      image: '/Apple EarPods in case.png',
      oldPrice: null,
      rating: 4.5,
      type: 'wired'
    },
    
    
    {
      id: '22',
      name: 'GERLAX GH-04',
      price: 6527,
      image: '/GERLAX GH-04.png',
      oldPrice: null,
      rating: 4.7,
      type: 'wireless'
    },
    {
      id: '23',
      name: 'BOROFONE BO4',
      price: 7527,
      image: '/BOROFONE BO4.png',
      oldPrice: null,
      rating: 4.7,
      type: 'wireless'
    }
  ]
    