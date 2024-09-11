function acima_media(array: number[]) {
  const {soma, count} = array.reduce((acc, cur) => {
    if(cur !== 0){ //Ignora os valores de dias nulos
      acc.soma += cur; //acrescenta o termo atual na soma total
      acc.count += 1; //adiciona um na media
    }
    return acc
  }, {soma: 0, count: 0} // Inicia tanto a variavel soma, como o cont com o valor 0
  );
  const media = count > 0 ? soma / count : 0;
  return array.filter((e) => e > media);
}