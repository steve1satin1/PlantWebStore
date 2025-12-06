import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: [
        {
            id: 1,
            name: "Snake Plant (Sansevieria)",
            description: "Known for its sharp, vertical leaves and air-purifying qualities. Very resilient and low-maintenance, making it perfect for beginners.",
            price: 24.99,
            imageUrl: "https://horomidis.gr/wp-content/uploads/2018/04/SANSEVIERIA-%CE%A3%CE%91%CE%9D%CE%A3%CE%99%CE%92%CE%95%CE%A1%CE%99%CE%91-%CE%89-%CE%A3%CE%91%CE%9D%CE%A3%CE%95%CE%92%CE%99%CE%95%CE%A1%CE%99%CE%91-1.jpg",
            category: "Beautiful plants"
        },
        {
            id: 2,
            name: "Pothos (Epipremnum aureum)",
            description: "A fast-growing trailing vine with heart-shaped leaves. Tolerates low light but thrives in bright, indirect light. Great for hanging baskets.",
            price: 18.50,
            imageUrl: "https://greenmall.gr/wp-content/uploads/2021/09/bb-1.jpg",
            category: "Ugly plants"
        },
        {
            id: 3,
            name: "ZZ Plant (Zamioculcas zamiifolia)",
            description: "Extremely drought-tolerant and can survive in very low light conditions. Features waxy, dark green leaves on upright stalks.",
            price: 35.00,
            imageUrl: "https://glasswingshop.com/cdn/shop/products/8D2A2069.jpg?v=1595400475&width=533",
            category: "Smelly plants"
        },
        {
            id: 4,
            name: "Fiddle Leaf Fig (Ficus lyrata)",
            description: "A popular statement plant known for its large, violin-shaped leaves. Requires bright, filtered light and consistent watering.",
            price: 79.99,
            imageUrl: "https://hortology.co.uk/cdn/shop/files/Ficus-lyrata-Fiddle-Leaf-Fig-Straight-Stem-30x150cm-Athena-Mediterranean-Planter-Chalk-White-53.5x45cm_1600x.jpg?v=1742980659",
            category: "Beautiful plants"
        },
        {
            id: 5,
            name: "Monstera Deliciosa (Swiss Cheese Plant)",
            description: "Iconic tropical plant with large, fenestrated (holey) leaves. Needs plenty of space and humidity to flourish.",
            price: 49.95,
            imageUrl: "https://hips.hearstapps.com/hmg-prod/images/plant-of-monstera-deliciosa-or-swiss-cheese-plant-royalty-free-image-1757955480.pjpeg?crop=0.66667xw:1xh;center,top&resize=1120:*",
            category: "Ugly plants"
        },
        {
            id: 6,
            name: "Aloe Vera",
            description: "A succulent known for its medicinal properties. The gel inside the leaves can be used for minor burns and cuts. Requires bright light.",
            price: 15.25,
            imageUrl: "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/aloe-vera-white-pot_sunwand24-ss_edit_0.jpg?itok=uOJaHAeR",
            category: "Smelly plants"
        },
        {
            id: 7,
            name: "Spider Plant (Chlorophytum comosum)",
            description: "Easy to grow and propagates readily by producing 'spiderettes' (small plantlets). Ideal for purifying indoor air.",
            price: 12.00,
            imageUrl: "https://www.kipogeorgiki.gr/image/cache/data/FYT_Esoterikou/Chlorophytum%20/1.-Chlorophytum-comosum-%27Variegatum%27-se-Glastra-1500x1500.jpg",
            category: "Beautiful plants"
        },
        {
            id: 8,
            name: "Peace Lily (Spathiphyllum)",
            description: "Features elegant white 'flowers' (spathes) and dark green foliage. Prefers moist soil and medium to low light, wilting dramatically when thirsty.",
            price: 29.75,
            imageUrl: "https://thessfyta.gr/1595-large_default/spathiphillum-peace-lilly.jpg",
            category: "Ugly plants"
        },
        {
            id: 9,
            name: "Cactus Assortment (Various species)",
            description: "A collection of small desert cacti. Perfect for sunny windowsills and incredibly forgiving if you forget to water them.",
            price: 9.99,
            imageUrl: "https://www.ikea.com/ph/en/images/products/cactaceae-potted-plant-cactus-assorted-species-plants__67421_pe181264_s5.jpg",
            category: "Beautiful plants"
        },
        {
            id: 10,
            name: "Eucalyptus Tree (Baby Blue variety)",
            description: "Known for its beautiful silvery-blue, round leaves and strong, refreshing fragrance. Can be grown indoors but will eventually require outdoor planting.",
            price: 22.50,
            imageUrl: "https://marshallsgarden.com/cdn/shop/products/3021-1039-Eucalyptus-pulverulenta-Baby-Blue-2-from-Unwins.jpg?crop=center&height=800&v=1663251838&width=800",
            category: "Smelly plants"
        }
  ],
  reducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productsSlice.reducer