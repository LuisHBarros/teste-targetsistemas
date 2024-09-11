function max_faturamento(array: number[]) {
    const filtro = array.filter((e) => e !== undefined && e !== null && e !== 0);
    Math.max(...filtro);
  }