console.log('test');
var body = document.getElementsByTagName("body")[0];

function changeType(){
    document.getElementsByTagName("INPUT")[1].setAttribute("type","button");
    document.getElementsByTagName("INPUT")[0].setAttribute("style","background-color:red;");
}
function create(){
  // initial form value
  var form = document.forms['form'];
  // var name = form['name'].value;
  // var stuid = form['stuid'].value;

  var elements = document.getElementById("form").elements;
  var obj ={};
  for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      obj[item.name] = item.value;
  }
  console.log(obj);

  // var gender = form['gender'].value;
  // console.log('gender ' +gender);
  // var form = document.getElementsByTagName("form");
  // var inputs = form[0].getElementsByTagName("input");
  // var formData = {};
  // for(var i=0; i< inputs.length; i++){
  //    formData[inputs[i].name] = inputs[i].value;
  // }
  // console.log(formData);
  // for (var key in formData){
  //   console.log(formData[key]);
  // }

  // create table
  var body = document.getElementsByTagName('body')[0];
  var table = document.createElement("TABLE");
  // var tableArray = [
  //     ["Name", name],
  //     ["StuID", stuid],
  //     ["Gender", gender]
  // ];

  for(var key in obj)
  {
    if( key != "")
    {
      var tr = document.createElement("TR");
      var th = document.createElement("TH");
      var td = document.createElement("TD");
      table.appendChild(tr);
      tr.appendChild(th);
      tr.appendChild(td);
      th.appendChild(document.createTextNode(key));
      td.appendChild(document.createTextNode(obj[key]));

          setAttributes(th, {
            "style": "font-size:20px",
            "onmouseover": "this.className='mouseoverTH'",
            "onmouseout": "this.className='defaultTH'"
          })
    }
  }

  // for (i = 0; i < tableArray.length; i++) {
  //     var tr = document.createElement("TR");
  //     var th = document.createElement("TH");
  //     var td = document.createElement("TD");
  //     table.appendChild(tr);
  //     tr.appendChild(th);
  //     tr.appendChild(td);
  //     th.appendChild(document.createTextNode(tableArray[i][0]));
  //     td.appendChild(document.createTextNode(tableArray[i][1]));
  //     // setAttributes(th, {
  //     //   "class": "defaultTH",
  //     //   "onmouseover": "this.className='mouseoverTH'",
  //     //   "onmouseout": "this.className='defaultTH'"
  //     // })
  //     // setAttributes(td, {
  //     //     "class": "defaultTD",
  //     //     "onmouseover": "this.className='mouseoverTD'",
  //     //     "onmouseout": "this.className='defaultTD'"
  //     // });
  // }
  body.appendChild(table);
}


function setAttributes(element, attributes) {
    for (var attribute in attributes) {
        console.log(element);
        element.setAttribute(attribute, attributes[attribute]);
    }
}
