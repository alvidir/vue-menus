enum ColorPalette {
  Light = "theme-light",
  Dark = "theme-dark",
}

enum ThemeKey {
  ColorPalette = "color-palette",
}

class Theme {
  private colorPalette = ColorPalette.Light;

  constructor() {
    let palette = localStorage.getItem(ThemeKey.ColorPalette);
    if (
      palette &&
      !Object.values(ColorPalette).includes(palette as ColorPalette)
    ) {
      palette = null;
    }

    if (!palette) {
      palette = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ColorPalette.Dark
        : ColorPalette.Light;
    }

    this.setColorPalette(palette as ColorPalette);
  }

  setColorPalette = (palette: ColorPalette) => {
    if (
      !document
        .getElementsByTagName("body")[0]
        .classList.replace(this.colorPalette, palette)
    ) {
      document.getElementsByTagName("body")[0].classList.add(palette);
    }

    localStorage.setItem(ThemeKey.ColorPalette, palette);
    this.colorPalette = palette as ColorPalette;
  };

  isDarkTheme = (): boolean => {
    return this.colorPalette === ColorPalette.Dark;
  };

  switchTheme = (): void => {
    if (this.colorPalette == ColorPalette.Dark)
      this.setColorPalette(ColorPalette.Light);
    else if (this.colorPalette == ColorPalette.Light)
      this.setColorPalette(ColorPalette.Dark);
  };
}

export default Theme;
export { ColorPalette };
