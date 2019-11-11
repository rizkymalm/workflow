$("#validate-frm").validate({
    rules: {
        prname: {
            required: true,
            number : false
        },
        firstname: {
            required : true,
            lettersonly : true
        },
        lastname: {
            required : true,
            lettersonly : true
        },
        username: {
            required : true,
            lettersonly : true
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            number: true
        },
        url: "true",
        comment:"required",
        price:{
            required : true
        },
        stock:{
            number : true
        },
        catprd: {
            required : true
        },
        img_prd: {
            required : true
        }
    },
    messages: {
        prname: {
            required: "Produk tidak boleh kosong"
        },
        firstname: {
            required: "Kolom ini tidak boleh kosong",
            lettersonly: "Gunakan huruf saja"
        },
        lastname: {
            required: "Kolom ini tidak boleh kosong",
            lettersonly: "Gunakan huruf saja"
        },
        username:{
            required: "Kolom ini tidak boleh kosong",
            lettersonly: "Gunakan huruf saja"
        },
        phone:{
            required: "Kolom ini tidak boleh kosong",
            number : "Gunakan angka saja"
        },
        email: "Harap isi dengan alamat email valid",
        url: "Tolong isi sesuai dengan url!",
        comment: "Tolong isi komentar Anda!",
        number : "Gunakan angka saja",
        price: {
            required : "Kolom ini tidak boleh kosong"
        },
        stock: {
            number : "Gunakan angka saja",
            required : "Kolom ini tidak boleh kosong"
        },
        catprd: {
            required : "Pilih salah satu"
        }
    }
});