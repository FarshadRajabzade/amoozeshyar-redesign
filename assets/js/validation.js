const validation = new JustValidate('#login-form' , {
    errorLabelStyle: {
        display: 'none',
    },
    focusInvalidField: false,
});

validation
    .addField('#username', [
        {
            rule: 'required',
            errorMessage: 'لطفا نام کاربری خود را وارد کنید',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'حداقل ۳ کاراکتر وارد کنید'
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'حداکثر ۳۰ کاراکتر وارد کنید'
        },
    ])
    .addField('#password', [
        {
            rule: 'required',
            errorMessage: 'لطفا رمز عبور را وارد کنید',
        }
    ])
    .onFail((fields) => {
        Object.values(fields).forEach((field) => {
            if (field.errorMessage) {
                console.log(field.errorMessage)
                Toastify({
                    text: field.errorMessage,
                    duration: 4000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "#f44336",
                    stopOnFocus: true,
                }).showToast();
            }
        });
    })
    .onSuccess(( event ) => {
        Toastify({
            text: 'به آموزشیار خوش آمدید',
            duration: 4000,
            gravity: "top",
            position: "right",
            backgroundColor: "#0cd000",
            stopOnFocus: true,
        }).showToast();
});
