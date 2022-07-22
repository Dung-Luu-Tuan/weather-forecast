module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: "1200px" }, // Desktop smallest.
      xl: { min: "1159px" }, // Desktop wide.
      xxl: { min: "1359px" }, // Desktop widescreen.
    },
    extend: {
      width: {
        700: "700px",
        350: "350px",
      },
      backgroundColor: {
        semiWhite: "#fff",
      },
      height: {
        38: "150px",
      },
      borderColor: {
        itemColor: "#dbdada",
        searchColor: "#737373",
      },
      colors: {
        semiblack: "#333",
        semiWhite: "#fff",
        itemFirst: "#0079a6",
      },
    },
  },
  plugins: [],
};
