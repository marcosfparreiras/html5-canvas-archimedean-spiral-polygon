$(document).ready(function() {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  clear_and_draw_random();

  $(document).click(function() {
    clear_and_draw_random();
  });

  function draw_polygon(  x_position, y_position, max_i_value, i_increment,
                          angle_increment, axis_increment, color
                        ) {
    context.beginPath();
    for (i=0; i< max_i_value; i= i + i_increment) {
      angle = angle_increment * i;
      x=(axis_increment+angle)*Math.cos(angle) + x_position;
      y=(axis_increment+angle)*Math.sin(angle) + y_position;
      context.lineTo(x, y);
    }
    context.lineWidth = 1.;
    // context.strokeStyle = random_color();
    context.strokeStyle = color;
    context.stroke();
  }

  function clear_draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function draw_random(color) {
    max_i_value = 4000;
    i_increment = (Math.random() * 100) + 1;
    angle_increment = 0.1;
    axis_increment = Math.random() + 0.1;
    // axis_increment = 1;
    draw_polygon(400, 300, max_i_value, i_increment, angle_increment, axis_increment, color);
  }

  function clear_and_draw_random() {
    clear_draw();
    var bg_color = random_color();
    var draw_color = random_color();
    $('#myCanvas').css('background-color', bg_color);
    $('body').css('background-color', bg_color);

    $('#text').css('color', draw_color);
    draw_random(draw_color);
  }

  function random_color() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
});

// Cool draws
// draw_polygon(context, 400, 300, 4000, 50, 0.1, 50);
// draw_polygon(context, 400, 300, 4000, 7, 0.1, 3);
// draw_polygon(context, 400, 300, 4000, 21, 0.1, 1);
// draw_polygon(context, 400, 300, 4000, 25, 0.1, 1);
// draw_polygon(context, 400, 300, 4000, 25, 0.1, 1);

// Initial values
// for (i=0; i< 720; i++) {
//   angle = 0.1 * i;
//   x=(1+angle)*Math.cos(angle);
//   y=(1+angle)*Math.sin(angle);
//   context.lineTo(x, y);
// }
