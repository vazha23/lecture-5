// ajax დავალება
// 1. გამოითხოვეთ სია პოსტების  https://jsonplaceholder.typicode.com/posts
// 2. წაიკითხეთ json დატა response ობიექტიდან
// 3. შექმენით მარკაპი
// <div>
//   <div>post id {}</div
//   <h1>title</h1>
//   <p>body</p>
// </div>


async function readPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();

    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const button = document.createElement("button");

    h1.textContent = data.title;
    p.textContent = data.body;
    button.textContent = "send";

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(button);
    document.body.appendChild(div);

    button.addEventListener("click", async () => {
            console.log(data);
        });
}
    readPost().then(data => console.log('data',data));
readPost()

// 4 მარტის დავალება.
// 1. ვაგრძელებთ წინა დავალებას, დავალება 6,  ფორმის საშვალებით მიღებული
// ინფორმაცია უნდა ასევე დავხატოთ ჰტმლ დოკუმენტში. is_admin ველი უნდა იყოს ჩექბოქსი

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const totalSalesInput = document.querySelector('#totalSales');
const isAdminInput = document.querySelector('#isAdmin');
const ul = document.querySelector('.ul');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const li = document.createElement('li');
    ul.appendChild(li);

    li.textContent = 
    `${nameInput.value} 
    ${surnameInput.value} 
    - Total Sales: ${totalSalesInput.value}
    - Admin: ${isAdminInput.checked ? 'Yes' : 'No'}`;
});


// 2. დაწერეთ ფუნქცია რომელიც მითითებული ენდოფოინთიდან
// https://api.open-meteo.com/v1/forecast?latitude=41.69&longitude=44.83&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m
// გამოითხოვს ამინდის პროგნოზს და დახატავს html დოკუმენტში.
// დახატეთ შემდეგი ველები, გრძედი, განედი, ტემპერატურა, ქარის სიჩქარე. თაიმზონი

// latitude
// longitude
// temperature
// windSpeed
// timeZone

async function getWeather() {
    const response2 = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=41.69&longitude=44.83&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
    const data1 = await response2.json()
    console.log(data1);
    
    const latitude = document.createElement('h2')
    const longitude = document.createElement('h2')
    const temperature = document.createElement('h2')
    const windspeed = document.createElement('h2')
    const timezone = document.createElement('h2')

    latitude.textContent= `latitude:${data1.latitude}`;
    longitude.textContent=`longitude:${data1.longitude}`
    temperature.textContent=`temperature:${data1.current_weather.temperature}`
    windspeed.textContent=`windspeed:${data1.current_weather.windspeed}`
    timezone.textContent=`timezone:${data1.timezone}`

    document.body.appendChild(latitude)
    document.body.appendChild(longitude)
    document.body.appendChild(temperature)
    document.body.appendChild(windspeed)
    document.body.appendChild(timezone)
    
}
getWeather();  