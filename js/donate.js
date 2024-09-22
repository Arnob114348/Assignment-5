document.getElementById('btn-noakhali-donate').addEventListener('click',function(){
    const donationAmount=inputFieldValue('input-noakhali-donate');
    const accountBalance=textFieldValue('account-balance');
    if(isNaN(donationAmount) || donationAmount<=0 || donationAmount>accountBalance)
    {
        alert('Invalid Donation. Please Try Again.');
        return;
    }
    const noakhaliDonation=textFieldValue('current-noakhali-donation');
    const newAccountBalance=accountBalance-donationAmount;
    const newDonationBalance=noakhaliDonation+donationAmount;
    document.getElementById('account-balance').innerText=newAccountBalance;
    document.getElementById('current-noakhali-donation').innerText=newDonationBalance;
    const history=document.getElementById('history');
    const card=document.createElement('div');
    card.classList.add('bg-white');
    const transaction=document.createElement('p');
    const text=`${donationAmount} taka is donated for Donate for Flood at Noakhali, Bangladesh`;
    transaction.innerText=text;
    transaction.classList.add('font-bold');
    const date=document.createElement('p');
    const currentDate = new Date(); 
    const datetime = "Date: " + currentDate.getDate() + "/"
                    + (currentDate.getMonth()+1)  + "/" 
                    + currentDate.getFullYear() + " @ "  
                    + currentDate.getHours() + ":"  
                    + currentDate.getMinutes() + ":" 
                    + currentDate.getSeconds();
    date.innerText=datetime;
    card.appendChild(transaction);
    card.appendChild(date);
    history.appendChild(card);
    document.getElementById('my_modal_5').showModal();
});

document.getElementById('btn-feni-donate').addEventListener('click',function(){
    const donationAmount=inputFieldValue('input-feni-donate');
    const accountBalance=textFieldValue('account-balance');
    if(isNaN(donationAmount) || donationAmount<=0 || donationAmount>accountBalance)
    {
        alert('Invalid Donation. Please Try Again.');
        return;
    }
    const feniDonation=textFieldValue('current-feni-donation');
    const newAccountBalance=accountBalance-donationAmount;
    const newDonationBalance=feniDonation+donationAmount;
    document.getElementById('account-balance').innerText=newAccountBalance;
    document.getElementById('current-feni-donation').innerText=newDonationBalance;
    const history=document.getElementById('history');
    const card=document.createElement('div');
    card.classList.add('bg-white');
    const transaction=document.createElement('p');
    const text=`${donationAmount} taka is donated for Donate for Flood Relief in Feni,Bangladesh`;
    transaction.innerText=text;
    transaction.classList.add('font-bold');
    const date=document.createElement('p');
    const currentDate = new Date(); 
    const datetime = "Date: " + currentDate.getDate() + "/"
                    + (currentDate.getMonth()+1)  + "/" 
                    + currentDate.getFullYear() + " @ "  
                    + currentDate.getHours() + ":"  
                    + currentDate.getMinutes() + ":" 
                    + currentDate.getSeconds();
    date.innerText=datetime;
    card.appendChild(transaction);
    card.appendChild(date);
    history.appendChild(card);
    document.getElementById('my_modal_5').showModal();
});

document.getElementById('btn-quota-donate').addEventListener('click',function(){
    const donationAmount=inputFieldValue('input-quota-donate');
    const accountBalance=textFieldValue('account-balance');
    if(isNaN(donationAmount) || donationAmount<=0 || donationAmount>accountBalance)
    {
        alert('Invalid Donation. Please Try Again.');
        return;
    }
    const quotaDonation=textFieldValue('current-quota-donation');
    const newAccountBalance=accountBalance-donationAmount;
    const newDonationBalance=quotaDonation+donationAmount;
    document.getElementById('account-balance').innerText=newAccountBalance;
    document.getElementById('current-quota-donation').innerText=newDonationBalance;
    const history=document.getElementById('history');
    const card=document.createElement('div');
    card.classList.add('bg-white');
    const transaction=document.createElement('p');
    const text=`${donationAmount} taka is donated for Aid for Injured in the Quota Movement`;
    transaction.innerText=text;
    transaction.classList.add('font-bold');
    const date=document.createElement('p');
    const currentDate = new Date(); 
    const datetime = "Date: " + currentDate.getDate() + "/"
                    + (currentDate.getMonth()+1)  + "/" 
                    + currentDate.getFullYear() + " @ "  
                    + currentDate.getHours() + ":"  
                    + currentDate.getMinutes() + ":" 
                    + currentDate.getSeconds();
    date.innerText=datetime;
    card.appendChild(transaction);
    card.appendChild(date);
    history.appendChild(card);
    document.getElementById('my_modal_5').showModal();
});