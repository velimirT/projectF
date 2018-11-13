import React from 'react';
import {hostedFields, client} from 'braintree-web';
import axios from 'axios';

export default class PayButton extends React.Component {

	state = {
				hostedFieldsInstance: null,
				token: null,
			}

	componentDidMount(){
		axios.get('http://localhost:3000/client_token').then(function(res){
			console.log("Response", res);
			this.setState({token: res.data});
			client.create({
			  authorization:  res.data
			}).then(function(clientInstance){
				this.createForm(clientInstance);
			}.bind(this)).catch(function(e){
				console.log("Err, ", e);
			});
		}.bind(this)).catch(function(e){
			console.log("Axios Err: ", e);
		});
		//axios request to get the client_authorization token
		
	}

	handleSubmit(e){
	  	e.preventDefault();
		this.state.hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
			if (tokenizeErr) {
				console.error(tokenizeErr);
				return;
			}
        	console.log('Got a nonce: ', payload.nonce);
        	axios.post('http://localhost:4000/checkout', {payment_method_nonce: payload.nonce, amount:'10'}).then(function(res){
        		console.log("Transaction response: ", res);
        	}).catch(function(e){
					console.log("Axios Err: ", e);
				});
	    });
	}

	createForm(clientInstance){
		 hostedFields.create({
		    client: clientInstance,
		    styles: {
		      'input': {
		        'font-size': '16px',
		        'font-family': 'courier, monospace',
		        'font-weight': 'lighter',
		        'color': '#ccc'
		      },
		      ':focus': {
		        'color': 'black'
		      },
		      '.valid': {
		        'color': '#8bdda8'
		      }
		    },
		    fields: {
		      number: {
		        selector: '#card-number',
		        placeholder: '4111 1111 1111 1111'
		      },
		      cvv: {
		        selector: '#cvv',
		        placeholder: '123'
		      },
		      expirationDate: {
		        selector: '#expiration-date',
		        placeholder: 'MM/YYYY'
		      },
		      postalCode: {
		        selector: '#postal-code',
		        placeholder: '11111'
		      }
		    }
		  }).then(function(hostedFieldsInstance) {
		    	this.setState({hostedFieldsInstance: hostedFieldsInstance})
		  }.bind(this)).catch((e)=>{
		  	console.log("Error Hosted Fileds: ", e);
		  });
	}


	render(){
		return(
			<section className = "filters">
				<h2>Pay Button</h2>
		             <div id = "card-number"/>
		             <div id = "cvv"/>
		             <div id = "expiration-date"/>
		             <div id = "postal-code"/>
		             <button onClick = {this.handleSubmit.bind(this)} >Submit</button>
			</section>
		)
	}
}