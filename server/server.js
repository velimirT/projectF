const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const braintree = require("braintree");
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', './build');
const searchRoutes = require('./searchRoutes');
const routesLogin = require('./loginRoutes');

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY
});

searchRoutes(app);
routesLogin(app);

app.get("/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

app.post("/checkout", function (req, res) {
  var nonceFromTheClient = req.body.payment_method_nonce;
  var amount = req.body.amount;

  // Use payment method nonce here
  makeTransaction(nonceFromTheClient, amount);
  //if returned value from makeTransaction is fals, return error instead of the success message
  res.send("OKaay man! Transaction submitted");
});

function makeTransaction(nonceFromTheClient, amount){

  gateway.transaction.sale({
	  amount: parseFloat(amount),
	  paymentMethodNonce: nonceFromTheClient,
	  options: {
	    submitForSettlement: true
	  }
	}, function (err, result) {
	 if(err){
     console.log(err);
     return;    
   }

   console.log("SUccessfull Transaction!", result);

	});
}

app.listen(PORT, () => {
  console.log('Server is up');
});