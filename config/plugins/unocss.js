const unocssOption = {
  theme: {
    colors: {
      blue: '#f31006'
    }
  },
  shortcuts: [
    { 'flex-center': 'flex items-center justify-center' },
    { 'flex-center-col': 'flex flex-col items-center justify-center' }
  ],
  rules: [
    // [
    //   /^(text|bg)-the-(.*)$/,
    //   ([, prop, name], { theme }) => {
    //     const { colors } = theme
    //     const color = colors[name]
    //     if (color) {
    //       prop = { text: 'color', bg: 'background-color' }[prop]
    //       return { [prop]: color }
    //     }
    //   }
    // ]
  ]
}
export default unocssOption
