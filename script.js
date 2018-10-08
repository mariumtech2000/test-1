const months = ['january','february', 'march', 'april',' may', 'june', 'july','august', 'september', 'october', 'november', 'december'];
function initilizer(index){

    $.ajax({
        url:'https://techkaro-test.herokuapp.com/api/v1/getdata?lang=' +index,
        success: function (data) {
            console.log(data);

    const dateObj = new Date (data.date);
    const month = months[dateObj.getMonth()];
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    let dateAndMonth = document.querySelector("#main");
    dateAndMonth.innerHTML =`
    <i class="fas fa-calendar-alt"></i> ${month} ${date},${year} - ${hours}h ${minutes}m 
     <i class="fas fa-user"></i> by <span class="para"> <b>TechKaro Community</b></span>
 `,
            document.querySelector("#flower-img").style =`background-image:url(${data.imageURL})`;
            document.querySelector(".card-title").innerHTML =data.info.heading;
            document.querySelector(".card-text").innerHTML =data.info.description;
            document.querySelector(".card2").innerHTML =data.sale.heading;
            document.querySelector(".card3").innerHTML =data.sale.description;
            document.querySelector("#op1").innerHTML =data.menuOptions[0];
            document.querySelector("#op2").innerHTML =data.menuOptions[1];
            document.querySelector("#op3").innerHTML =data.menuOptions[2];
            document.querySelector("#op4").innerHTML =data.menuOptions[3];   
        },
    });
}