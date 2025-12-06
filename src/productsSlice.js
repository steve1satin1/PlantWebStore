import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: [
        {
            id: 1,
            name: "Snake Plant (Sansevieria)",
            description: "Known for its sharp, vertical leaves and air-purifying qualities. Very resilient and low-maintenance, making it perfect for beginners.",
            price: 24.99,
            imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg",
            category: "Beautiful plants"
        },
        {
            id: 2,
            name: "Pothos (Epipremnum aureum)",
            description: "A fast-growing trailing vine with heart-shaped leaves. Tolerates low light but thrives in bright, indirect light. Great for hanging baskets.",
            price: 18.50,
            imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg",
            category: "Ugly plants"
        },
        {
            id: 3,
            name: "ZZ Plant (Zamioculcas zamiifolia)",
            description: "Extremely drought-tolerant and can survive in very low light conditions. Features waxy, dark green leaves on upright stalks.",
            price: 35.00,
            imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg",
            category: "Smelly plants"
        },
        {
            id: 4,
            name: "Fiddle Leaf Fig (Ficus lyrata)",
            description: "A popular statement plant known for its large, violin-shaped leaves. Requires bright, filtered light and consistent watering.",
            price: 79.99,
            imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg",
            category: "Beautiful plants"
        },
        {
            id: 5,
            name: "Monstera Deliciosa (Swiss Cheese Plant)",
            description: "Iconic tropical plant with large, fenestrated (holey) leaves. Needs plenty of space and humidity to flourish.",
            price: 49.95,
            imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg",
            category: "Ugly plants"
        },
        {
            id: 6,
            name: "Aloe Vera",
            description: "A succulent known for its medicinal properties. The gel inside the leaves can be used for minor burns and cuts. Requires bright light.",
            price: 15.25,
            imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg",
            category: "Smelly plants"
        },
        {
            id: 7,
            name: "Spider Plant (Chlorophytum comosum)",
            description: "Easy to grow and propagates readily by producing 'spiderettes' (small plantlets). Ideal for purifying indoor air.",
            price: 12.00,
            imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg",
            category: "Beautiful plants"
        },
        {
            id: 8,
            name: "Peace Lily (Spathiphyllum)",
            description: "Features elegant white 'flowers' (spathes) and dark green foliage. Prefers moist soil and medium to low light, wilting dramatically when thirsty.",
            price: 29.75,
            imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg",
            category: "Ugly plants"
        },
        {
            id: 9,
            name: "Cactus Assortment (Various species)",
            description: "A collection of small desert cacti. Perfect for sunny windowsills and incredibly forgiving if you forget to water them.",
            price: 9.99,
            imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg",
            category: "Beautiful plants"
        },
        {
            id: 10,
            name: "Eucalyptus Tree (Baby Blue variety)",
            description: "Known for its beautiful silvery-blue, round leaves and strong, refreshing fragrance. Can be grown indoors but will eventually require outdoor planting.",
            price: 22.50,
            imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg",
            category: "Smelly plants"
        }
  ],
  reducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productsSlice.reducer