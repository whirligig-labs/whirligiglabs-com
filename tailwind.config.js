module.exports = {
  content: ["./src/**/*.{astro,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 60s linear infinite",
        "reverse-spin": "reverse-spin 60s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      colors: {
        blue: {
          DEFAULT: "#009DDC",
          50: "#BDECFF",
          100: "#A9E6FF",
          200: "#80DBFF",
          300: "#57CFFF",
          400: "#2FC3FF",
          500: "#06B8FF",
          600: "#009DDC", // primary
          700: "#0075A4",
          800: "#004D6C",
          900: "#002534",
        },
        gray: {
          DEFAULT: "#2A2D34",
          50: "#C2C6CE",
          100: "#B7BBC5",
          200: "#A0A6B3",
          300: "#8A90A0",
          400: "#737B8E",
          500: "#616878",
          600: "#4E5461",
          700: "#3C414B",
          800: "#2A2D34", // primary
          900: "#111215",
        },
        green: {
          DEFAULT: "#009B72",
          50: "#A5FFE7",
          100: "#91FFE2",
          200: "#68FFD7",
          300: "#3FFFCC",
          400: "#16FFC1",
          500: "#00EDAE",
          600: "#00C490",
          700: "#009B72", // primary
          800: "#006349",
          900: "#002B1F",
        },
        purple: {
          DEFAULT: "#6761A8",
          50: "#D9D7E9",
          100: "#CCCAE2",
          200: "#B3B0D3",
          300: "#9A96C5",
          400: "#807BB6",
          500: "#6761A8", // primary
          600: "#4F4A87",
          700: "#3A3663",
          800: "#25223E",
          900: "#0F0E1A",
        },
        red: {
          DEFAULT: "#F26430",
          50: "#FDE5DD",
          100: "#FCD7CA",
          200: "#F9BAA3",
          300: "#F79D7D",
          400: "#F48156",
          500: "#F26430", // primary
          600: "#DC450E",
          700: "#A7350B",
          800: "#732407",
          900: "#3E1304",
        },
        yellow: {
          DEFAULT: "#ECC30B",
          50: "#FDF7DA",
          100: "#FCF3C7",
          200: "#FBEAA0",
          300: "#F9E179",
          400: "#F7D952",
          500: "#F5D02B",
          600: "#ECC30B", // primary
          700: "#B69709",
          800: "#816A06",
          900: "#4B3E04",
        },
      },
    },
  },
};
