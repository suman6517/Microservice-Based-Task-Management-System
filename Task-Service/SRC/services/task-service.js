import httpStatusCodes from "http-status-codes";
import Task from "../Models/TaskSchema.js";
import Apperror from "../Utils/Apperror.js";

async function Createtask(data) 
{
    try
    {
        const task = await Task.create(data);
        return task;

        
    }
    catch (error) 
    {
        throw new Apperror(error.message,httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
    
};

async function getAllTask () 
{
    try 
    {
        const Tasks = await Task.find();
        return Tasks;
    } 
    catch (error) 
    {
        throw new Apperror(error.message,httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export const TaskService={
    Createtask,
    getAllTask
}