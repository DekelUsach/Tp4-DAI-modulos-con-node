import { parse } from 'url';

function parsearUrl(direccionUrl) {
    try {
        const parsedUrl = parse(direccionUrl, true);

        if (!parsedUrl.protocol || !parsedUrl.host) {
            throw new Error("esta mal la url, le falta el host o el protocolo ): ");
        }

        const parametrosPlano = { ...parsedUrl.query };

        return {
            host: `${parsedUrl.protocol}//${parsedUrl.host}`,
            pathname: parsedUrl.pathname,
            parametros: parametrosPlano
        };
    } catch (error) {
        console.error("La URL esta mal!");
        console.error(error.message);
        return null;
    }
}

export default parsearUrl;
