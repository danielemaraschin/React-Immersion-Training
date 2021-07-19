
export default async function recebedorDeRequests(request, response) {
    const TOKEN = 'e535fbac6981ebbf0916de5b341c39';
    console.log("token: ",TOKEN);
    response.json({
        dados: 'response em JSON'
    })
}