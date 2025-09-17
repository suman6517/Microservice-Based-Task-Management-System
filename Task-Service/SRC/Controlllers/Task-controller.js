import { TaskService } from "../services/index.js";
import { SuccessResponse, ErrorResponse } from "../Utils/index.js";
import statusCodes from "http-status-codes";

async function taskCreation(req,res) 
{
    try 
    {
        const task = await TaskService.Createtask({
            title:req.body.title,
            decreption:req.body.decreption,
            TaskId:req.body.TaskId
        });
        SuccessResponse.data = task;
        return res.status(statusCodes.CREATED).json(SuccessResponse);
    } 
    catch (error) 
    {
        
         ErrorResponse.message = "Something Went wrong while Creating Task";
         ErrorResponse.error = error;
         return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }
    
};
async function allTasks(req,res) 
{
    try
    {
        const Tasks = await TaskService.getAllTask();
        SuccessResponse.data = Tasks;
        return res.status(statusCodes.OK).json(SuccessResponse);
        
    } 
    catch (error) 
    {
         ErrorResponse.message("Something Went wrong while Finding Tasks");
        ErrorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

export{
    taskCreation,
    allTasks,

}