import { describe, it, expect } from '@jest/globals';
import ServiceTemperatura from '../src/services/temperatura.js';

describe('Testando celsius para fahrenheit', () => {
    it('Testando 0 graus celsius', () => {
        const fahrenheit = ServiceTemperatura.convertCelToFah(0);
        expect(fahrenheit).toBe(32);
    })
    it('Testando 10 graus celsius', () => {
        const fahrenheit = ServiceTemperatura.convertCelToFah(10);
        expect(fahrenheit).toBe(50);
    })
    it('Testando -25 graus celsius', () => {
        const fahrenheit = ServiceTemperatura.convertCelToFah(-25);
        expect(fahrenheit).toBe(-13);
    })
});

