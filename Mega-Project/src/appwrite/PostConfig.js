import config from "../config";
import { Client, ID, Databases, Storage, Query } from 'appwrite'

class Services {
    client = new Client;
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.AppwriteUrl)
            .setProject(config.AppwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {

            return await this.databases.createDocument(
                config.AppwriteDataBaseId,
                config.AppwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                })

        } catch (error) {
            console.log("serivces error ::  APPwrite PostConfig :: error ::  ", error)

        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.AppwriteDataBaseId,
                 config.AppwriteCollectionId,
                 slug,
                 {
                    title,
                    content,
                    featuredImage,
                    status

            })

        } catch (error) {
            console.log("App write ::Service config :: error ::  ",error)
        }

    }

    async DeletePost(slug){
        try {
             await this.databases.deleteDocument(config.AppwriteDataBaseId,config.AppwriteCollectionId,slug)
             return true;
        } catch (error) {
            console.log("App write :: Service delete :: error ",error )
        }

    }
}

const service = new Services();

export default service

