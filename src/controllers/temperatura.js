import ServiceTemperatura from '../services/temperatura.js';
class ControllerTemperatura {
    ConvertCelToFah(req, res) {
        try {
            const celsius = req.body.celsius;
            const fahrenheit = ServiceTemperatura.convertCelToFah(celsius);

            res.status(200).send({ data: { celsius, fahrenheit } });
        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    }
    ConvertFahToCel(req, res) {
        try {

        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    }
}

export default new ControllerTemperatura()