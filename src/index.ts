// function fetchData(): Promise<string>{
//     return new Promise((resolve) =>{
//         setTimeout(() =>{
//             resolve("Data fetched successfully")
//         },2000)
//     })
// }
// async function getData(){
//     console.log("fetching data...")
//     const data = await fetchData()
//     console.log("data prosecing complete")
// }
// getData()

// console.log("program continues while data is being fetched");





// async function fetchUserData(userId:number): Promise<{id:number; name:string; email:string}> {
//     await delay(4000)
//     return {
//         id: userId,
//         name: `user ${userId}`,
//         email: `user ${userId}@nnn.co.za`

//     }
// }
// function delay(ms:number): Promise<void>{
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// async function main(): Promise<void>{
//     try{
//         console.log("starting to fetch user data")
//         const user = await fetchUserData(123)

//         console.log("User Data received:", user)
//         console.log("lets do a task")
//     } catch (error){
//         console.log("Error fetching user data:",error);
//     }
// }

// main();

// console.log("doing another task")








// function fetchUserId(callback:(error: Error | null, userId?: string) =>void){
//     console.log("fetching userId")
//     setTimeout(() =>{
//         const userId = "user 123"
//         callback(null, userId)
//     },2000)
// }

// function fetchUserDetails(userId:string ,callback: (error: Error | null, details?: {name:string; email:string}) =>void){
//     console.log(`fetching details for userId:, ${userId}`);
//     setTimeout(() =>{
//         const details ={name:"zzz" , email:"adas@gmail.com"}
//         callback(null ,details)
//     },3000)
// }

// function saveUserLog(userName: string, userEmail: string, callback: (error: Error | null, logStatus?: string) =>void){
//     console.log(`saving log for ${userName} with ${userEmail}`);
//     setTimeout(() =>{
//         const status = "log saved successfully"
//         callback(null, status)
//     },3000)
// }

// fetchUserId((error, userId) =>{
//     if(error){
//         console.error("error fetching user Id", error.message)
//         return;
//     }
//     if (userId){
//         fetchUserDetails(userId, (error, details) =>{
//             if(error){
//                 console.log("error fetching user details", error.message)
//                  return;
//             }
        
//     if (details){
//         saveUserLog(details.name, details.email, (error, logStatus) =>{
//             if(error){
//                 console.log("error is saving user details", error.message)
//                  return;
//             }
//             if(logStatus){
//                 console.log("all operations completed successfully")
//                 console.log("final status:", logStatus)
//             }
//             })
//             }
//         })
//     }
// })



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