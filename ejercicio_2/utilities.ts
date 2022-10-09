// Valida si la cadena tiene los cojuntos de parentesis perfectamente cerrados
// Y Luego valida si no hay algun tipo de letra o simbolo no permitido.
// Devuelve true si todo esta perfecto.
export const checkValue = (value: string): boolean => {
  value = cleanSpaces(value);
  const r = /^(?!$)(?:[^)(]*\([^()A-z!-&{-}'"]+\))*[^)(]*$/;
  const a = /^[^\sA-z!-&{}'"|?=]*$/;
  return new RegExp(r).test(value) && new RegExp(a).test(value);
};

// Elimina todos los espacios en blanco de una cadena
export const cleanSpaces = (value: string): string => {
  return value.replace(/\s*/g, "");
};

// Resuelve la cada parentesis y luego reemplaza la posicion con
// el resultado.
// Si no hay parentesis por resolver, entonces devuelve el resultado
export const computeString = (value: string): number => {
  value = cleanSpaces(value);
  const s = /\((?<=\()[^()]*?(?=\))\)/;
  const matches = value.match(s);
  if (matches && matches.length > 0) {
    value = value.replace(s, resolveString(matches[0]));
    return computeString(value);
  } else {
    return resolveString(value);
  }
};

// Resulve la operacion dentro de una cadena
export const resolveString = (value: string) => {
  return eval(value);
};
