import { UserService } from "../services/index.js";
import { SuccessResponse, ErrorResponse } from "../Utils/index.js";
import statusCodes from "http-status-codes";

async function userCreation(req,res) 
{
    try 
    {
        const user = await UserService.CreateUser({
            name:req.body.name,
            email:req.body.email
        });
        SuccessResponse.data = user;
        return res.status(statusCodes.CREATED).json(SuccessResponse);
    } 
    catch (error) 
    {
        ErrorResponse.message("Something Went wrong while Creating User");
        ErrorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
    
};
async function allUsers(req,res) 
{
    try
    {
        const users = await UserService.getAllUser();
        SuccessResponse.data = users;
        return res.status(statusCodes.OK).json(SuccessResponse);
        
    } 
    catch (error) 
    {
         ErrorResponse.message("Something Went wrong while Finding User");
        ErrorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

export{
    userCreation,
    allUsers,

}