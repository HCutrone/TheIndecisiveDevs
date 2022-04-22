let start = new Date();
const end = new Date(2023,1,1,1,1,0,0);

const total = end - start;
const seconds = Math.floor((total / 1000) % 60);
const minutes = Math.floor((total / 1000 / 60) % 60);
const hours = Math.floor((total / 1000 / 60 / 60) % 24);
const days = Math.floor((total / 1000 / 60 / 60 / 24) % 365);

function buttonTest()
{
    console.log("click");
}

function Groups() {
    return (
      <div>
          <h2>Days: {days} Hours: {hours} Minutes: {minutes} Seconds: {seconds}</h2>
          <button onClick={buttonTest}>Button</button>
      </div>
    );
}

export default Groups