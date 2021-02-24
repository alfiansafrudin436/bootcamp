const kelompok1=[]
const kelompok2=[]
const kelompok3=[]
const kelompok4=[]
const kelompok5=[]
const kelompok6=[]
const kelompok7=[]
const kelompok8=[]
const kelompok9=[]
const kelompok10=[]

const randomData=(jumlah)=>{
    for (let i=1; i<=jumlah;i++)
    {
        let data_random=Math.floor(Math.random()*100)
        if(i<=10){
            kelompok1.push(data_random)
        }else if(i>10 && i<=20){
            kelompok2.push(data_random)
        }else if(i>20 && i<=30){
            kelompok3.push(data_random)
        }else if(i>30 && i<=40){
            kelompok4.push(data_random)
        }else if(i>40 && i<=50){
            kelompok5.push(data_random)
        }else if(i>50 && i<=60){
            kelompok6.push(data_random)
        }else if(i>60 && i<=70){
            kelompok7.push(data_random)
        }else if(i>70 && i<=80){
            kelompok8.push(data_random)
        }else if(i>80 && i<=90){
            kelompok9.push(data_random)
        }
        else{
            kelompok10.push(data_random)
        }
    }
    const nilaiMax=(data)=>{
        return Math.max(...data)
    }
    const mean=(data)=>{
        let jumlah=0
        for (let i=0; i<data.length; i++){
            jumlah=jumlah+data[i]
        }
        return jumlah/data.length
    }

    const sortingASC=(data)=>{
        return data.sort()
    }


    console.log(`Kelompok 1 : ${kelompok1}`)
    console.log(`Kelompok 2 : ${kelompok2}`)
    console.log(`Kelompok 3 : ${kelompok3}`)
    console.log(`Kelompok 4 : ${kelompok4}`)
    console.log(`Kelompok 5 : ${kelompok5}`)
    console.log(`Kelompok 6 : ${kelompok6}`)
    console.log(`Kelompok 7 : ${kelompok7}`)
    console.log(`Kelompok 8 : ${kelompok8}`)
    console.log(`Kelompok 9 : ${kelompok9}`)
    console.log(`Kelompok 10 : ${kelompok10}`)

    console.log("\n")
    console.log(`nilai maksimal kelompok 1 : ${nilaiMax(kelompok1)}`)
    console.log(`nilai maksimal kelompok 2 : ${nilaiMax(kelompok2)}`)
    console.log(`nilai maksimal kelompok 3 : ${nilaiMax(kelompok3)}`)
    console.log(`nilai maksimal kelompok 4 : ${nilaiMax(kelompok4)}`)
    console.log(`nilai maksimal kelompok 5 : ${nilaiMax(kelompok5)}`)
    console.log(`nilai maksimal kelompok 6 : ${nilaiMax(kelompok6)}`)
    console.log(`nilai maksimal kelompok 7 : ${nilaiMax(kelompok7)}`)
    console.log(`nilai maksimal kelompok 8 : ${nilaiMax(kelompok8)}`)
    console.log(`nilai maksimal kelompok 9 : ${nilaiMax(kelompok9)}`)
    console.log(`nilai maksimal kelompok 10 : ${nilaiMax(kelompok10)}`)

    console.log("\n")
    console.log(`Rata-rata kelompok 1 : ${mean(kelompok1)}`)
    console.log(`Rata-rata kelompok 2 : ${mean(kelompok2)}`)
    console.log(`Rata-rata kelompok 3 : ${mean(kelompok3)}`)
    console.log(`Rata-rata kelompok 4 : ${mean(kelompok4)}`)
    console.log(`Rata-rata kelompok 5 : ${mean(kelompok5)}`)
    console.log(`Rata-rata kelompok 6 : ${mean(kelompok6)}`)
    console.log(`Rata-rata kelompok 7 : ${mean(kelompok7)}`)
    console.log(`Rata-rata kelompok 8 : ${mean(kelompok8)}`)
    console.log(`Rata-rata kelompok 9 : ${mean(kelompok9)}`)
    console.log(`Rata-rata kelompok 10 : ${mean(kelompok10)}`)

    console.log("\n")
    console.log(`Sorting kelompok 1 : ${sortingASC(kelompok1)}`)
    console.log(`Sorting kelompok 2 : ${sortingASC(kelompok2)}`)
    console.log(`Sorting kelompok 3 : ${sortingASC(kelompok3)}`)
    console.log(`Sorting kelompok 4 : ${sortingASC(kelompok4)}`)
    console.log(`Sorting kelompok 5 : ${sortingASC(kelompok5)}`)
    console.log(`Sorting kelompok 6 : ${sortingASC(kelompok6)}`)
    console.log(`Sorting kelompok 7 : ${sortingASC(kelompok7)}`)
    console.log(`Sorting kelompok 8 : ${sortingASC(kelompok8)}`)
    console.log(`Sorting kelompok 9 : ${sortingASC(kelompok9)}`)
    console.log(`Sorting kelompok 10 : ${sortingASC(kelompok10)}`)

    console.log("\n")


}
randomData(100)