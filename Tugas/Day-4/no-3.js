const loop=()=>{
    return new Promise((resolve,rej)=>{
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => {
                console.log(i)
            }, 1000);
        }

    })
}

const log=()=>{
    return console.log('Done')
}
const caller = async () => {
    const res1 = await loop()
    const res2 =  log()
    return res1,res2
};

caller().then(res => {
    console.log(res)
})