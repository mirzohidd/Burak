console.log("Products frontend javascript file");
$(function () {
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();

    if (selectedValue === "DRINK") {
      $("#product-collection").hide();
      $("#product-volume").show();
    } else {
      $("#product-volume").hide();
      $("#product-collection").show();
    }
  });

  $("#process-btn").on("click",()=>{
    $(".dish-container").slideToggle(500);
    $("#process-btn").css("display","none");

  })
  $("#cancel-btn").on("click",function(e){
    e.preventDefault();
    $(".dish-container").slideToggle(100);
    $("#process-btn").css("display","flex");

  })
});
function validateForm() {
  const productName = $(".product-name").val(),
    productPrice = $(".product-price").val(),
    productLeftCount = $(".product-left-count").val(),
    productCollection = $(".product-collection").val(),
    productDesc = $(".product-desc").val(),
    productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all required inputs");
    return false;
  } else return true;
}

function previewFileHandler(input, order) {
  const imgClasname = input.className;
  console.log("input:", input);
  console.log("imgClassname", imgClasname);
  const file = $(`.${imgClasname}`).get([0]).files[0];
  const fileType = file["type"];
  const validateImageType = ["image/jpg", "image/jpeg", "image/png"];
  if (!validateImageType.includes(fileType)) {
    alert("Please insert only jpeg ,jpg and png!");
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
