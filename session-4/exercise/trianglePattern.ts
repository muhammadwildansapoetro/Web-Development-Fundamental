/*
Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10
● Parameters : height → triangle height
*/

function trianglePattern (height: number) {
    let result: string = "" // variabel penampung
    for (let i = 1; i <= height; i++) { // loop dimulai dari 1; loop selama i <= height; increment i
        let res: string = "" // variabel penampung
        for (let j = 1; j <= i; j++) { // loop dimuali dari 1; loop selama j <= i; increment j
            res += `${j} ` // res akhir = res awal + j
        }
        if (i !== height) res += `\n` // jika i tidak sama dengan height, maka res akhir = res awal + enter
        result += res // result akhir = result awal + res
    }
    return result // mengembalikan ke variable result
}

console.log(trianglePattern(5))