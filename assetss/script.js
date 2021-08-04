$(document).ready(function () {
    // alert("Hello")
    $('#sidebar-hide').hide()
    $('#btn-toggleclick').on('click', function () {
       $(".sidebar").toggle(1000)
    //    if ("#btn-toggleclick") {
    //     $('#btn-toggleclick').hide(function(e) {
    //         e.show("fa fa-fw fa-envelope") 
    //     })
    //    }
    });
});

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
    // $('#otd').html(dataArray.TRF); TESTRUN
})
.catch(function (err) {
  console.log(err);
});
