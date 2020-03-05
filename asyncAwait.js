const displayMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, 3000);
    });
}

// promise without async 
/////////////////
// displayMessage('Hello').then(result => {
//     console.log('result', result);
//     displayMessage('Second').then(result => {
//         console.log('result', result);
//         displayMessage('Last').then(result => {
//             console.log('result', result);
//         }).catch(error => {
//             console.log('Error', error)
//         });
//     }).catch(error => {
//         console.log('Error second', error)
//     });;
// }).catch(error => {
//     console.log('Error last', error)
// });;


// async promise
/////////////////

const awaitFuntion = async () => {
    try {
        let result = '';
        result = await displayMessage('Hello');
        console.log(result);
        result = await displayMessage('Second');
        console.log(result);
        result = await displayMessage('Last');
        console.log(result);
    } catch (error) {
        console.log('Error', result)
    }
}

awaitFuntion();