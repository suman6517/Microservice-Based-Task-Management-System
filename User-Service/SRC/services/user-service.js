import httpStatusCodes from "http-status-codes";
import User from "../Models/UserSchema.js";
import Apperror from "../Utils/Apperror.js";

async function CreateUser(data) 
{
    try
    {
        const user = await User.create(data);
        return user;

        
    }
    catch (error) 
    {
        throw new Apperror(error.message,httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
    
};

async function getAllUser () 
{
    try 
    {
        const users = await User.find();
        return users;
    } 
    catch (error) 
    {
        throw new Apperror(error.message,httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export const UserService={
    CreateUser,
    getAllUser
}