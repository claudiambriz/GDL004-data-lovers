// importamos la función `getName y getEvolution`
import {getName, getEvolution} from '../src/JS/data.js';
import pokemons from '../src/data/pokemon/pokemon';

describe('getName', () => {
  it('debería ser una función', () => {
    expect(typeof getName).toBe('function');
  });

  it('Al ingresar Pikachu me regrese Pikachu(name)', ()=> {
    expect(getName(pokemons, 'Pikachu')[0].name).toBe('Pikachu');
  });
});

describe('getEvolution', () => {
  it('debería ser una función', () => {
    expect(typeof getEvolution).toBe('function');
  });

  it('Al ingresar Pikachu me regrese Raichu(name)', ()=> {
    expect(getEvolution(pokemons, 'Pikachu')[0].name).toBe('Raichu');  
  });
});
