import React, { Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Component/Header";
import Body from "./Component/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/Restaurantmenu";
// import SwiggyMart from "./Component/Swiggymart";
import { lazy } from "react";




const SwiggyMart = lazy(()=> import("./Component/Swiggymart"))

// const resObj =  {
//     "info": {
//       "id": "126292",
//       "name": "UBQ by Barbeque Nation",
//       "cloudinaryImageId": "wbdvil5g2dvy1logvqrg",
//       "locality": "Patna One Mall",
//       "areaName": "Fraser Road",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "North Indian",
//         "Barbecue",
//         "Biryani",
//         "Kebabs",
//         "Mughlai",
//         "Desserts"
//       ],
//       "avgRating": 4.1,
//       "parentId": "10804",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 52,
//         "lastMileTravel": 3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "3.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-18 23:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-one-mall-fraser-road-patna-126292",
//       "type": "WEBLINK"
//     }
//   }

const resList = [{
    "info": {
      "id": "725082",
      "name": "Pizza Hut",
      "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
      "locality": "Kankar Bagh",
      "areaName": "Kankarbagh",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-kankar-bagh-kankarbagh-patna-725082",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "126292",
      "name": "UBQ by Barbeque Nation",
      "cloudinaryImageId": "wbdvil5g2dvy1logvqrg",
      "locality": "Patna One Mall",
      "areaName": "Fraser Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 4.1,
      "parentId": "10804",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-one-mall-fraser-road-patna-126292",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "524423",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "tnjwc1hltzaudqyilpzq",
      "locality": "Malahi Pakadi Chowk",
      "areaName": "Kankarbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "parentId": "4961",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-malahi-pakadi-chowk-kankarbagh-patna-524423",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "384886",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
      "locality": "PC Colony",
      "areaName": "Kankarbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream",
        "Beverages"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "2233",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 45,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-pc-colony-kankarbagh-patna-384886",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "591085",
      "name": "0612 Road Chef",
      "cloudinaryImageId": "qo1ypqreeaulytd7cmgr",
      "locality": "Sanjay Nagar Road",
      "areaName": "Kankarbagh",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "22680",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/0612-road-chef-sanjay-nagar-road-kankarbagh-patna-591085",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "707051",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/3967a9e5-221f-4af7-8bec-9d5c63551954_707051.JPG",
      "locality": "Radha Enterprise",
      "areaName": "Kankarbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 00:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-radha-enterprise-kankarbagh-patna-707051",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "253169",
      "name": "Bikaner Sweets and Pastry Shop",
      "cloudinaryImageId": "gd1wohldbsmjuv5mstp7",
      "locality": "Ghrounda",
      "areaName": "Kankarbagh",
      "costForTwo": "₹449 for two",
      "cuisines": [
        "Bakery",
        "Sweets"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "45906",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Mithai.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bikaner-sweets-and-pastry-shop-ghrounda-kankarbagh-patna-253169",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "620953",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
      "locality": "Karbighiya",
      "areaName": "Kankarbagh",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "2456",
      "avgRatingString": "4.4",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-karbighiya-kankarbagh-patna-620953",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "81235",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/34bdc0b9-123a-44a8-b07a-12055c8ba41f_81235.JPG",
      "locality": "Bankman Colony",
      "areaName": "Kankarbagh",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.3,
      "parentId": "547",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-bankman-colony-kankarbagh-patna-81235",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "579715",
      "name": "GetAWay-Ice Creams & Desserts",
      "cloudinaryImageId": "8194c8fed09497bce3714d2586653545",
      "locality": "Ashok Nagar",
      "areaName": "Kankarbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts",
        "Healthy Food",
        "Sweets"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "354819",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹69"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/getaway-ice-creams-and-desserts-ashok-nagar-kankarbagh-patna-579715",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "488065",
      "name": "Batido The Shake Paradise",
      "cloudinaryImageId": "edc5105a8c5d075d87d22fe3efb9c815",
      "locality": "Housing Colony",
      "areaName": "Kankarbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Beverages",
        "Fast Food",
        "Snacks",
        "Desserts",
        "Pizzas",
        "Chinese"
      ],
      "avgRating": 4.3,
      "parentId": "42274",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/batido-the-shake-paradise-housing-colony-kankarbagh-patna-488065",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "308130",
      "name": "Momo Nation Cafe",
      "cloudinaryImageId": "hdmuwoxojwv9euhnlhq0",
      "locality": "Lohiya Nagar Road",
      "areaName": "Kankarbagh",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Chinese"
      ],
      "avgRating": 4.3,
      "parentId": "4157",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Momos.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Momos.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/momo-nation-cafe-lohiya-nagar-road-kankarbagh-patna-308130",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "767231",
      "name": "FNP Cakes By Ferns N Petals",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/17/ff6396ca-2d37-4b39-9d4e-f7705905ec33_767231.jpg",
      "locality": "Lohiya Nagar",
      "areaName": "Kankarbagh",
      "costForTwo": "₹499 for two",
      "cuisines": [
        "Desserts",
        "Bakery",
        "Sweets",
        "Ice Cream",
        "Beverages",
        "North Indian",
        "Chinese"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "339638",
      "avgRatingString": "4.1",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 20:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/fnp-cakes-by-ferns-n-petals-lohiya-nagar-kankarbagh-patna-767231",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "139044",
      "name": "Biryani Mahal",
      "cloudinaryImageId": "cbt0xv1fle9qrfxxxeu3",
      "locality": "Kankarbagh",
      "areaName": "Kankarbagh",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Mughlai"
      ],
      "avgRating": 4.2,
      "parentId": "9902",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/biryani-mahal-kankarbagh-patna-139044",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "458980",
      "name": "Biryani Badshah",
      "cloudinaryImageId": "h9qzerek4ztdziczkjil",
      "locality": "Housing Board Colony",
      "areaName": "Kankarbagh",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Biryani",
        "Hyderabadi",
        "Andhra",
        "South Indian",
        "North Indian",
        "Mughlai",
        "Kebabs"
      ],
      "avgRating": 4.2,
      "parentId": "10703",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 03:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/biryani-badshah-housing-board-colony-kankarbagh-patna-458980",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "494534",
      "name": "Swad Restaurant",
      "cloudinaryImageId": "i9a0l8uuy9punnf3yfak",
      "locality": "Mithapur Bus Stand",
      "areaName": "Mithapur",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Indian",
        "Sweets"
      ],
      "avgRating": 4,
      "parentId": "198583",
      "avgRatingString": "4.0",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 0.1,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/swad-restaurant-bus-stand-mithapur-patna-494534",
      "type": "WEBLINK"
    }
  },]









  const Applayout = () =>{
    return(
        <div>
            <Header/>
            {/* <Body/> */}
            <Outlet/>
        </div>
    )
} 

const AppRouter = createBrowserRouter([
  {
    path : "/",
    element : <Applayout/>,
    children : [{
      path:"/",
      element:<Body/>
    },
    {
      path: "/about",
      element : <About/>
    },
    {
      path: "/contact",
      element : <Contact/>
    }],
    errorElement :<Error/>
    
  },
  {
    path: "/restaurant/:resId",
    element :<RestaurantMenu/>
  },
  {
    path:"/swiggyMart",
    element:<Suspense fallback = {<h1>Loading...</h1>}><SwiggyMart/></Suspense>
  }

  
  
])











const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Applayout/>)
root.render(<RouterProvider router= {AppRouter}/>)


























