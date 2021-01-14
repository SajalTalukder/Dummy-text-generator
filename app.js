let para = [
  `similique quasi architecto inventore a modi id
    quibusdam praesentium, consequatur, ratione nulla enim eos dicta accusamus
    ea asperiores! Reiciendis similique facere ipsam quidem numquam adipisci
    libero eaque sit laborum ab. Amet fugiat debitis sapiente dolore expedita,
    reiciendis quidem aut temporibus nostrum alias, vero ut corporis dolores
    enim sunt, officiis molestiae accusantium error! Quasi veniam corrupti
    nobis, maxime tempore, est suscipit distinctio, odio facere numquam quae
    sapiente? Assumenda ullam, nobis autem molestiae tempora temporibus. Eius
    quam fuga qui`,

  ` alias, architecto dolorum reprehenderit repellat labore
    delectus rem libero nobis, amet itaque, autem aut. Consequatur voluptas
    ullam quam, excepturi nemo amet, voluptate minima quasi odio tenetur omnis
    blanditiis doloremque enim culpa, sequi accusamus perspiciatis? Quod enim
    cum quisquam expedita voluptas dicta neque, accusamus quia veniam doloribus,
    ex odio quae esse dolores nostrum corrupti velit odit a temporibus ipsum
    beatae explicabo vero numquam rem!`,

  ` Maxime obcaecati error voluptatibus ipsum
    harum porro alias, at numquam cupiditate esse pariatur dolorem iure tenetur.
    Vero deserunt quos qui aut ut nisi soluta ratione necessitatibus fuga sit
    optio exercitationem, quidem minima rerum, beatae vitae et iusto at! Aliquam
    officia suscipit cupiditate laudantium deserunt ducimus aut itaque illo
    dolorum possimus eius sed numquam, ut expedita blanditiis ipsam dolorem rem
    molestias vero quos ex nam quisquam molestiae accusantium? Ullam sed
    quibusdam aliquid aperiam facere quis, commodi repellendus placeat officia
    hic libero`,

  `esciunt iste dolorem suscipit? Esse vitae tenetur hic accusamus
    maxime unde aut commodi consectetur blanditiis beatae, velit ab obcaecati
    voluptate reprehenderit quibusdam sed asperiores! Voluptatum amet repellat
    asperiores consequuntur libero inventore vel officiis ab eaque! Recusandae
    aspernatur libero non iure veniam? Ratione laborum ipsa blanditiis aperiam
    possimus cum`,

  `illum asperiores quibusdam animi nobis culpa repellat similique
    sequi laboriosam repudiandae cupiditate porro maxime quae illo modi,
    voluptatum sunt nostrum odit. Eveniet, cum. Inventore, perferendis esse
    illum necessitatibus quos natus sed ab laudantium similique ad? Quo, eveniet
    labore ipsum odit saepe, fugit accusantium aperiam totam possimus maiores
    magni assumenda blanditiis sunt! Autem explicabo quos non aut nulla!
    Possimus illo atque ratione veritatis beatae quaerat a architecto. Velit
    nobis`,

  `eum illo et molestiae atque odit a omnis quidem mollitia tenetur
    suscipit veniam, quos aperiam consequuntur, dicta officia odio veritatis
    voluptas cum. In dolorem modi eum optio, quibusdam exercitationem! Aliquam
    rem accusamus natus sed error, velit provident! Dolore porro numquam
    asperiores sequi nisi vitae quaerat quis reprehenderit tenetur commodi, non
    aperiam facere tempore distinctio praesentium sapiente vel quibusdam
    obcaecati, est`,

  ` eum fugit perferendis in quos. A quis numquam molestias totam
    officiis laudantium voluptatem. Minus, consequuntur? Repellat eum qui eius
    quibusdam accusamus odit iure rem delectus fuga deserunt dicta dolor fugit
    quod sint error officia, in laborum amet magni at tempora modi molestias
    ipsum quae. Repellat necessitatibus ut libero! Illo, exercitationem?
    Mollitia reiciendis saepe obcaecati.`,

  ` harum porro alias, at numquam cupiditate esse pariatur dolorem iure tenetur.
    Vero deserunt quos qui aut ut nisi soluta ratione necessitatibus fuga sit
    optio exercitationem, quidem minima rerum, beatae vitae et iusto at! Aliquam
    officia suscipit cupiditate laudantium deserunt ducimus aut itaque illo
    dolorum possimus eius sed numquam, ut expedita blanditiis ipsam dolorem rem
    molestias vero quos ex nam quisquam molestiae accusantium? Ullam sed
    quibusdam `,

  ` quibusdam praesentium, consequatur, ratione nulla enim eos dicta accusamus
    ea asperiores! Reiciendis similique facere ipsam quidem numquam adipisci
    libero eaque sit laborum ab. Amet fugiat debitis sapiente dolore expedita,
    reiciendis quidem aut temporibus nostrum alias, vero ut corporis dolores
    enim sunt, officiis molestiae accusantium error! Quasi veniam corrupti
    nobis, maxime tempore, est suscipit distinctio, odio facere numquam quae
    sapiente? Assumenda ullam, nobis autem molestiae tempora temporibus. Eius
    quam fuga `,

  `equi laboriosam repudiandae cupiditate porro maxime quae illo modi,
    voluptatum sunt nostrum odit. Eveniet, cum. Inventore, perferendis esse
    illum necessitatibus quos natus sed ab laudantium similique ad? Quo, eveniet
    labore ipsum odit saepe, fugit accusantium aperiam totam possimus maiores
    magni assumenda blanditiis sunt! Autem explicabo quos non aut nulla!
    Possimus `,
];

const input = document.getElementById("inp");
const btn = document.getElementById("btn");
const btn_clear = document.getElementById("btn-clear");
const paraDiv = document.querySelector(".para-div");

function randomIndex() {
  return Math.floor(Math.random() * para.length);
}

function generate() {
  paraDiv.innerHTML = "";
  const inpValue = +input.value;
  if (isNaN(inpValue) || inpValue >= 11 || inpValue <= 0) {
    paraDiv.innerHTML = `<p>${para[randomIndex()]}</p>`;
  } else {
    const sliceData = para.slice(0, inpValue);
    finalPara = sliceData
      .map((data) => {
        return `<p>${data}</p>`;
      })
      .join("");
    paraDiv.innerHTML = finalPara;
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  generate();
});
btn_clear.addEventListener("click", () => {
  paraDiv.innerHTML = "";
  input.value = "";
});
