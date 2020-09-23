var data;
const api_url='https://elevate-be-staging.azurewebsites.net/best-of-luck.php'
     function getApi()
    {
        fetch(api_url,{method:"POST"}).then(function(response) {
            response.json().then(function(unparsedJson) {
            data=JSON.parse(unparsedJson);
            console.log(data);
            var temp = data;
         //Add the Options to the DropDownList.
         var select = document.getElementById('sub_name');
         var arr=[];
         
         for(var j=0; j< temp.length; j++)
         {
             console.log(temp)
             for(var k=j+1; k<temp.length; k++)
             {
                 if(temp[k].subCode_dept_sem == temp[j].subCode_dept_sem)
                 {
                     if(temp[k].source != 'super')
                     {
                         temp.splice(k,1);
                     }
                 }
             }
             
         }
         arr = temp;
         var selector = document.getElementById('sub_code');
         for (var i = 0; i < arr.length; i++) {
             var option = document.createElement("option");
             var options = document.createElement("option");
             //Set Customer Name in Text part.
             option.innerHTML = arr[i].subject_name;
             options.innerHTML = arr[i].subject_code;
             //Set CustomerId in Value part.
             option.value = arr[i].subject_name;
             options.value = arr[i].subject_code;
             //Add the Option element to DropDownList.
             select.appendChild(option);
             selector.appendChild(options);
            }
         })
          }); 
          return data;

    }
   getApi();