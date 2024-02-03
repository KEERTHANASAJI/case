function getData(){
    // console.log("Button clicked")
    // step1: create an xhr object
    var xhr=new XMLHttpRequest();
    console.log("unsent",xhr.readyState);

    // step2: request specification
    // xhr.open("get","input.txt",true);part1
    // xhr.open("get","data.json",true);part2
    xhr.open("get","https://jsonplaceholder.typicode.com/users",true)
    console.log("open",xhr.readyState);

    // step3: sending the request
    xhr.send();

    // step4: create an event listener
    xhr.onreadystatechange=function(){
        console.log("done",xhr.readyState);
        if(xhr.readyState==4 && xhr.status==200){
            // var data=this.responseText;part1
            var data=JSON.parse(this.responseText);
            console.log(data);
            var output=`<tr>
            <th>Task</th><th>Status</th>
            </tr>`
            for(let i=0;i<data.length;i++){
                // output +=`<ul><li>${data[i].userId}</li></ul>` 
                if(data[i].completed==true){
                output +=`
                
                <tr>
                <td>${data[i].title}</td>
                <td><input type="checkbox checked="true" disabled="true></input></td>

                </tr>`}
                else{
                    output +=`<tr>
                    <td>${data[i].title}</td>
                   <td><input class="form-check-input" type="checkbox"  onclick="val(this)" id="box"></input></td></tr>`
                  
                }
                
            }
            }
            // document.getElementById("s").innerHTML=output;
            document.getElementById("tb").innerHTML=output;
        }
        count=0;
        function val(c){
            if(c.checked){
                count++;
                console.log(object);
                displaymsg();
            }
            else{
                count=--
            }
        }
        function displaymsg (){
            let promiseFn=new Promise(function(resolve,reject){
                if(count==5){
                    resolve("")
                }
            })
        }
    }
