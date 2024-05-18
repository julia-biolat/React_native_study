export const getRandomSixNumber = ()=>{
    const numberArray = [];

    while(numberArray.length < 6){
        const number = (Math.floor(Math.random() * 45)) + 1;

        //중복 있는지 체크
        const hasNumber = numberArray.filter((prev)=> prev === number).length > 0;
        
        //중복 없을때만 넣어줌
        if(!hasNumber)
            numberArray.push(number);

    }
    //오름차순으로 함.
    return numberArray.sort((numA, numB)=> numA - numB);
}