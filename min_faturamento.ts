function min_faturamento(array: number[]): number | undefined {
    let minValue: number | undefined;
  
    for (const e of array) {
      if (e !== undefined && e !== null && e !== 0) {
        if (minValue === undefined || e < minValue) {
          minValue = e;
        }
      }
    }
  
    return minValue;

   // Poderia também utilizar o método .filter do array e o Math.min(), porém o desempenho seria prejudicado. 
    // Isso ocorre porque o .filter criaria um novo array do zero (alocando mais memória) e, além disso, haveria duas iterações separadas: 
    // uma durante o .filter e outra durante o Math.min, resultando em maior custo computacional
}