// Devuelve el número entero que define la dimensión
// del arreglo o matriz en su mayor profundidad.
export function calcDimension(array: any, d = 0): any {
  if (!Array.isArray(array)) return d; // maxima profundidad
  let dimension = 1;
  for (let i = 0; i < array.length; i++) {
    const nd = calcDimension(array[i], d + 1);
    if (nd > dimension) dimension = nd;
  }
  return dimension;
}

// Devuelve true o false según el siguiente criterio:
//    -True: Si el arreglo o matriz contiene la misma cantidad
//          de elementos en cada una de sus dimensiones (Matriz uniforme).
//    -False: Caso contrario.

export function calcStraight(array: any): boolean {
  const sizes = calcArraySizes(array);
  const values: number[][] = Object.values(sizes);
  // Si todos los tamaños son iguales devuelve true
  return values.map((e) => e.every((i) => i == e[0])).every((i) => i == true);
}

// Calcula el tamaño de cada item de la matriz y los ordena por dimension
export function calcArraySizes(array: any, sizes: any = {}, d = 0): any {
  sizes = { ...sizes, [d]: [...(sizes[d] ?? []), calcItemSize(array)] };
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      sizes = calcArraySizes(array[i], sizes, d + 1);
    }
  }
  return sizes;
}

// Devuelve el tamaño de un item
//  x>=0: Si es un array.
//  x==0: Si es un numero.
export function calcItemSize(item: any): number {
  return Array.isArray(item) ? item.length : 0;
}

// Devuelve el número entero resultado de la suma de todos los
//números incluídos en la matriz sin importar el tamaño o dimensión.
export function computeArray(value: any): number {
  if (!Array.isArray(value)) return value;
  let sum = 0;
  for (let i = 0; i < value.length; i++) sum += computeArray(value[i]);

  return sum;
}
