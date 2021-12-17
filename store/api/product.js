export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Product 1',
      desc: [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.'
      ]
    },
    {
      id: 2,
      title: 'Product 2',
      desc: [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.'
      ]
    },
    {
      id: 3,
      title: 'Product 3',
      desc: [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.'
      ]
    },
    {
      id: 3,
      title: 'Product 3',
      desc: [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.'
      ]
    }
  ]
})

export const getters = {
  products: state => {
    const items = state.products
    if(items.length > 3) {
      return items.slice(0, 3)
    }
    return items
  }
}

export const mutations = {
}

export const actions = {
}