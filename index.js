 /*var fred = ['fred', 'flintsone', 'fred@gmail.com', '50'];

  console.log('length=', fred.length);

  //for (var i = 0; i < fred.length; i++) {
  for (var i in fred) {
      if (i == 0)
          console.log('First name:', fred[i]);
      else if (i == 1)
          console.log('Last Name:', fred[i]);
      else if (i == 2)
          console.log('Email:', fred[i]);
      else //i==3
          console.log("age:", fred[i]);




  }
  */
 //create an image - not in the DOM yet
 var imgElem = document.createElement('img');

 //decorate the element
 imgElem.setAttribute('src', 'images/bee.png');
 imgElem.classList.add('small-bottle')
 //find the place to attach the element 
 var hereElem = document.body.querySelector('#here');

 //attach image to hereElem
 hereElem.appendChild(imgElem)
 