export const categories = [
  {
    id: 1,
    name: "starter"
  },
  {
    id: 2,
    name: "dessert"
  },
  {
    id: 3,
    name: "main-course"
  },
  {
    id: 4,
    name: "breads"
  }
];

export const subCategory = [
  {
    id: 1,
    categoryId: 1,
    name: "Chicken Starter"
  },
  {
    id: 2,
    categoryId: 1,
    name: "Veg Starter"
  },
  {
    id: 3,
    categoryId: 3,
    name: "Chicken Main Course"
  },
  {
    id: 4,
    categoryId: 3,
    name: "Mutton Main Course"
  },
  {
    id: 5,
    categoryId: 3,
    name: "Veg Main Course"
  },
  {
    id: 6,
    categoryId: 4,
    name: "Indian Breads"
  },
  {
    id: 7,
    categoryId: 4,
    name: " Breads"
  },
  {
    id: 8,
    categoryId: 2,
    name: "Indian Sweets"
  },
  {
    id: 9,
    categoryId: 2,
    name: "Pastries"
  }
];

export const items = [
  {
    id: 1,
    name: "Veg 65",
    isVeg: true,
    price: 130,
    categoryId: 1,
    subCategoryId: 2,
    poster:
      "https://s3.ap-south-1.amazonaws.com/mumbai.urbanpiper.com/media/bizmedia/l/2019/06/04/paneer_65_COMPRESSED.png",
    quantity: 0
  },
  {
    id: 2,
    name: "Gobi Manchurian",
    isVeg: true,
    price: 120,
    categoryId: 1,
    subCategoryId: 2,
    poster:
      "https://www.cookwithmanali.com/wp-content/uploads/2017/01/Restaurant-Style-Gobi-Manchurian.jpg",
    quantity: 0
  },
  {
    id: 3,
    name: "Mushroom Manchurian",
    isVeg: true,
    price: 280,
    categoryId: 1,
    subCategoryId: 2,
    poster: "https://i.ytimg.com/vi/cnD6lJxj9z8/hqdefault.jpg",
    quantity: 0
  },
  {
    id: 4,
    name: "Chicken Tikka",
    isVeg: false,
    price: 170,
    categoryId: 1,
    subCategoryId: 1,
    poster:
      "https://irepo.primecp.com/2017/10/351683/Tandoori-Chicken-Tikka-with-Lemon-and-Sage_ArticleImage-CategoryPage_ID-2483977.jpg?v=2483977",
    quantity: 0
  },
  {
    id: 5,
    name: "Indian Chicken Kebab",
    isVeg: false,
    price: 160,
    categoryId: 1,
    subCategoryId: 1,
    poster:
      "https://www.closetcooking.com/wp-content/uploads/2019/11/Chicken-Tikka-Masala-1200-8412.jpg",
    quantity: 0
  },
  {
    id: 6,
    name: "Tandoori-style Chicken Tikka Masala",
    isVeg: false,
    price: 160,
    categoryId: 1,
    subCategoryId: 1,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 7,
    name: "Special Chicken Curry",
    isVeg: false,
    price: 340,
    categoryId: 3,
    subCategoryId: 3,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 8,
    name: "Chicken Shahi Korma",
    isVeg: false,
    price: 330,
    categoryId: 3,
    subCategoryId: 3,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 9,
    name: "Mutton Rogan Josh",
    isVeg: false,
    price: 340,
    categoryId: 3,
    subCategoryId: 4,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 10,
    name: "Mutton Kolhapuri",
    isVeg: false,
    price: 370,
    categoryId: 3,
    subCategoryId: 4,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 11,
    name: "Veg Chatpata",
    isVeg: true,
    price: 170,
    categoryId: 3,
    subCategoryId: 5,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 12,
    name: "Palak Paneer",
    isVeg: true,
    price: 270,
    categoryId: 3,
    subCategoryId: 5,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 13,
    name: "Rumali Roti",
    isVeg: true,
    price: 50,
    categoryId: 4,
    subCategoryId: 6,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 14,
    name: "Butter Naan",
    isVeg: true,
    price: 70,
    categoryId: 4,
    subCategoryId: 6,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 15,
    name: "Garlic Bread",
    isVeg: true,
    price: 270,
    categoryId: 4,
    subCategoryId: 7,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 16,
    name: "Gulab Jamun",
    isVeg: true,
    price: 70,
    categoryId: 2,
    subCategoryId: 8,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  },
  {
    id: 17,
    name: "Chocolate Brownie",
    isVeg: false,
    price: 70,
    categoryId: 2,
    subCategoryId: 9,
    poster:
      "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",
    quantity: 0
  }

  // {
  //   id: 6,
  //   name: "Tandoori-style Chicken Tikka Masala",
  //   isVeg: true,
  //   categoryId: 1,
  //   poster:
  //     "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg"
  // ,quantity: 0 },
  // {
  //   id: 6,
  //   name: "Tandoori-style Chicken Tikka Masala",
  //   isVeg: true,
  //   categoryId: 1,
  //   poster:
  //     "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg"
  // ,quantity: 0 },
  // {
  //   id: 6,
  //   name: "Tandoori-style Chicken Tikka Masala",
  //   isVeg: true,
  //   categoryId: 1,
  //   poster:
  //     "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg"
  // },
  // {
  //   id: 6,
  //   name: "Tandoori-style Chicken Tikka Masala",
  //   isVeg: true,
  //   categoryId: 1,
  //   poster:
  //     "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg"
  // },
  // {
  //   id: 6,
  //   name: "Tandoori-style Chicken Tikka Masala",
  //   isVeg: true,
  //   categoryId: 1,
  //   poster:
  //     "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg"
  // },
  // {
  //   id: 6,
  //   name: "Tandoori-style Chicken Tikka Masala",
  //   isVeg: true,
  //   categoryId: 1,
  //   poster:
  //     "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg"
  // },
  // {
  //   id: 6,
  //   name: "Tandoori-style Chicken Tikka Masala",
  //   isVeg: true,
  //   categoryId: 1,
  //   poster:
  //     "https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg"
  // }
];
