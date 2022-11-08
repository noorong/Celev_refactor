// $(document).ready(function () {
//   var activeCat = "";
//   function filterGroup(group) {
//     if (activeCat != group) {
//       $("div")
//         .filter("." + group)
//         .show();
//       $("div")
//         .filter(":not(." + group + ")")
//         .hide();
//       activeCat = group;
//     }
//   }

//   $(".cat-all").click(function () {
//     $("div").show();
//     activeCat = "ㄴ";
//   });
//   $(".cat-1").click(function () {
//     filterGroup("group-1");
//   });
//   $(".cat-2").click(function () {
//     filterGroup("group-2");
//   });
//   $(".cat-3").click(function () {
//     filterGroup("group-3");
//   });
// });

$(document).ready(function () {
  $("#text").keyup(function () {
    var searchText = $(this).val();
    $("section").hide();
    if (searchText == "") {
      $("section").show();
    }
    var brand = $(
      "section > article > .pd_brd:contains('" + searchText + "')"
    )[0].id;
    $(`#${brand}`).parents().show();
    // console.log( $(`#${brand}`).parents());
  });
});

$(document).ready(function () {
  let activeCel = "";
  function filterGroup(group) {
    if (activeCel != group) {
      $("section")
        .filter("#" + group)
        .show();
      $("section")
        .filter(":not(#" + group + ")")
        .hide();
      activeCel = group;
    }
  }

  $("#all").click(function () {
    $(".pd_block").show();
    activeCel = "ㄴ";
  });

  $("#hot").click(function () {
    filterGroup("hot");
  });
  $("#idol").click(function () {
    filterGroup("idol");
  });
  $("#actor").click(function () {
    filterGroup("actor");
  });
  $("#sport").click(function () {
    filterGroup("sport");
  });
  $("#youtuber").click(function () {
    filterGroup("youtuber");
  });
  $("#etc").click(function () {
    filterGroup("etc");
  });
});

//category id 추가 > .cat-1 란 대체
//pd section에 id 추가 > group-1 대체

// $(document).ready(function () {
//     var activeCat = "";
//     function filterGroup(group) {
//       if (activeCat != group) {
//         $("div")
//           .filter("." + group)
//           .show();
//         $("div")
//           .filter(":not(." + group + ")")
//           .hide();
//         activeCat = group;
//       }
//     }

//     $(".cat-all").click(function () {
//       $("div").show();
//       activeCat = "ㄴ";
//     });
//     $(".cat-1").click(function () {
//       filterGroup("group-1");
//     });
//     $(".cat-2").click(function () {
//       filterGroup("group-2");
//     });
//     $(".cat-3").click(function () {
//       filterGroup("group-3");
//     });
//   });
