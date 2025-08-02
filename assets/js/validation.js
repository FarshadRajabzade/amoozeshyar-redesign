const validation = new JustValidate('#login-form');


validation
    .addField('#username', [
        {
            rule: 'required',
            errorMessage: 'لطفا نام کاربری خود را وارد کنید'
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 30,
        },
    ])
    .addField('#password', [
        {
            rule: 'required',
            errorMessage: 'لطفا رمز عبور را وارد کنید',
        }
    ]);