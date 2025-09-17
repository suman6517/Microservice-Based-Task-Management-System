import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: String,
    decreption: String,
    TaskId:String,
    createdAt:{
        type:Date,
        default:Date.now
    }

});
export default mongoose.model("Task", TaskSchema);