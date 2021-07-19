import { siteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if (request.method === 'POST') {
        const TOKEN = 'e535fbac6981ebbf0916de5b341c39';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "975901", //sempre "string"...é o id do model no datocms, pq ele não correlaciona com o nome communities e sim com o id do model communities - pegar nos settings do model
            title: "comunidade teste",
            imageUrl: "https://github.com/danielemaraschin.png",
            creatorSlug: "danielemaraschin"
        })

        console.log(registroCriado);
        response.json({
            dados: 'response em JSON',
            registroCriado: registroCriado,
        })
        return;
    }
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no post sim.'
    })

}

// nome desse arquivo será o endereco HTTP: locahost:3000/nomeDesseArquivo
//http://localhost:3000/api/communities