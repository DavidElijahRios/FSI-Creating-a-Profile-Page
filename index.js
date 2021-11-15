let content = document.querySelector('.js-generated.content')
content.style.minHeight = '30vH';
content.style.borderStyle = 'solid';
content.style.borderWidth = '1px';
content.style.borderColor = 'black';
content.style.padding = '10px' ;

//Header
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

//div and dog content
let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
let dogImage = document.createElement('img') //This is creating the HTML tag.
dogImage.setAttribute('class', 'dog-image') // I am now creating the class attribute.
dogImage.setAttribute('src', './assets/rizzo.jpg') // I am now creating the other class attribute.
dogContent.append(dogImage)
content.append(dogContent)

//div2 & Description Header below
let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
let info = document.createElement('h3')
info.textContent = "Description:"
dogDetails.append(info)
content.append(dogDetails)

//Paragraph element below
let par = document.createElement('p')
par.textContent = `This gentle dog is aloof toward her owner,
and never comes when called. She always acts as though any stranger
she meets will harm her, and dislikes other animals.`
dogDetails.append(par)

//Feeding times header
let yum = document.createElement('h3')
yum.textContent = 'Feeding Times:'
dogDetails.append(yum)

//Unordered list of times
let timeList = document.createElement('ul')
let time1 = document.createElement('li')
time1.textContent = '9:00 am'
let time2 = document.createElement('li')
time2.textContent = '12:00 pm'
let time3 = document.createElement('li')
time3.textContent = '5:00 pm'
dogDetails.append(timeList)
timeList.append(time1)
timeList.append(time2)
timeList.append(time3)

//Can't quite seem to figure out how to move headers, lists, and paragrapghs to the right of picture.
//Also cannot seem to get the second div tag to end at the bottom of the code.
//Other than that Assignment is complete.