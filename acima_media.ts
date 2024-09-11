function acima_media(array: number[]) {
    const media = array.reduce((acc, cur) => acc + cur) / array.length;
    return array.filter((e) => e > media);
  }