const evilButton = document.getElementById("evil-button");
const OFFSET = 100;

evilButton.addEventListener("click", () => {
  alert("Nice Try");
  window.close();
});

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = evilButton.getBoundingClientRect();
  const horizontalDistanceFrom = distanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width
  );
  const verticalDistanceFrom = distanceFromCenter(
    buttonBox.y,
    y,
    buttonBox.height
  );
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;

  if (
    Math.abs(horizontalDistanceFrom) <= horizontalOffset &&
    Math.abs(verticalDistanceFrom) <= verticalOffset
  ) {
    setButtonPosition(
      buttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 10,
      buttonBox.y + (verticalOffset / verticalDistanceFrom) * 10
    );
  }
});

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = evilButton.getBoundingClientRect();

  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET;
  }

  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET;
  }

  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET;
  }

  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET;
  }

  evilButton.style.left = `${left}px`;
  evilButton.style.top = `${top}px`;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}

//"Psedo Navegacao"
function changeContent(page) {
	let contentDiv = document.getElementById('content');

	switch (page) {
		case 'about':
			contentDiv.innerHTML = `
            <div class="card">
				<h2>Jantar dia 11 de Janeiro (Sabado), as 20h30? <br> Mesmo lugar da ultima vez</h2>
				<img
                  id="image"
                  src="https://i.pinimg.com/200x150/bb/b1/ee/bbb1ee8942af3740d62ca8068769349f.jpg"
                  alt=""
                /> 
				<a class="positive-link" id="next-button" href="#" onclick="changeContent('yes')">
                  Sim
                </a>
            </div>    
			`;
			break;
        case 'yes':
                contentDiv.innerHTML =  `
                <div class="card">
                    <h2>Issooo!!</h2>
                    <img
                      id="image"
                      src="https://media.tenor.com/zAnvyVKYUx4AAAAe/silly-happy.png"
                      alt=""
                    /> 
                    <a class="positive-link" id="next-button" href="#" onclick="changeContent('end')">
                      Informação importante
                    </a>
                </div>    
                `;
            break;
		case 'end':
			contentDiv.innerHTML =  `
            <div class="card">
				<img
                  id="image"
                  src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExejdjbDhqNG12YWlkMndraHF3dmpxOXA0Y3JyanFxemM3cTh3MzJrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xxhKYiOOIs9mGZz1Hy/giphy.webp"
                  alt=""
                /> 
                <h2>Como amigos, nao te preocupes <br> So acho que merecemos um jantar!</h2>
				<a class="positive-link" id="next-button" href="https://www.instagram.com/milhomemmm/profilecard/?igsh=ZGNqZ2VlZXc2eWx1" onclick="changeContent('end')">
                  Avisar ao Marcelo
                </a>
            </div>    
			`;
			break;
		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}