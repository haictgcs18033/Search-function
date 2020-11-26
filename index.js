var array=[
    {name:'Nguyen Van An',age:12,birthday:'18/6/2000'},
    {name:'Ho Van Binh',age:22,birthday:'19/7/2000'},
    {name:'Ho Van C',age:32,birthday:'14/5/2000'},
    {name:'Nguyen Van D',age:42,birthday:'10/8/2000'},
    {name:'Nguyen Van E',age:15,birthday:'16/9/2000'}
]
$('#search-input').on('keyup',function(){
    var value=$(this).val();
    console.log(value);
    var data=searchInput(value,array);
    renderTable(data);
})
// Search input
function searchInput(value,data){
    var filteredData=[];
    for(var i=0;i<data.length;i++){
        value=value.toLowerCase()
        var name=data[i].name.toLowerCase();
        if(name.includes(value)){
            filteredData.push(data[i])
        }
      
      
    }
    return filteredData
}

renderTable(array)
function renderTable(data){
    var tableContent='';
    for(var i= 0; i<data.length;i++){
tableContent+= `
<tr>
<td>${data[i].name}</td>
<td>${array[i].age}</td>
<td>${array[i].birthday}</td>
</tr>
`
    }
    document.getElementById('myTable').innerHTML=tableContent;
}