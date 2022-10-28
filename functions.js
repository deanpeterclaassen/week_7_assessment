function addToZero(arr){
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length;j++){
            if(i !==j){
            if(arr[i]+arr[j]===0){
                return  true}
            }
        }
    } return false
}

 
console.log(addToZero([1, 2,-2]))
//runtime of addToZero would be O(n^2)

function hasUniqueChars(string){
    let unique = false
    let setString = new Set(string)
    if(setString.size === string.length){
        unique = true
    }
    return unique
}
console.log(hasUniqueChars('Moonday'))
//runtime of hadUniqueCharacters would be O(1)

function isPangram(string){
    let pangram = false
    let all = new Set('abcdefghijklmnopqrstuvwxyz')
    for(let i of string.toLowerCase()){
        all.delete(i)
        if(all.size === 0){
            pangram = true
        }
    } return pangram
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
//runtime of isPangram would be O(n)

function findLongestWord(arr){
    let longest = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length > longest){
              longest = arr[i].length
        }
    } return longest
}

console.log(findLongestWord(["hi", "hello",'rertyuytrertyuytre']))
//runtime of findLongestWord would be O(n)