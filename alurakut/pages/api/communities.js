import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = 'e535fbac6981ebbf0916de5b341c39';
        const client = new SiteClient(TOKEN);

        // Deviamos validar os dados antes de sair cadastrando, mas nao vamos
        const registroCriado = await client.items.create({
            itemType: "975901", //sempre "string"...é o id do model no datocms, pq ele não correlaciona com o nome communities e sim com o id do model communities - pegar nos settings do model
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/omariosouto.png",
            // creatorSlug: 
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}
// nome desse arquivo será o endereco HTTP: locahost:3000/nomeDesseArquivo
//http://localhost:3000/api/communities