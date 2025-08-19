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

    async updatePost(slug, { title, content, featuredImage, status }) {
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
            console.log("App write ::Service config :: error ::  ", error)
        }

    }

    async DeletePost(slug) {
        try {
            await this.databases.deleteDocument(config.AppwriteDataBaseId, config.AppwriteCollectionId, slug)
            return true;
        } catch (error) {
            console.log("App write :: Service delete :: error ", error)
            return false
        }

    }

    async GetPost(slug) {
        try {
            return await this.databases.getDocument(
                config.AppwriteDataBaseId,
                config.AppwriteCollectionId,
                slug

            )
        } catch (error) {
            console.log("App write :: Service GetPost:: error ", error)
            return false
        }
    }
    async GetPosts(queries = [Query.equal("Status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.AppwriteDataBaseId,
                config.AppwriteCollectionId,
                queries

            )
        } catch (error) {
            console.log("App write :: Service GetPosts:: error ", error)
            return false
        }
    }

    //file upload services

    async FileUplaod(file) {

        try {
            return await this.bucket.createFile(
                config.AppwriteDataBaseId,
                config.AppwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("App write :: Service FileUpload:: error ", error)
            return false
        }
    }
    async DeleteFile(FileId) {
        try {
            await this.bucket.deleteFile(
                config.AppwriteBucketId,
                FileId
            )
            return true

        } catch (error) {
            console.log("App write :: Service DeleteFile :: error ", error)
            return false
        }
    }
    async FilePreview(FileId) {
        try {
            return await this.bucket.getFilePreview(
                config.AppwriteBucketId,
                FileId
            )


        } catch (error) {
            console.log("App write :: Service FilePreview :: error ", error)
            return false
        }
    }

}

const service = new Services();

export default service

