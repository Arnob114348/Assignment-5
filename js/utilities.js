function inputFieldValue(id)
{
    const inputValue=document.getElementById(id).value;
    return parseFloat(inputValue);
}

function textFieldValue(id)
{
    const textValue=document.getElementById(id).innerText;
    return parseFloat(textValue);
}