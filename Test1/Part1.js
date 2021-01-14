//Problem Solving

//Nhập vào 2 mảng A1 và a2 đầu ra trả về một mảng mới chứa các phần tử khác nhau của 2 mảng
let a = [1,2,"a"];
let b = [1,3, "b"];

function sort(num1,num2){
    for(let i=0;i<num1.length;i++){
        if(num1[i]!= num2[i]){
            console.log(num1[i], num2[i]);
        }
    }
}
sort(a,b);



//Bai 2
//Test Case
let ranking = [
{
    name: "Arsenal",
    points: 99,
    GD: 45
},

{
    name: "Chelsea",
    points: 75,
    GD: 39
},
{
    name: "Man United",
    points:60,
    GD: 29
},
{
    name: "Liverpool",
    points: 88,
    GD: 39
},
]
function rank(ranking){
for(let i =0; i<ranking.length-1;i++){
    for(let j=0; j<ranking.length-1-i; j++){
        if(ranking[j].points<ranking[j+1].points){
            const temp = ranking[j];
            ranking[j] = ranking[j+1];
            ranking[j+1]=temp
        }
        else if (ranking[j].points === ranking[j+1].points){
            if(ranking[j].GD < ranking[j+1].GD){
                const temp = ranking[j];
                ranking[j] = ranking[j+1];
                ranking[j+1]=temp

            }
        }
        else if(ranking[j].points === ranking[j+1].points && ranking[j].GD === ranking[j+1].GD) {
            if(ranking[j].name < ranking[j+1].name){
                const temp = ranking[j];
                ranking[j] = ranking[j+1];
                ranking[j+1]=temp

            }
        }

        }
        
    }
    
}

console.log(ranking); 


rank(ranking)