class ServiceTemperatura {

    convertCelToFah(celsius) {
        if(isNaN(celsius)) {
            throw new Error("O valor deve ser um número");
        }
        return (celsius * 9/5) + 32;
    }

    convertFahToCel() {}

}

export default new ServiceTemperatura;