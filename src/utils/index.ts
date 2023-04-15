const responseApi = (response: Response)=>{
    return new Promise(async(reslove,reject)=>{
        const responseData = await response.json()
        if(response.ok){
            reslove(responseData)
        }
        else{
            reject(responseData.error_msg)
        }
    })
}
export default responseApi

export const resloveTime = (data:any)=>{
    return new Promise((reslove:(data:any)=>void)=>setTimeout(()=>reslove(data),3000))
}

export const BidonSuccess  = (
    response:Promise<any>,
    onSuccess:(data:any)=>void,
    onFailure:(err:any)=>void
)=>{
    response.then((data)=>{
        onSuccess(data)
    })
    .catch((err)=>{
        onFailure(err)
    })
}


export const isTablet = `@media screen and (min-width: 768px) and (max-width: 1024px)`