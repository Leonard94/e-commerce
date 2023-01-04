import { Banner } from './components/Banner/Banner'
import { Products } from './components/Products/Products'

const data = [
  {
    category_id: 1,
    category_code: 'pizza',
    category_title: 'пицца',
    items: [
      {
        product_id: 1,
        title: 'карбонара',
        composition:
          'Бекон, сыры чеддер и пармезан, моцарелла, томаты, соус альфредо, красный лук, чеснок, итальянские травы',
        disabled: false,
        category_title: 'пицца',
        sizes: [
          {
            size_id: 1,
            size_name: 'маленькая',
            weight: '420 г',
            price: '489.00',
            fk_product_id: 1,
          },
          {
            size_id: 2,
            size_name: 'средняя',
            weight: '630 г',
            price: '739.00',
            fk_product_id: 1,
          },
          {
            size_id: 3,
            size_name: 'большая',
            weight: '870 г',
            price: '889.00',
            fk_product_id: 1,
          },
        ],
      },
      {
        product_id: 2,
        title: 'пепперони',
        composition: 'Томатный соус, пикантная пепперони, моцарелла',
        disabled: false,
        category_title: 'пицца',
        sizes: [
          {
            size_id: 4,
            size_name: 'маленькая',
            weight: '380 г',
            price: '439.00',
            fk_product_id: 2,
          },
          {
            size_id: 5,
            size_name: 'средняя',
            weight: '580 г',
            price: '669.00',
            fk_product_id: 2,
          },
          {
            size_id: 6,
            size_name: 'большая',
            weight: '760 г',
            price: '829.00',
            fk_product_id: 2,
          },
        ],
      },
    ],
  },
  {
    category_id: 2,
    category_code: 'drink',
    category_title: 'напитки',
    items: [
      {
        product_id: 3,
        title: 'пепси',
        composition: null,
        disabled: false,
        category_title: 'напитки',
        sizes: [
          {
            size_id: 7,
            size_name: '0,5 л',
            weight: null,
            price: '105.00',
            fk_product_id: 3,
          },
          {
            size_id: 8,
            size_name: '1 л',
            weight: null,
            price: '199.00',
            fk_product_id: 3,
          },
        ],
      },
      {
        product_id: 4,
        title: 'фанта',
        composition: null,
        disabled: false,
        category_title: 'напитки',
        sizes: [
          {
            size_id: 9,
            size_name: '0,5 л',
            weight: null,
            price: '105.00',
            fk_product_id: 4,
          },
          {
            size_id: 10,
            size_name: '1 л',
            weight: null,
            price: '199.00',
            fk_product_id: 4,
          },
        ],
      },
      {
        product_id: 5,
        title: 'спрайт',
        composition: null,
        disabled: false,
        category_title: 'напитки',
        sizes: [
          {
            size_id: 11,
            size_name: '0,5 л',
            weight: null,
            price: '105.00',
            fk_product_id: 5,
          },
          {
            size_id: 12,
            size_name: '1 л',
            weight: null,
            price: '199.00',
            fk_product_id: 5,
          },
        ],
      },
      {
        product_id: 6,
        title: 'бонаква негазированная',
        composition: null,
        disabled: false,
        category_title: 'напитки',
        sizes: [
          {
            size_id: 13,
            size_name: '0,5 л',
            weight: null,
            price: '75.00',
            fk_product_id: 6,
          },
        ],
      },
      {
        product_id: 7,
        title: 'бонаква среднегазированная',
        composition: null,
        disabled: false,
        category_title: 'напитки',
        sizes: [
          {
            size_id: 14,
            size_name: '0,5 л',
            weight: null,
            price: '75.00',
            fk_product_id: 7,
          },
        ],
      },
      {
        product_id: 8,
        title: 'бонаква газированная',
        composition: null,
        disabled: false,
        category_title: 'напитки',
        sizes: [
          {
            size_id: 15,
            size_name: '0,5 л',
            weight: null,
            price: '75.00',
            fk_product_id: 8,
          },
        ],
      },
    ],
  },
  {
    category_id: 3,
    category_code: 'sauce',
    category_title: 'соусы',
    items: [],
  },
]

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Products productsList={data} />
    </>
  )
}
