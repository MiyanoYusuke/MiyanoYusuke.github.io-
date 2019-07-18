$(function(){  
    $("#applicationForm").validate({
        rules: {
            simei: {
                required: true
            },
            email :{
                required: true
            }
        },
        messages: {
            simei: {
                required: "必須項目です。ご入力お願いします。"
            },
            email: {
                required: "必須項目です。ご入力お願いします。",
                email: "Eメールの形式でご入力お願いします。"
            }
        }
    });
});
