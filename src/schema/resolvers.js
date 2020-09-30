function getBasicCard() {
  return {
    component: 'BasicCard',
    data: {
      title: 'Titulo',
      thumbnailUrl: 'https://via.placeholder.com/150',
      textLink: 'ver mas',
      linkUrl: 'http://example.com/link',
    },
  };
}

function getGridCard() {
  return {
    component: 'GridCard',
    meta: {
      size: '2x2',
    },
    data: {
      title: 'Title',
      grid: [
        {
          thumbnailUrl: 'https://via.placeholder.com/50',
          subTitle: 'Sub Title',
        },
        {
          thumbnailUrl: 'https://via.placeholder.com/50',
          subTitle: 'Sub Title',
        },
        {
          thumbnailUrl: 'https://via.placeholder.com/50',
          subTitle: 'Sub Title',
        },
        {
          thumbnailUrl: 'https://via.placeholder.com/50',
          subTitle: 'Sub Title',
        },
      ],
      textLink: 'Ver mas',
      linkUrl: 'http://example.com/link',
    },
  };
}

function getActionCard() {
  return {
    component: 'ActionCard',
    data: {
      title: 'title',
      textLink: 'link',
      linkUrl: 'http://example.com/link',
    },
  };
}

function getAdvertisementCard() {
  return {
    component: 'AdvertisementCard',
    meta: {
      size: 'small',
    },
    data: {
      thumbnailUrl: 'https://via.placeholder.com/150',
      linkUrl: 'http://example.com/link',
    },
  };
}

function featuredItems() {
  return [
    getBasicCard(),
    getAdvertisementCard(),
    getBasicCard(),
    getBasicCard(),
  ];
}

function discountedItems() {
  return [getBasicCard(), getBasicCard(), getBasicCard(), getBasicCard()];
}

function recommendedForYouItems() {
  return [getBasicCard(), getBasicCard(), getBasicCard(), getBasicCard()];
}

export default {
  Card: {
    __resolveType(obj) {
      return obj.component;
    },
  },
  Query: {
    featuredItems,
    discountedItems,
    recommendedForYouItems,
  },
};
