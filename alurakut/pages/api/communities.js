import {siteClient} from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    const TOKEN = 'e535fbac6981ebbf0916de5b341c39';
    const client = new SiteClient(TOKEN);

    console.log("token: ",TOKEN);
    response.json({
        dados: 'response em JSON'
    })
}

// nome desse arquivo será o endereco HTTP: locahost:3000/nomeDesseArquivo
//http://localhost:3000/api/communities