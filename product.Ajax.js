var Ajax = {
    GetList: function (details, callbackSuccess) {
          $.ajax({
              type: "POST",
              url: "/Prod/api/ProductApi/GetProdList/",
              data: productdetails,
              traditional: true,
               dataType: "json",
              success: function (data) {
                  if ($.isFunction(callbackSuccess)) { callbackSuccess(data); }
              },
              error: function (request, status, error) {
                if ($.isFunction(callbackError)) { callbackError(); }
            }
          });

    },
      saveNewProduct: function (productdetails, callbackSuccess, callbackError) {
        $.ajax({
            type: "POST",
            url: "/Prod/api/ProductApi/AddNewProd/",
            traditional: true,
            data: productdetails,
            dataType: "json",
            success: function (data) {
                if ($.isFunction(callbackSuccess)) { callbackSuccess(data); }
            },
            error: function (request, status, error) {
                if ($.isFunction(callbackError)) { callbackError(); }
            }
        });
    },
    }
