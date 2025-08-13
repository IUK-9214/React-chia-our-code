import config from "../config";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
    client = new Client;
    account;

    constructor() {
        this.client
            .setEndpoint(config.AppwriteUrl)
            .setProject(config.AppwriteProjectId)
        this.account = new Account(this.client)

    }
    //create an account service
    async createAccount({ email, password, name }) {

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // direct him to the login page 
                this.Login({ email, password })
            }
            else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }
    // create a login services 
    async Login({ email, password }) {

        try {

            return await this.account.createEmailPasswordSession(email, password)

        } catch (error) {
            throw error;
        }
    }

    //get alluser services
    async getCurrentUser() {
        try {
            return await this.account.get()

        } catch (error) {
            console.log(" Appwrite service :: getCurrentUser : :error ", error)
        }
        return null;
    }

    //logout all the user 
    async Logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log(" Appwrite service :: logout :: error  ", error)
        }

    }


}

const authServices = new AuthServices();

export default authServices