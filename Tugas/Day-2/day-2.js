const kelompokPertama=[]
const kelompokKedua=[]
const kelompokKetiga=[]
const randomData=(jumlah)=>{
    for (let i=1; i<=jumlah;i++)
    {
        let data_random=Math.floor(Math.random()*100)
        if(i<=33){
            kelompokPertama.push(data_random)
        }else if(i>33 && i<=66){
            kelompokKedua.push(data_random)
        }else{
            kelompokKetiga.push(data_random)
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


    console.log(`Kelompok pertama : ${kelompokPertama}`)
    console.log(`Kelompok kedua : ${kelompokKedua}`)
    console.log(`Kelompok ketiga : ${kelompokKetiga}`)
    console.log("\n")
    console.log(`nilai maksimal kelompok pertama : ${nilaiMax(kelompokPertama)}`)
    console.log(`nilai maksimal kelompok kedua : ${nilaiMax(kelompokKedua)}`)
    console.log(`nilai maksimal kelompok ketiga : ${nilaiMax(kelompokKetiga)}`)
    console.log("\n")
    console.log(`Rata-rata kelompok pertama : ${mean(kelompokPertama)}`)
    console.log(`Rata-rata kelompok kedua : ${mean(kelompokKedua)}`)
    console.log(`Rata-rata kelompok ketiga : ${mean(kelompokKetiga)}`)
    console.log("\n")
    console.log(`Sorting kelompok pertama : ${sortingASC(kelompokPertama)}`)
    console.log(`Sorting kelompok kedua : ${sortingASC(kelompokKedua)}`)
    console.log(`Sorting kelompok ketiga : ${sortingASC(kelompokKetiga)}`)
    console.log("\n")
    

}
randomData(100)