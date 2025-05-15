console.log("Products frontend javascript file");
$(function () {
  $(".save-update-car").on("click",
    async function (e) {
      const id = e.target.id;

      const productName = $("#car-name-update").val();
      const productType = $("#car-category-update").val();
      const productYear = $("#car-year-update").val();
      const productFuel = $("#car-fuel-update").val();
      const productTransmission = $("#car-transmission-update").val();
      const productPrice = $("#car-price-update").val();
      const productMarka = $("#car-status-update").val();
      const description = $("#car-description-update").val();
      const productStatus = $("#car-status-update").val();
      const data = {
        productName: productName,
        productType: productType,
        productYear: productYear,
        productFuel: productFuel,
        productTransmission: productTransmission,
        productPrice: productPrice,
        productMarka: productMarka,
        description: description,
        productStatus: productStatus,
      };
      try {
        const response = await axios.post(`/admin/product/${id}`, {
          productName: productName,
          productType: productType,
          productYear: productYear,
          productFuel: productFuel,
          productTransmission: productTransmission,
          productPrice: productPrice,
          productMarka: productMarka,
          description: description,
          productStatus: productStatus,
        });
        const result = response.data;
        if (result.data) {
          location.reload(true);
        } else {
         
        }
      } catch (err) {
        console.log(err);
        alert("Product update failed");
      }
    },
   
  );

  $(".add-car-toggler").on("click", function (e) {
    $("#car-modal").toggleClass("show");
  });
  $(".modal-close").on("click", function (e) {
    console.log($(this));
    $(this).closest(".modal").removeClass("show");
  });
  $(".button-update-modal").on("click", function (e) {
    $("#car-modal-update").toggleClass("show");
    const id = e.target.id;
    $("#car-modal-update .form-actions .btn-primary").attr("id", id);
    axios
      .get(`/admin/product/${id}`)
      .then((response) => {
        const result = response.data;
        console.log(result);
        if (result.data) {
          $("#car-modal-update").show();

          $("#car-id-update").val(result.data.id);

          $("#car-name-update").val(result.data.productName);
          $("#car-category-update").val(result.data.productType);
          $("#car-year-update").val(result.data.productYear);
          $("#car-fuel-update").val(result.data.productFuel);
          $("#car-transmission-update").val(result.data.productTransmission);
          $("#car-price-update").val(result.data.productPrice);
          $("#car-status-update").val(result.data.productMarka);
          $("#car-description-update").val(result.data.description);
          $("#image-section-1-update").attr(
            "src",
            result.data.productImages[0]
              ? `/${result.data.productImages[0]}`
              : "/img/upload.svg"
          );
          $("#image-section-2-update").attr(
            "src",
            result.data.productImages[1]
              ? `/${result.data.productImages[1]}`
              : "/img/upload.svg"
          );
          $("#image-section-3-update").attr(
            "src",
            result.data.productImages[2]
              ? `/${result.data.productImages[2]}`
              : "/img/upload.svg"
          );
        } else {
          console.log("Get Product failed !");
        }
      })
      .catch(
        (err) => {
          console.log(err);

          alert("Product update failed !");
        },
      
      );
  });
});
function validateForm() {
  const productName = $(".product-name").val(),
    productPrice = $(".product-price").val(),
    productDesc = $(".product-desc").val(),
    productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all required inputs");
    return false;
  } else return true;
}

function previewFileHandler(input, order) {
  const imgClasname = input.className,
    file = $(`.${imgClasname}`).get([0]).files[0],
    fileType = file["type"],
    validateImageType = ["image/jpg", "image/jpeg", "image/png"];
  if (!validateImageType.includes(fileType)) {
    alert("Please insert only jpeg ,jpg and png!");
  } else {
    if (file) {
      $(input).parent().find(".file-name").hide();
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
