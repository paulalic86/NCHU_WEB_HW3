console.log('test');

function createTable(){
    // 取得來自Form欄位資料
    var form = document.forms['form'];
    var elements = document.getElementById("form").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    // 建立表格
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement("TABLE");
    for( var key in obj )
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
      }
    }
    body.appendChild(table);
}
