const paypalBody = `
<html lang="en">

<head>
    <meta charset="UTF-8">
    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
    <link rel="stylesheet" href="https://cdn.discordapp.com/attachments/658099251947110442/658320443740258305/css.css">
    <title>Paypal Proofs Generator</title>
</head>
<style>
  * {
    overflow: hidden;
  }
</style>
<body>
    <div class="payout">
        <img src="https://cdn.discordapp.com/attachments/658059622929924096/658416971406245899/checkout_paypal.png">

        <br><br>

        <p>You've sent {{VALUEPRICE}} to {{VALUEEMAIL}}</p>

        <br><br><br>

        <div class="header__nav--right">
            <div class="dx-auth-block profile__container">
                <div class="dx-auth-logged-out">
                    <a style="width: 50%; height: 8%; font-size: 18px;" href="#" class="css-1qlw6jl vx_btn vx_btn-block">Send More Money</a>
                </div>
            </div>
        </div>

        <a href="#" onclick="goHome()"><b>Go to Summary</b></a>
    <script>
        goHome = () => {
            window.location = "index.html"
        } 
    </script>
</body>

</html>
`
paypalProofGen = () => {
    const price = document.getElementById("price").value
    const category = document.getElementById("category").value
    const email = document.getElementById("email").value

    let valuePrice = ""
    if (category == "eur") {
        valuePrice = `${price} EUR`
    } else if (category == "usd") {
        valuePrice = `$${price} USD`
    } else if (category == "gpb") {
        valuePrice = `Â£${price} GPB`
    }


    document.write(paypalBody.replace("{{VALUEPRICE}}", valuePrice).replace("{{VALUEEMAIL}}", email))
}
