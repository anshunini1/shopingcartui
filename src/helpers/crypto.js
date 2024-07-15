const JSEncrypt = require('nodejs-jsencrypt').default;
var encrypt = new JSEncrypt()
   export  const encryptString = (plaintext) => {
    return new Promise((resolve,reject)=>{  
        if(window.hasOwnProperty("publicKey"))
        {
            encrypt.setPublicKey(window.publicKey);
            resolve( encrypt.encrypt(plaintext))
        }
           else
           {
            reject ("Config Fetch Error")
           }
    } )
}

