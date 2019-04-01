$(function(){
  $('#formOne').submit(function(event){
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();

    var formArr = [name, email, password];
    console.log(formArr);

    formArr.forEach(function(arr){
      $("#listMaster").append("<li class='list-item'>" + arr + "</li>");
    });

    event.preventDefault();
  });
});
    // var reverseArr = formArr.reverse();
    // console.log(reverseArr);
    //
    //
    // var newArr = formArr.slice(0);
    // console.log(newArr);
    //  formArr.pop([0]);
    // console.log(formArr);
    //
    // var newArr = function(arr){
    //   formArr.pop([0]);
    //   return <li> + formArr
    // }
    //
    // $("listMaster").append("<li class='list-item'>" + )
    //
  //   //   $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
  //   })
  // })
