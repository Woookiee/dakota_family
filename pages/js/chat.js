

  function startChat()
{
var number = '77473464895';
var message = 'Хэй Dakota! Мне понравился рюкзак, помоги оформить заказ🖖🏾';

var encodedMessage = encodeURIComponent(message);

var url = "https://api.whatsapp.com/send?phone="+number+"&text="+message;


  window.location.replace(url);
}