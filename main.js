function add() {
    let a1 = document.getElementById("a1").value
    let a2 = document.getElementById("a2").value
    let a3 = document.getElementById("a3").value
    let a4 = document.getElementById("a4").value
    
    let first_value = [a1,a2,a3,a4]
    // console.log("first_value")



    let b1 = document.getElementById("b1").value
    let b2 = document.getElementById("b2").value
    let b3 = document.getElementById("b3").value
    let b4 = document.getElementById("b4").value
    
    let secound_value = [b1,b2,b3,b4]
    // console.log("secound_value")
    
    let c1 =first_value[0] + secound_value [0]
    let c2 =first_value[1] + secound_value [1]
    let c3 =first_value[2] + secound_value [2]
    let c4 =first_value[3] + secound_value [3]

    let result = [c1, c2 ,c3 , c4]

    // console.log(result)


    let result1 = document.getElementById("c1").value
    let result2 = document.getElementById("c2").value
    let result3 = document.getElementById("c3").value
    let result4 = document.getElementById("c4").value

    result.value=result[0]

    result.value=result[1]

    result.value=result[2]

    result.value=result[3]


}