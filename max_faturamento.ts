function max_faturamento(array: number[]) {
  let maxValue: number | undefined;
  
  for (const e of array) {
    if (e !== undefined && e !== null && e !== 0) {
      if (maxValue === undefined || e > maxValue) {
        maxValue = e;
      }
    }
  }

  return maxValue;
     // Poderia também utilizar o método .filter do array e o Math.max(), porém o desempenho seria prejudicado. 
    // Isso ocorre porque o .filter criaria um novo array do zero (alocando mais memória) e, além disso, haveria duas iterações separadas: 
    // uma durante o .filter e outra durante o Math.max, resultando em maior custo computacional
  }