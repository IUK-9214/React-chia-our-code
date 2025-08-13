import config from "../config";
import { Client,Account,ID } from "appwrite";

export class AuthServices{
client=new Client;
account;

constructor (){
    this.client
    .setEndpoint(config.AppwriteUrl)
    .setProject(config.AppwriteProjectId)
    this.account=new Account(this.client)
        
}


}

const authServices = new AuthServices();

export default authServices