# Bootstrap Cookie Consent
GDPR requires a website to only collect personal data from users after they have given their explicit consent to the specific purposes of its use.
Add a cookie consent to your website created with Bootstrap using the source of this repository.

## Look and Feel
![Demo image of this repository](https://static.fowd.de/Bootstrap-Cookie-Consent/demo.png)

## Usage
1. Make sure you have included all relevant components that are required for Bootstrap in your `<head>` section of your webpage.
```html
<!--Bootstrap Min CSS-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<!--popper js-->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<!--Bootstrap js-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
```

2. Include the "css/cookie-consent.css" and "js/cookie-consent.js" to your `<head>` section.
```html
<!--Cookie Consent-->
<link rel="stylesheet" href="./css/cookie-consent.css">
<script async src="./js/cookie-consent.js"></script>
```

3. Add the minimal HTML in the bottom of your `<body>` to get it working. You can also adjust the displayed text.
```html
<!--Begin Cookie Consent-->
<div class="cookie-consent alert alert-dark text-center mb-0" role="alert">
    We use cookies to ensure that we give you the best experience on our website. If you continue to use this site
    we will assume that you are happy with it.
    <a href="#" target="blank">Learn more</a>
    <button type="button" class="btn btn-primary btn-sm ml-3" onclick="window.hidecookieConsent()">
        OK
    </button>
</div>
<!--End Cookie Consent-->
```