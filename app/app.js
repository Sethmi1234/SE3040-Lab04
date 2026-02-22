feature-Sethmi-promises
const myPromise = new Promise((resolve, reject) => { 
  if (condition) { 
    resolve('Success!'); 
  } else { 
    reject('Failure!'); 
  } 
}); 
 
myPromise.then((result) => { 
  console.log(result); 
}).catch((error) => { 
  console.log(error); 
});

async function myFunction() { 
  try { 
    const result = await myPromise; 
    console.log(result); 
  } catch (error) { 
    console.log(error); 
  } 
} 
 
myFunction();
 main
