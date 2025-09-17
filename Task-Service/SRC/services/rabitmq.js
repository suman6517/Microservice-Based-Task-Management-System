import amqp from "amqplib";
let chanels,connection;

async function connectRabitMqWithRetry(retries =5 , delay =3000)
{
    while(retries)
    {
        try 
        {
            connection = await amqp .connect("amqp://rabbitmq");
            chanels = await connection.createChannel();
            await chanels.assertQueue("task-created");
            console.log("Connected To RabbitMq Successfully");
            return;
            
        } 
        catch (error) 
        {
            console.error("Failed To Connect To RabbitMq" , error.message);
            retries--;
            console.error(`Retries Left ${retries}`);
            await new Promise(resolve => setTimeout(resolve,delay));

            
        }
    }
}

function getChannel()
{
    if(!chanels)
    {
        throw new Error("RabbitMq Is Not Connected");
    }
    return chanels;
}

export const RabitQueueService =
{
    connectRabitMqWithRetry,
    getChannel
    
}