import { fal } from "@fal-ai/client";
import { BaseModel } from "./BaseModel";

export  class FalAiModel  {
    constructor(){
        
    }

    public async generateImage(prompt: string, tensorpath: string){
        const {request_id, response_url} = await fal.queue.submit("fal-ai/flux-lora",{
            input:{
                prompt: prompt,
                loras: [{path: tensorpath, scale: 1}]
            }
        })
        return {request_id, response_url}
    }
    

    public async trainModel (zipUrl: string, triggerWords: string){
        const { request_id, response_url } = await fal.queue.submit("fal-ai/flux-lora-fast-training", {
            input:{
                images_data_url: zipUrl,
                trigger_word: triggerWords,
            },
            webhookUrl: `${process.env.WEBHOOK_URL}/fal-ai/webhook`
        })
        return {request_id, response_url}
    }
}

