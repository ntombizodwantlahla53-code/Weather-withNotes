function promiseFetchUserId(): Promise<string>{
    console.log("fetching user id")
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const userId = "user123";
            // if(err){
            //     return reject(new Error("failed top fetch user id"))
            // }
            resolve(userId);
        },1000)
    })
}

function promiseFetchUserDetails(userId: string): Promise<{name: string; email:string}>{
console.log(`fetching details for userId: ${userId}`);
 return new Promise((resolve,reject) => {
    setTimeout(() =>{
        const details = {name: "propropro", email: "promise@gmail.com"}
        resolve(details)
    },2000)
 })
}

function promiseSaveUserLog(userName: string, userEmail:string): Promise<string>{
    console.log(`Saving user log for ${userName} ,email: ${userEmail}`);
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const status = "Log Saved succesfully"
            resolve(status)
        },2000)
    })
}

// promiseFetchUserId().then((userId) => {
//     return promiseFetchUserDetails(userId)
// }).then((details) => {
//     return promiseSaveUserLog(details.name, details.email)
// }).then((logStatus) =>{
//     console.log("all operations completed successfully")
//     console.log("final status:", logStatus)
// }).catch((error) =>{
//     console.error("An error occured in the promise chain:", error.message)
// })


async function processUserData(): Promise<void>{
    try{
        console.log("starting async process");
        const userId = await promiseFetchUserId()
        const details = await promiseFetchUserDetails(userId)
        const logStatus = await promiseSaveUserLog(details.name, details.email);
        console.log("all operations completed successfully")
        console.log("final status:", logStatus)
    }catch (error: any){
        console.error("an error occured in this process:", error.message);

    }
}
processUserData();