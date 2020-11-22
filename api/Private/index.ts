import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const fetch = require("node-fetch");

// Public accepts an object that consists of the method to be called and the request body
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.')
    const reqObj = req.body;
    console.log(reqObj.method);
    console.log(reqObj.data);
		const response = await fetch('https://showrunner-46b2.encoreapi.com/azure/'+reqObj.method, {
			method: 'POST',
			body: JSON.stringify(reqObj.data)
		})

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response.json
    };

};

export default httpTrigger;