
/*початок функції відправки повідомлень в телеграм */
const telega_token = "8269051998:AAFEs9Rt7V_eHvclZjL7uqZ2lNhbtOfMQSI";
const telegs_id = "@paktika1"; //назва групи в якій є бот, якого строюю під даний сайт
const telega_api = `https://api.telegram.org/bot${telega_token}/sendMessage`;


async function send_telega(event) {
  event.preventDefault(); //відміна перезавантаження сторінки 
  const massage_rezalt = document.querySelector(".rezalt");
  const massage_rezalt2 = document.querySelector(".rezalt2");
  const massage_rezalt3 = document.querySelector(".rezalt3");
  //console.log(butom, massage_rezalt)
  massage_rezalt.textContent = "";
  

  //повідомлення 1
  const forma = document.querySelector(".form");
  const butom = document.querySelector(".butom");

  //повідомлення 2
  const forma2 = document.querySelector(".form2");
  const butom2 = document.querySelector(".butom2");

   //повідомлення 3
  const forma3 = document.querySelector(".form3");
  const butom3 = document.querySelector(".butom3");


  //console.log(event.submitter.id)
  let a=event.submitter.id
  //console.log(typeof(a))

 
  const formData = new FormData(forma); //збирає всі данні із форми, яка заповнюється користувачем
  const formData2 = Object.fromEntries(formData.entries()); //перетворення зібраних даних в обєкт
  const zayavka = `Заявка от ${formData2.name}!\nтелефон клієнта ${formData2.tel} !\n коментар щодо спеціаліста ${formData2.vud}`;
 
  //const {name, tel, golf}=Object.fromEntries(new formData(forma).entries())

 

  const formData21 = new FormData(forma2); //збирає всі данні із форми, яка заповнюється користувачем
  const formData22 = Object.fromEntries(formData21.entries()); //перетворення зібраних даних в обєкт
  const zayavka2 = `Заявка от ${formData22.name}!\nтелефон клієнта ${formData22.tel} !\n шукаю наступного спеціаліста ${formData22.vud}`;
  //console.log(zayavka2)



  const formData3 = new FormData(forma3); //збирає всі данні із форми, яка заповнюється користувачем
  const formData31 = Object.fromEntries(formData3.entries()); //перетворення зібраних даних в обєкт
  const zayavka3 = `Заявка от ${formData31.name}!\nтелефон клієнта ${formData31.tel} !\n шукаю наступного спеціаліста ${formData31.vud}`;
  //console.log(zayavka2)

 

  //повідомлення 1
  try {
    if(a==='1'){
    let response = await fetch(telega_api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegs_id,
        text: zayavka,
      }),
    });  
     console.log(response)
    }

else if (a==='2'){
    let response = await fetch(telega_api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegs_id,
        text: zayavka2,
      }),
    }); 
    console.log(response)
  }
  else  if(a==='3'){
    let response = await fetch(telega_api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegs_id,
        text: zayavka3,
      }),
    });
    console.log(response)

         window.location='https://localhost/GIT/lending_kadru/'
  }
  console.log(response)

   //отработка ошибки запроса
    if (response.ok) {
      massage_rezalt.textContent = "Ваше замовлення прийняте, ми скоро з вами зв'яжемося"; //виведення повідомлення коли відбувся успішний запрос
      forma.reset(); // очистка формы после отправки
      forma2.reset(); // очистка формы после отправки
      forma3.reset(); // очистка формы после отправки

    } else {
      throw new Error(response.statusText); //создали текст ошибки
    }
  } catch (error) {
    console.error(error); //виведення помилки яку зафіксували
    massage_rezalt.textContent = "произошла ошибка, подайте заказ ещё раз"; // виведення повідомлення коли запрос не успішний
      forma.reset(); // очистка формы после отправки
      forma2.reset(); // очистка формы после отправки
      forma3.reset(); // очистка формы после отправки
      }
}
 


/*кінець функції відправки повідомлень в телеграм */





/* начало плавная прокрутка */
const yakor=document.querySelectorAll('a[href*="#"]')
for (let i of yakor){
    i.addEventListener('click', function(event){
       event.preventDefault();
        const n=i.getAttribute('href')
        document.querySelector(''+ n ).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}
/* конец плавная прокрутка */

const body=document.body;

function otmena(){
    let pos=window.scrollY;
    body.classList.add('otmenascrol');
    /*начало скрипт для отмены скрола посередине сайта что б не пригал */
    
    console.log(pos);
    body.dataset.position=pos;
    body.style.top=-pos+'px';
/*конец скрипт для отмены скрола посередине сайта что б не пригал */
}


function vkl(){
     /*начало скрипт для поновления скрола посередине сайта что б не пригал */
    let pos=parseInt(body.dataset.position,10) /*перевели в число значение в дата атрибуте */
    //console.log(pos);
    body.style.top='auto';
    body.classList.remove('otmenascrol');
    window.scroll({top:pos,left:0});
    body.removeAttribute('pos');
    /*конец скрипт для поновления скрола посередине сайта что б не пригал*/
}




/* начало кнопка телега */
function vidgyk(){
    const v4=document.querySelector('[data-vid1]')
    const v5=document.querySelector('.box811')
    const v6=document.querySelector('.pulse')
    const v7=document.querySelector('.box9')
    const v8=document.querySelector('.dws')

    v6.addEventListener('click', function(){
        v5.style.display="flex";
        v7.style.display="flex";
        v8.style.display="none";
        otmena();
        //console.log(v6)
    })
    v4.addEventListener('click', function(){
        v5.style.display="none";
        v7.style.display="none";
        v8.style.display="flex";
        vkl();
        
    })
}
vidgyk();
/* конец кнопка телега */