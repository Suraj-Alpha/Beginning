let getMyGrade = function(currentMarks,totalMarks)
{
    let myPercent = (currentMarks/totalMarks) * 100
    let myGrade = ''
    if(myPercent >= 90)
    {
        myGrade = 'A'
    }
    else if(myPercent >= 80)
    {
        myGrade = 'B'
    }
    else if(myPercent >= 70)
    {
        myGrade = 'C'
    }
    else if(myPercent >= 60)
    {
        myGrade = 'D'
    }
    else{
        myGrade = 'fail'
    }

    return `your grade is ${myGrade} and percentage is ${myPercent}`
}

let your_result = getMyGrade(92 , 1000)
console.log(your_result)