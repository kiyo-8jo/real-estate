export const getTranslatedType = (_type: string) => {
  switch (_type) {
    case "rent":
      return "賃貸";
    case "buy":
      return "販売";
  }
};

export const getTranslatedArea = (_area: string) => {
  switch (_area) {
    case "mitsune":
      return "三根";
    case "okago":
      return "大賀郷";
    case "kashitate":
      return "樫立";
    case "nakanogo":
      return "中之郷";
    case "sueyoshi":
      return "末吉";
    case "others":
      return "その他";
  }
};

export const getTranslatedBuildingType = (_buildingType: string) => {
  switch (_buildingType) {
    case "apartment":
      return "アパート";
    case "house":
      return "一戸";
    case "terrace":
      return "テラス";
    case "land":
      return "土地";
    case "shop":
      return "店舗";
    case "others":
      return "その他";
  }
};
