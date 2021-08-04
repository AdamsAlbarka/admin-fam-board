$(document).ready(function () {
    // alert("Hello")
    $('#btn-toggleclick').on('click', function () {
       $(".sidebar").toggle(1000)
    //    if ("#btn-toggleclick") {
    //     $('#btn-toggleclick').hide(function(e) {
    //         e.show("fa fa-fw fa-envelope") 
    //     })
    //    }
    });
});

 // Put the HTML IDs in Variables
 var trf = document.getElementById("trf");
 var sf = document.getElementById("sf");
 var sd = document.getElementById("sd");
 var as = document.getElementById("as");
 var nas = document.getElementById("nas"); 
 var otd = document.getElementById("otd");

fetch("https://fambook.online/adminboard")
.then(function (resp) {
  return resp.text();
})
.then(function (data) {
    console.log(JSON.stringify(data))
    const dataArray = JSON.parse(data);
    $('#trf').html(dataArray.TRF);
    $('#sf').html(dataArray.SF);
    $('#sd').html(dataArray.SD);
    $('#as').html(dataArray.AS);
    $('#nas').html(dataArray.NAS);
    // $('#otd').html(dataArray.TRF);

    

    // The function calls itself here
})
.catch(function (err) {
  console.log(err);
});
