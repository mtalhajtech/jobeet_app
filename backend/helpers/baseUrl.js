import "dotenv/config";
function getBaseUrl (req){
    const protocol = req.protocol;
    const host = req.hostname;
    
    // If your server runs on a specific port, include it
    const port = req.app.settings.port || process.env.PORT;

    const baseUrl = `${protocol}://${host}${port ? `:${port}` : ''}/`;
   
    
    return baseUrl
}
export default getBaseUrl